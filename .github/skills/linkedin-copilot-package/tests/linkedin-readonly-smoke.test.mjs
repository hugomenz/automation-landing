// Smoke tests for linkedin_research_readonly. Run: node --test
// Zero dependencies (Node built-in test runner + assert).

import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  classifyElement,
  assertNavigationAllowed,
  normalizeText,
  UNSUPPORTED_WRITE_RESPONSE,
  UNSUPPORTED_FUNCTIONS,
  limits,
} from '../lib/readonly-policy.mjs';
import {
  canonicalizeLinkedInUrl,
  dedupeByCanonicalUrl,
  truncateExcerpt,
  normalizeVisibleDate,
  classifyActivity,
} from '../lib/normalize.mjs';
import { makePerson, makeCompany, makePost, makeComment, matchKeywords } from '../lib/schemas.mjs';
import { toJson, toCsv, exportResearch } from '../lib/export.mjs';

// ---------------------------------------------------------------------------
// Test 7 (acceptance): safe_readonly_browser MUST block every write action, in
// German, English and Spanish. A failure here means an unsafe action could run.
// ---------------------------------------------------------------------------
const FORBIDDEN_LABELS = [
  // Connect
  'Connect', 'Vernetzen', 'Conectar',
  // Follow
  'Follow', 'Folgen', 'Seguir',
  // Message
  'Message', 'Nachricht', 'Mensaje', 'Nachricht an Gerhard Schubert GmbH senden',
  // Like / react
  'Like', 'Reagieren', 'Mit „Gefällt mir“ reagieren', 'Recomendar',
  // Comment
  'Comment', 'Kommentieren', 'Comentar',
  // Repost / share
  'Repost', 'Reposten', 'Teilen', 'Compartir',
  // Save
  'Save', 'Speichern', 'Guardar',
  // Post
  'Start a post', 'Beitrag erstellen', 'Crear publicación',
  // Send
  'Send', 'Senden', 'Enviar',
  // Endorse / invite / subscribe
  'Endorse', 'Bestätigen', 'Einladen', 'Invite', 'Abonnieren', 'Subscribe',
];

test('Test 7: all forbidden action labels are blocked', () => {
  for (const label of FORBIDDEN_LABELS) {
    const result = classifyElement({ role: 'button', name: label });
    assert.equal(
      result.decision,
      'block',
      `Expected BLOCK for "${label}" but got "${result.decision}"`,
    );
  }
});

test('Test 7: assertNavigationAllowed throws on a forbidden element', () => {
  assert.throws(() => assertNavigationAllowed({ role: 'button', name: 'Vernetzen' }));
  assert.throws(() => assertNavigationAllowed({ role: 'button', name: 'Folgen' }));
  assert.throws(() => assertNavigationAllowed({ role: 'button', name: 'Senden' }));
});

test('read-only navigation elements are allowed', () => {
  assert.equal(classifyElement({ role: 'textbox', name: 'Suche' }).decision, 'allow');
  assert.equal(classifyElement({ role: 'link', name: 'Personen' }).decision, 'allow');
  assert.equal(classifyElement({ role: 'button', name: 'Weiter' }).decision, 'allow');
  assert.equal(classifyElement({ role: 'link', name: 'Info' }).decision, 'allow');
  assert.equal(
    classifyElement({ role: 'link', name: 'Timo Fassnacht', href: 'https://www.linkedin.com/in/timo-fassnacht-5648a3248/' }).decision,
    'allow',
  );
  assert.equal(
    classifyElement({ role: 'link', name: 'Gerhard Schubert', href: 'https://www.linkedin.com/company/gerhardschubertgmbhverpackungsmaschinen/' }).decision,
    'allow',
  );
});

test('unknown / ambiguous elements are uncertain, never allowed', () => {
  assert.equal(classifyElement({ role: 'button', name: '' }).decision, 'uncertain');
  assert.equal(classifyElement({ role: 'button', name: '•••' }).decision, 'uncertain');
});

test('a "Folgen" button wins even when it sits inside an allowed company card', () => {
  const result = classifyElement({
    role: 'button',
    name: 'Folgen',
    href: 'https://www.linkedin.com/company/prewa-verpackungsmaschinen-gmbh/',
  });
  assert.equal(result.decision, 'block');
  assert.equal(result.matchedAction, 'follow');
});

test('messaging composer href is blocked', () => {
  assert.equal(
    classifyElement({ role: 'link', name: 'x', href: 'https://www.linkedin.com/messaging/thread/123/' }).decision,
    'block',
  );
});

