// safe_readonly_browser core: classify every element BEFORE interacting with it.
// This module is the single gate that enforces the read-only policy.
//
// Zero dependencies. ESM. Load with Node >= 18.
//
// The agent MUST call assertNavigationAllowed(element) before any click on a
// LinkedIn element. If it does not return an "allow" decision, the element must
// NOT be clicked.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

export const policy = JSON.parse(
  readFileSync(join(ROOT, 'config', 'linkedin-readonly-policy.json'), 'utf8'),
);
const i18n = JSON.parse(
  readFileSync(join(ROOT, 'selectors', 'linkedin-i18n.json'), 'utf8'),
);

/** Normalize text for robust, locale-insensitive matching. */
export function normalizeText(input) {
  return String(input ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics (ä -> a)
    .replace(/[„“”"'’‚]/g, ' ') // strip fancy quotes
    .replace(/\s+/g, ' ')
    .trim();
}

/** Build a case/diacritic-insensitive whole-word matcher for a term. */
function matchesTerm(haystack, term) {
  const t = normalizeText(term);
  if (!t) return false;
  const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
  // Whole-word / whole-phrase boundary match to avoid false positives
  const re = new RegExp(String.raw`(^|[^\p{L}\p{N}])` + escaped + String.raw`([^\p{L}\p{N}]|$)`, 'u');
  return re.test(haystack);
}

/** Flattened set of allowed read-only navigation accessible-name terms. */
const ALLOW_NAV_TERMS = (() => {
  const terms = new Set();
  const add = (obj) => {
    for (const key of Object.keys(obj)) {
      const entry = obj[key];
      for (const loc of ['de', 'en', 'es']) {
        for (const v of entry[loc] || []) terms.add(normalizeText(v));
      }
    }
  };
  add(i18n.navigation);
  add(i18n.profile);
  add(i18n.company);
  return terms;
})();

function blockedByHref(href) {
  for (const pat of policy.block_href_patterns) {
    if (new RegExp(pat, 'i').test(href)) {
      return { decision: 'block', reason: `href matches block pattern ${pat}` };
    }
  }
  return null;
}

function blockedByDenylist(haystack) {
  for (const entry of policy.denylist) {
    for (const loc of ['de', 'en', 'es']) {
      for (const term of entry[loc] || []) {
        if (matchesTerm(haystack, term)) {
          return {
            decision: 'block',
            reason: 'forbidden action term matched',
            matchedAction: entry.action,
            matchedTerm: term,
          };
        }
      }
    }
  }
  return null;
}

function allowedAsSearchInput(role, haystack) {
  if (!['textbox', 'combobox', 'searchbox'].includes(role)) return null;
  const terms = i18n.navigation.search.de.concat(
    i18n.navigation.search.en,
    i18n.navigation.search.es,
  );
  return terms.some((t) => matchesTerm(haystack, t))
    ? { decision: 'allow', reason: 'global search input' }
    : null;
}

function allowedAsNavControl(role, href, haystack) {
  if (!['link', 'button', 'tab', 'listitem', ''].includes(role)) return null;
  const hrefAllowed = policy.allow_href_patterns.some((p) => new RegExp(p, 'i').test(href));
  const nameIsNav = [...ALLOW_NAV_TERMS].some((t) => t && matchesTerm(haystack, t));
  if (hrefAllowed || nameIsNav) {
    return {
      decision: 'allow',
      reason: hrefAllowed ? 'canonical read-only href' : 'known navigation control',
    };
  }
  return null;
}

/**
 * Classify a UI element. Order: block-by-href, block-by-denylist,
 * allow-search-input, allow-nav-control, else uncertain.
 * @param {{role?:string,name?:string,text?:string,href?:string,tag?:string}} el
 * @returns {{decision:'allow'|'block'|'uncertain',reason:string,matchedAction?:string,matchedTerm?:string}}
 */
export function classifyElement(el = {}) {
  const role = normalizeText(el.role);
  const href = String(el.href ?? '');
  const haystack = normalizeText(`${el.name ?? ''} ${el.text ?? ''}`);

  return (
    blockedByHref(href) ||
    blockedByDenylist(haystack) ||
    allowedAsSearchInput(role, haystack) ||
    allowedAsNavControl(role, href, haystack) ||
    { decision: 'uncertain', reason: 'not provably a read-only navigation element' }
  );
}

/**
 * Guard to call before every click. Throws unless the element is a proven
 * read-only navigation target.
 * @returns {object} the classification (decision === 'allow')
 */
export function assertNavigationAllowed(el = {}) {
  const result = classifyElement(el);
  if (result.decision !== 'allow') {
    const detail = result.matchedAction
      ? ` (blocked action: ${result.matchedAction} / "${result.matchedTerm}")`
      : ` (${result.reason})`;
    throw new Error(
      `safe_readonly_browser refused interaction with element "${el.name ?? el.text ?? el.href ?? 'unknown'}"${detail}`,
    );
  }
  return result;
}

/** Response returned when a caller requests a state-changing function. */
export const UNSUPPORTED_WRITE_RESPONSE =
  'Unsupported: linkedin_research_readonly does not perform state-changing LinkedIn actions.';

/** Names of functions this skill intentionally does not implement. */
export const UNSUPPORTED_FUNCTIONS = Object.freeze([
  'linkedin_post', 'linkedin_connect', 'linkedin_follow', 'linkedin_react',
  'linkedin_like', 'linkedin_comment', 'linkedin_reply', 'linkedin_repost',
  'linkedin_share', 'linkedin_message', 'linkedin_send', 'linkedin_save',
  'linkedin_invite', 'linkedin_endorse', 'linkedin_subscribe', 'linkedin_edit',
]);

export const stopConditions = policy.stop_conditions;
export const limits = policy.limits;
