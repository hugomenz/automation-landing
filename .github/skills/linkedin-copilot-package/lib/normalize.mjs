// Data normalization helpers: canonical URLs, deduplication, excerpt limiting,
// and multilingual relative-date parsing. Zero dependencies. ESM.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { normalizeText } from './readonly-policy.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const i18n = JSON.parse(
  readFileSync(join(__dirname, '..', 'selectors', 'linkedin-i18n.json'), 'utf8'),
);

/**
 * Reduce any LinkedIn URL to its canonical, tracking-free form.
 * - /in/{slug}/            -> profile
 * - /company/{slug}/       -> company
 * - /school/{slug}/        -> school
 * - .../urn:li:activity:ID -> post permalink
 * Query strings and tracking params are always dropped.
 */
export function canonicalizeLinkedInUrl(raw) {
  if (!raw) return null;
  let u;
  try {
    u = new URL(String(raw), 'https://www.linkedin.com');
  } catch {
    return null;
  }
  let path = u.pathname;
  while (path.endsWith('/')) path = path.slice(0, -1);

  const activity = /urn:li:activity:(\d+)/.exec(String(raw)) || /activity[-:](\d+)/i.exec(path);
  if (activity) {
    return `https://www.linkedin.com/feed/update/urn:li:activity:${activity[1]}/`;
  }
  const inMatch = /^\/in\/([^/]+)/.exec(path);
  if (inMatch) return `https://www.linkedin.com/in/${inMatch[1]}/`;
  const companyMatch = /^\/company\/([^/]+)/.exec(path);
  if (companyMatch) return `https://www.linkedin.com/company/${companyMatch[1]}/`;
  const schoolMatch = /^\/school\/([^/]+)/.exec(path);
  if (schoolMatch) return `https://www.linkedin.com/school/${schoolMatch[1]}/`;
  return `https://www.linkedin.com${path || '/'}`;
}

const URL_KEYS = ['profile_url', 'company_url', 'post_url', 'commenter_url', 'url', 'source_url'];

function getEntityUrl(record, preferredKey) {
  if (preferredKey && record[preferredKey]) return record[preferredKey];
  for (const k of URL_KEYS) if (record?.[k]) return record[k];
  return null;
}

/**
 * Deduplicate people/companies/posts by their canonical LinkedIn URL.
 * First occurrence wins; the surviving record's URL is rewritten to canonical.
 */
export function dedupeByCanonicalUrl(records, key) {
  const seen = new Set();
  const out = [];
  for (const r of records || []) {
    const canon = canonicalizeLinkedInUrl(getEntityUrl(r, key));
    const dedupeKey = canon || JSON.stringify(r);
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);
    if (canon) {
      const usedKey = key && r[key] ? key : URL_KEYS.find((k) => r[k]);
      out.push(usedKey ? { ...r, [usedKey]: canon } : r);
    } else {
      out.push(r);
    }
  }
  return out;
}

/** Collapse whitespace and cap an excerpt (default 300 chars) with an ellipsis. */
export function truncateExcerpt(text, max = 300) {
  if (text == null) return null;
  const clean = String(text).replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

// Pre-compute a relative-date matcher from the i18n unit variants.
const MS_PER = {
  minute: 60_000,
  hour: 3_600_000,
  day: 86_400_000,
  week: 604_800_000,
  month: 2_629_800_000,
  year: 31_557_600_000,
};

const UNIT_VARIANTS = (() => {
  const list = [];
  const units = i18n.relative_time_units;
  for (const unitKey of Object.keys(MS_PER)) {
    for (const loc of ['de', 'en', 'es']) {
      for (const v of units[unitKey][loc] || []) {
        const tok = normalizeText(v);
        if (tok) list.push({ tok, unitKey });
      }
    }
  }
  // Longer tokens first so "monat" beats "m", "minute" beats "min", etc.
  return list.sort((a, b) => b.tok.length - a.tok.length);
})();

const RELATIVE_RE = (() => {
  const alt = UNIT_VARIANTS.map((v) => v.tok.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`)).join('|');
  return new RegExp(String.raw`(\d+)\s*(` + alt + String.raw`)(?![\p{L}])`, 'u');
})();

/**
 * Parse a visible relative date such as "3 Tage •", "vor 2 Wochen", "5h",
 * "hace 3 días", "1 Monat" into an approximate ISO date (YYYY-MM-DD).
 * Returns { normalized: null, status: 'unknown' } when it cannot be parsed
 * (never invents a date).
 */
export function normalizeVisibleDate(text, now = new Date()) {
  const h = normalizeText(text);
  if (!h) return { normalized: null, status: 'unknown', raw: text ?? null };

  // Absolute ISO-ish date already present?
  const iso = /\b(\d{4})-(\d{2})-(\d{2})\b/.exec(h);
  if (iso) return { normalized: `${iso[1]}-${iso[2]}-${iso[3]}`, status: 'ok', unit: 'absolute', raw: text };

  const m = RELATIVE_RE.exec(h);
  if (!m) return { normalized: null, status: 'unknown', raw: text };
  const amount = Number.parseInt(m[1], 10);
  const hit = UNIT_VARIANTS.find((v) => v.tok === m[2]);
  if (!hit || Number.isNaN(amount)) return { normalized: null, status: 'unknown', raw: text };
  const d = new Date(now.getTime() - amount * MS_PER[hit.unitKey]);
  return {
    normalized: d.toISOString().slice(0, 10),
    status: 'ok',
    unit: hit.unitKey,
    amount,
    raw: text,
  };
}

/**
 * Classify recent activity from a set of observed items/dates.
 * @param {(string|object)[]} entries relative-date strings or objects with a date field
 * @param {{days?:number, now?:Date}} opts
 */
export function classifyActivity(entries, { days = 30, now = new Date() } = {}) {
  const itemsObserved = (entries || []).length;
  const dates = [];
  for (const e of entries || []) {
    const txt = typeof e === 'string'
      ? e
      : e?.published_at_visible ?? e?.published_at_normalized ?? e?.date ?? '';
    const norm = e?.published_at_normalized && /^\d{4}-\d{2}-\d{2}$/.test(e.published_at_normalized)
      ? { normalized: e.published_at_normalized }
      : normalizeVisibleDate(txt, now);
    if (norm.normalized) dates.push(norm.normalized);
  }
  if (dates.length === 0) {
    return { status: 'unknown', latest_visible_date: null, items_observed: itemsObserved };
  }
  dates.sort((a, b) => a.localeCompare(b)); // ISO date strings sort chronologically
  const latest = dates.at(-1);
  const cutoff = new Date(now.getTime() - days * MS_PER.day).toISOString().slice(0, 10);
  return {
    status: latest >= cutoff ? 'active_within_period' : 'inactive_within_observed_period',
    latest_visible_date: latest,
    items_observed: itemsObserved,
  };
}