test('the "Posts" tab is NOT mis-blocked by the create_post rule', () => {
  assert.equal(classifyElement({ role: 'link', name: 'Beiträge' }).decision, 'allow');
  assert.equal(classifyElement({ role: 'link', name: 'Posts' }).decision, 'allow');
});

// ---------------------------------------------------------------------------
// URL canonicalization + dedup
// ---------------------------------------------------------------------------
test('canonicalizeLinkedInUrl strips tracking and normalizes entities', () => {
  assert.equal(
    canonicalizeLinkedInUrl('https://www.linkedin.com/in/paul-daanen-860b7946/?miniProfileUrn=abc&trk=xyz'),
    'https://www.linkedin.com/in/paul-daanen-860b7946/',
  );
  assert.equal(
    canonicalizeLinkedInUrl('https://de.linkedin.com/company/prewa-verpackungsmaschinen-gmbh/about/'),
    'https://www.linkedin.com/company/prewa-verpackungsmaschinen-gmbh/',
  );
  assert.equal(
    canonicalizeLinkedInUrl('https://www.linkedin.com/feed/update/urn:li:activity:7480901060509773826/?utm=1'),
    'https://www.linkedin.com/feed/update/urn:li:activity:7480901060509773826/',
  );
  assert.equal(
    canonicalizeLinkedInUrl('https://www.linkedin.com/posts/someone_slug-activity-7480901060509773826-abcd'),
    'https://www.linkedin.com/feed/update/urn:li:activity:7480901060509773826/',
  );
  assert.equal(canonicalizeLinkedInUrl(''), null);
});

test('dedupeByCanonicalUrl removes duplicate people by canonical URL', () => {
  const input = [
    { name: 'A', profile_url: 'https://www.linkedin.com/in/paul-daanen-860b7946/?trk=1' },
    { name: 'A dup', profile_url: 'https://de.linkedin.com/in/paul-daanen-860b7946/' },
    { name: 'B', profile_url: 'https://www.linkedin.com/in/someone-else/' },
  ];
  const out = dedupeByCanonicalUrl(input, 'profile_url');
  assert.equal(out.length, 2);
  assert.equal(out[0].profile_url, 'https://www.linkedin.com/in/paul-daanen-860b7946/');
});

// ---------------------------------------------------------------------------
// Excerpt limiting
// ---------------------------------------------------------------------------
test('truncateExcerpt caps at 300 chars', () => {
  const long = 'x'.repeat(500);
  const out = truncateExcerpt(long, 300);
  assert.equal(out.length, 300); // 299 chars + ellipsis
  assert.ok(out.endsWith('…'));
  assert.equal(truncateExcerpt('short', 300), 'short');
  assert.equal(truncateExcerpt(null), null);
});

// ---------------------------------------------------------------------------
// Relative-date normalization (verified German formats + others)
// ---------------------------------------------------------------------------
test('normalizeVisibleDate parses verified German relative formats', () => {
  const now = new Date('2026-07-12T00:00:00Z');
  assert.equal(normalizeVisibleDate('3 Tage •', now).normalized, '2026-07-09');
  assert.equal(normalizeVisibleDate('1 Woche(n) •', now).normalized, '2026-07-05');
  assert.equal(normalizeVisibleDate('vor 2 Wochen', now).normalized, '2026-06-28');
  assert.equal(normalizeVisibleDate('5 Std.', now).unit, 'hour');
  assert.equal(normalizeVisibleDate('8 Monat(e) •', now).unit, 'month');
});

test('normalizeVisibleDate parses English/Spanish + returns unknown when unparseable', () => {
  const now = new Date('2026-07-12T00:00:00Z');
  assert.equal(normalizeVisibleDate('5h', now).unit, 'hour');
  assert.equal(normalizeVisibleDate('2w', now).unit, 'week');
  assert.equal(normalizeVisibleDate('hace 3 días', now).normalized, '2026-07-09');
  assert.equal(normalizeVisibleDate('Promoted', now).status, 'unknown');
  assert.equal(normalizeVisibleDate('', now).status, 'unknown');
});

test('classifyActivity determines active/inactive/unknown windows', () => {
  const now = new Date('2026-07-12T00:00:00Z');
  assert.equal(classifyActivity(['3 Tage', '2 Wochen'], { days: 30, now }).status, 'active_within_period');
  assert.equal(classifyActivity(['8 Monate'], { days: 30, now }).status, 'inactive_within_observed_period');
  assert.equal(classifyActivity(['Promoted'], { days: 30, now }).status, 'unknown');
  assert.equal(classifyActivity([], { days: 30, now }).items_observed, 0);
  assert.equal(classifyActivity(['3 Tage', 'x'], { days: 30, now }).items_observed, 2);
});

