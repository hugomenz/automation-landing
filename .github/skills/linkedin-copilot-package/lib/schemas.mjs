// Entity schema factories for read-only research records. Zero dependencies. ESM.
// Every factory enforces: canonical URLs, 300-char excerpts, and observed_at.

import { canonicalizeLinkedInUrl, truncateExcerpt } from './normalize.mjs';
import { normalizeText } from './readonly-policy.mjs';

const EXCERPT_MAX = 300;

/** Priority role keywords from the ICP (buyers, validators, gatekeepers). */
export const ICP_ROLE_KEYWORDS = Object.freeze({
  buyers: [
    'Geschäftsführer', 'Geschäftsführender Gesellschafter', 'Inhaber', 'Vertriebsleiter',
    'Head of Sales', 'Leiter Technischer Vertrieb', 'Leiter Vertriebstechnik',
    'Head of Sales Engineering', 'Head of Application Engineering', 'Leiter Projektierung',
    'Angebotsleiter', 'Teamleiter Kalkulation', 'Bereichsleiter',
  ],
  technical_validators: [
    'Technischer Leiter', 'Konstruktionsleiter', 'Engineering Manager',
    'Leiter Automation', 'Leiter Elektrokonstruktion', 'Produktmanager',
  ],
  gatekeepers: [
    'IT-Leiter', 'Leiter Digitalisierung', 'Informationssicherheit',
    'Datenschutz', 'CRM-Verantwortlicher', 'ERP-Verantwortlicher',
  ],
});

/** Priority industry / capability keywords (DE + EN). */
export const ICP_INDUSTRY_KEYWORDS = Object.freeze([
  'Maschinenbau', 'Sondermaschinenbau', 'Verpackungsmaschinen', 'Verpackungstechnik',
  'Sekundärverpackung', 'End-of-Line', 'Endverpackung', 'Palettierung', 'Palettieranlagen',
  'Fördertechnik', 'Automatisierungstechnik', 'Anlagenbau', 'Robotik', 'Application Engineering',
  'Sales Engineering', 'Technischer Vertrieb', 'Projektierung', 'Angebotswesen', 'Kalkulation',
]);

/** Topics that indicate relevant industrial publishing activity. */
export const ICP_TOPICS = Object.freeze([
  'RFQ', 'CPQ', 'Angebot', 'Angebotswesen', 'technischer Vertrieb', 'Maschinenbau',
  'Automatisierung', 'Palettierung', 'Verpackung', 'End-of-Line', 'Konfiguration',
]);

/** Return the subset of `keywords` that appear (diacritic-insensitive) in `text`. */
export function matchKeywords(text, keywords) {
  const hay = normalizeText(text);
  if (!hay) return [];
  return (keywords || []).filter((kw) => {
    const k = normalizeText(kw);
    return k && hay.includes(k);
  });
}

function nowIso() {
  return new Date().toISOString();
}

/** Person research record. */
export function makePerson(fields = {}) {
  return {
    entity_type: 'person',
    name: fields.name ?? null,
    profile_url: canonicalizeLinkedInUrl(fields.profile_url) ?? null,
    headline: fields.headline ?? null,
    current_title: fields.current_title ?? null,
    current_company: fields.current_company ?? null,
    current_company_url: canonicalizeLinkedInUrl(fields.current_company_url) ?? null,
    location: fields.location ?? null,
    recent_activity: fields.recent_activity ?? {
      status: 'unknown',
      latest_visible_date: null,
      items_observed: 0,
    },
    matched_role_keywords: fields.matched_role_keywords ?? [],
    matched_industry_keywords: fields.matched_industry_keywords ?? [],
    source_query: fields.source_query ?? null,
    source_url: fields.source_url ?? null,
    observed_at: fields.observed_at ?? nowIso(),
    confidence: fields.confidence ?? {},
    notes: fields.notes ?? [],
  };
}

/** Company research record. */
export function makeCompany(fields = {}) {
  return {
    entity_type: 'company',
    name: fields.name ?? null,
    company_url: canonicalizeLinkedInUrl(fields.company_url) ?? null,
    tagline: fields.tagline ?? null,
    industry: fields.industry ?? null,
    employee_range_visible: fields.employee_range_visible ?? null,
    headquarters: fields.headquarters ?? null,
    website_visible: fields.website_visible ?? null,
    description_excerpt: truncateExcerpt(fields.description_excerpt, EXCERPT_MAX),
    recent_activity: fields.recent_activity ?? {
      status: 'unknown',
      latest_visible_date: null,
      items_observed: 0,
    },
    matched_keywords: fields.matched_keywords ?? [],
    source_query: fields.source_query ?? null,
    source_url: fields.source_url ?? null,
    observed_at: fields.observed_at ?? nowIso(),
    confidence: fields.confidence ?? {},
    notes: fields.notes ?? [],
  };
}

/** Post research record. */
export function makePost(fields = {}) {
  return {
    entity_type: 'post',
    post_url: canonicalizeLinkedInUrl(fields.post_url) ?? null,
    author_name: fields.author_name ?? null,
    author_url: canonicalizeLinkedInUrl(fields.author_url) ?? null,
    author_headline: fields.author_headline ?? null,
    published_at_visible: fields.published_at_visible ?? null,
    published_at_normalized: fields.published_at_normalized ?? null,
    text_excerpt: truncateExcerpt(fields.text_excerpt, EXCERPT_MAX),
    visible_reactions: fields.visible_reactions ?? null,
    visible_comments: fields.visible_comments ?? null,
    visible_reposts: fields.visible_reposts ?? null,
    matched_topics: fields.matched_topics ?? [],
    source_query: fields.source_query ?? null,
    observed_at: fields.observed_at ?? nowIso(),
  };
}

/** Comment research record. */
export function makeComment(fields = {}) {
  return {
    entity_type: 'comment',
    post_url: canonicalizeLinkedInUrl(fields.post_url) ?? null,
    commenter_name: fields.commenter_name ?? null,
    commenter_url: canonicalizeLinkedInUrl(fields.commenter_url) ?? null,
    commenter_headline: fields.commenter_headline ?? null,
    published_at_visible: fields.published_at_visible ?? null,
    text_excerpt: truncateExcerpt(fields.text_excerpt, EXCERPT_MAX),
    observed_at: fields.observed_at ?? nowIso(),
  };
}
