# Final report — linkedin_research_readonly

Date: 2026-07-12 · Environment: VS Code integrated browser (Playwright a11y
snapshot) · Session: authenticated · Interface language: **German (de-DE)**.

## 1. Pages verified live (read-only)
| Page | Route used | Result |
| --- | --- | --- |
| Session/feed | `/feed/` | Authenticated; primary nav present. |
| Company search | `/search/results/companies/?keywords=Verpackungsmaschinen` | Real ICP companies returned (Gerhard Schubert, HDG, Prewa, Merz, Mohrbach…). |
| Company search (narrow) | `…?keywords=Verpackungsmaschinen Baden-Württemberg` | Empty state `Keine Ergebnisse gefunden`. |
| People search | `/search/results/people/?keywords=Vertriebsleiter Verpackungsmaschinen` | Real profiles + headlines returned. |
| Company page | `/company/{slug}/about/` | Overview `dt/dd` fields read. |
| Profile page | `/in/{slug}/` | Section anchors + fields read. |
| Post | `/feed/update/urn:li:activity:7480901060509773826/` | Author, date, counts, commenter read. |

## 2. Selectors that worked (status = `verified`, de-DE)
`session_authenticated_indicator`, `global_search_input` (textbox `Suche` in a
`search` landmark), `search_results_url_{people,companies,posts}`,
`people_result_card` (`role=listitem` + `/in/`), `company_result_card`
(`ul>li` + `/company/`), `search_no_results` (`Keine Ergebnisse gefunden`),
`results_next_page` (`Weiter`), `results_previous_page` (`Zurück`),
`company_tab_nav` (Start/Info/Beiträge/Personen/Einblicke), `company_overview_field`
(`dt/dd`: Branche/Größe/Hauptsitz/Website/Gegründet/Spezialgebiete),
`profile_name` (via `document.title`), `profile_section`
(Aktivitäten/Erfahrung/Ausbildung/Kenntnisse/Interessen), `post_container`
(`data-urn`), `post_relative_date`, `post_social_counts`, `post_commenter`.

## 3. Selectors NOT verified (status = `unverified`)
`all_filters_button`, `location_filter`, `current_company_filter`,
`industry_filter`, `events_tab`, `company_people_search`. The filter panel was not
opened; the skill prefers URL params (`geoUrn`, `currentCompany`) where possible.
`profile_contact_info` is intentionally `forbidden_never_use`.

## 4. Current interface language
German (`de-DE`) for accessible names, even though `document.documentElement.lang`
reported `en`. The i18n dictionary covers de/en/es and the code matches all three
plus language-independent href patterns.

## 5. Limitations observed
- LinkedIn ships **hashed CSS classes** and sometimes omits `role`/`aria-label`
  on the search input → CSS selectors are unreliable; the a11y tree + href
  patterns are the stable layer.
- Post **comments** use obfuscated containers and may require expanding the
  comment count; commenter extraction falls back to `/in/` links in the post detail.
- Exact-phrase queries can yield zero results — broaden and rely on filters.
- Page snapshots can be large (feeds embed video manifests); prefer targeted reads.
- The authenticated **session user must be filtered out** of commenter/collector
  results.

## 6. Tests performed
- **Automated smoke tests:** `node --test …/tests/linkedin-readonly-smoke.test.mjs`
  → **22 passed / 0 failed**. Includes the Test-7 safety matrix (every forbidden
  label in DE/EN/ES blocked), URL canonicalization, dedup, excerpt cap, relative
  date normalization, activity classification, schema factories, and JSON/CSV export.
- **Live acceptance (read-only):** session check, company search (≤5), people
  search (≤5), company page read, profile read, post read + commenter read — all
  via URL navigation and DOM reads only.

## 7. Proof that no write action was executed
- Every browser interaction was either `navigate_page` (URL) or a read-only DOM
  evaluation. **No** `click_element` / `type_in_page` was issued against any
  action control.
- The `safe_readonly_browser` gate (`assertNavigationAllowed`) blocks all
  forbidden labels; the test suite asserts this for
  Connect/Vernetzen/Conectar, Follow/Folgen/Seguir, Message/Nachricht/Mensaje,
  Like/Reagieren/„Gefällt mir", Comment/Kommentieren, Repost/Reposten/Teilen,
  Save/Speichern, Post/Beitrag erstellen, Send/Senden, Endorse/Bestätigen,
  Invite/Einladen, Subscribe/Abonnieren.
- No connect/follow/message/like/comment/repost/save/post/send occurred; forbidden
  buttons observed in the wild (`Folgen`, `Nachricht`, `Senden`, `Kommentieren`,
  `Reposten`) were only read, never clicked.

## 8. Maintenance recommendations
- Re-run `linkedin_selector_health_check()` periodically; refresh
  `verified_at`/`confidence` in the registry when LinkedIn changes.
- Verify the `unverified` filter selectors before relying on them; prefer URL params.
- Keep `linkedin-i18n.json` in sync if the account language changes (en/es).
- If comment extraction degrades, update `post_commenter` after inspecting a fresh
  post-detail DOM.
- Never commit diagnostic screenshots/DOM fragments containing personal data.