// ---------------------------------------------------------------------------
// Schema factories
// ---------------------------------------------------------------------------
test('makePerson produces the full schema with canonical URL and defaults', () => {
  const p = makePerson({
    name: 'Timo Fassnacht',
    profile_url: 'https://www.linkedin.com/in/timo-fassnacht-5648a3248/?trk=abc',
    headline: 'Technischer Vertrieb',
    source_query: 'Vertriebsleiter Verpackungsmaschinen',
  });
  assert.equal(p.entity_type, 'person');
  assert.equal(p.profile_url, 'https://www.linkedin.com/in/timo-fassnacht-5648a3248/');
  assert.equal(p.recent_activity.status, 'unknown');
  assert.ok(p.observed_at);
  assert.deepEqual(p.matched_role_keywords, []);
});

test('makeCompany caps description excerpt to 300 chars', () => {
  const c = makeCompany({
    name: 'Prewa',
    company_url: 'https://www.linkedin.com/company/prewa-verpackungsmaschinen-gmbh/',
    description_excerpt: 'y'.repeat(400),
    industry: 'Maschinenbau & Betriebstechnik',
  });
  assert.equal(c.description_excerpt.length, 300);
  assert.equal(c.company_url, 'https://www.linkedin.com/company/prewa-verpackungsmaschinen-gmbh/');
});

test('makePost + makeComment canonicalize and cap excerpts', () => {
  const post = makePost({
    post_url: 'https://www.linkedin.com/feed/update/urn:li:activity:7480901060509773826/',
    author_name: 'Prewa Verpackungsmaschinen GmbH',
    text_excerpt: 'z'.repeat(400),
    published_at_visible: '3 Tage',
  });
  assert.equal(post.entity_type, 'post');
  assert.equal(post.text_excerpt.length, 300);
  const comment = makeComment({
    post_url: 'https://www.linkedin.com/feed/update/urn:li:activity:7480901060509773826/',
    commenter_name: 'Paul Daanen',
    commenter_url: 'https://www.linkedin.com/in/paul-daanen-860b7946/?trk=1',
  });
  assert.equal(comment.commenter_url, 'https://www.linkedin.com/in/paul-daanen-860b7946/');
});

test('matchKeywords finds ICP role/industry keywords, diacritic-insensitive', () => {
  assert.deepEqual(matchKeywords('Leiter Technischer Vertrieb bei Prewa', ['Leiter Technischer Vertrieb', 'Inhaber']), ['Leiter Technischer Vertrieb']);
  assert.deepEqual(matchKeywords('Sekundarverpackung und Palettierung', ['Sekundärverpackung', 'Palettierung']), ['Sekundärverpackung', 'Palettierung']);
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
test('toJson wraps records with metadata', () => {
  const json = JSON.parse(toJson([makePerson({ name: 'A' })]));
  assert.equal(json.count, 1);
  assert.equal(json.records[0].name, 'A');
  assert.ok(json.exported_at);
});

test('toCsv flattens nested objects and escapes commas/quotes', () => {
  const csv = toCsv([
    makeCompany({ name: 'Prewa, GmbH', headquarters: 'Crailsheim, Baden-Württemberg' }),
  ]);
  const [header, row] = csv.split('\r\n');
  assert.ok(header.includes('recent_activity.status'));
  assert.ok(row.includes('"Prewa, GmbH"')); // comma -> quoted
});

test('exportResearch rejects unsupported formats', () => {
  assert.throws(() => exportResearch([], 'xml'));
  assert.equal(exportResearch([], 'json').format, 'json');
  assert.equal(exportResearch([], 'csv').format, 'csv');
});

// ---------------------------------------------------------------------------
// Write-function refusal contract
// ---------------------------------------------------------------------------
test('unsupported write response + function list are defined', () => {
  assert.match(UNSUPPORTED_WRITE_RESPONSE, /does not perform state-changing/);
  assert.ok(UNSUPPORTED_FUNCTIONS.includes('linkedin_connect'));
  assert.ok(UNSUPPORTED_FUNCTIONS.includes('linkedin_message'));
});

test('operational limits are conservative', () => {
  assert.equal(limits.max_results_per_search_default, 20);
  assert.equal(limits.max_results_per_run_absolute, 50);
  assert.equal(limits.infinite_scroll, false);
});
