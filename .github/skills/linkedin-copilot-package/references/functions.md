# Read-only functions — I/O contracts

All functions are **read-only**. They navigate and read; they never change state.
Each returns records that include `source_url` and `observed_at`. URLs are
canonicalized and excerpts capped at 300 chars by [../lib/schemas.mjs](../lib/schemas.mjs).

Before any click, the agent calls `assertNavigationAllowed(element)` from
[../lib/readonly-policy.mjs](../lib/readonly-policy.mjs). If it does not return
`allow`, the element is not clicked.

---

## 1. `linkedin_check_session()`
Navigate to `https://www.linkedin.com/feed/` (or read the current tab) and inspect
the accessibility tree.
```json
{ "authenticated": true, "challenge_detected": false, "current_url": "…", "safe_to_continue": true }
```
- `authenticated`: `true|false|"unknown"` — presence of the primary nav ("Sie"/"Me").
- `challenge_detected`: `true` if URL/text matches a `stop_condition` (login, checkpoint, captcha…).
- `safe_to_continue`: `false` whenever a challenge is detected → **stop**.

## 2. `linkedin_search_people(query, filters, max_results)`
Filters: `{ location:[], current_company:[], title_keywords:[], industry:[], max_results:20 }`.
Navigate to `/search/results/people/?keywords={query}` (add URL params when known).
Read cards (`role=listitem`, `a[href*="/in/"]`), build `person` records, tag
`matched_role_keywords`/`matched_industry_keywords`, dedupe by canonical URL.
Cap at `max_results` (≤20 default, ≤50 absolute), ≤3 pages.

## 3. `linkedin_search_companies(query, filters, max_results)`
Navigate to `/search/results/companies/?keywords={query}`. Read cards
(`ul>li`, `a[href*="/company/"]`), build `company` records, tag `matched_keywords`.

## 4. `linkedin_search_posts(query, filters, max_results)`
Navigate to `/search/results/content/?keywords={query}`. Build `post` records from
visible cards: author, canonical post URL, relative date (normalized), excerpt,
visible counts, `matched_topics`.

## 5. `linkedin_read_profile(profile_url)`
Open the canonical `/in/{slug}/`. Read name (via `document.title` fallback),
headline, location, current title/company (first Experience entry), About excerpt.
**Never** open "Contact info"; never collect email/phone/photo. Returns one
`person` record.

## 6. `linkedin_read_profile_activity(profile_url, days, max_items)`
Open `/in/{slug}/recent-activity/all/` (or the Activity section). Read up to
`max_items` visible items with their relative dates. Return
`recent_activity = classifyActivity(items, { days })`:
```json
{ "status": "active_within_period|inactive_within_observed_period|unknown",
  "latest_visible_date": "YYYY-MM-DD|null", "items_observed": 0 }
```
If a date can't be determined → `"unknown"` (never invent).

## 7. `linkedin_read_company(company_url)`
Open `/company/{slug}/about/`. Read the `dt/dd` overview: `Branche` (industry),
`Größe` (employee range), `Hauptsitz` (HQ), `Website`, `Gegründet`, `Spezialgebiete`,
tagline, visible follower count (context only). Return one `company` record.

## 8. `linkedin_read_company_activity(company_url, days, max_items)`
Open `/company/{slug}/posts/`. Read up to `max_items` posts with visible dates;
return `recent_activity` like function 6.

## 9. `linkedin_read_post(post_url, max_visible_comments)`
Open canonical `/feed/update/urn:li:activity:{id}/`. Read author, author URL,
relative date (normalized), text excerpt, and visible reaction/comment/repost
counts. Read up to `max_visible_comments` (≤20) visible comments. **Never** click
any reaction/comment/repost/send control.

## 10. `linkedin_collect_commenters(post_url, max_results)`
From the post detail, collect visible commenters' `name` + canonical `/in/` URL
(and visible headline when present). Exclude the post author and the authenticated
session user. Return `comment`/`person` records, deduped.

## 11. `linkedin_export_research(records, format)`
`format`: `"json"` (default) or `"csv"`. Delegates to
[../lib/export.mjs](../lib/export.mjs). JSON is a metadata envelope; CSV flattens
nested fields and joins arrays with `; `.

## 12. `linkedin_selector_health_check()`
For each `verified` entry in
[../selectors/linkedin-selector-registry.json](../selectors/linkedin-selector-registry.json),
attempt to resolve it on an appropriate page via the accessibility tree and report
`{ id, resolved: true|false, locale }`. Never clicks; only locates.

## 13. `linkedin_discover_selectors(page_type)`
Diagnostic. On the current page, dump role + accessible name for candidate elements
of `page_type` (`global|search|people_results|company_results|post_results|profile|company|post`)
so selectors can be (re)verified. Redact personal data from any saved output.

---

## Refusal contract (write functions)
Any of `linkedin_post|connect|follow|react|like|comment|reply|repost|share|message|send|save|invite|endorse|subscribe|edit`
returns exactly:
`Unsupported: linkedin_research_readonly does not perform state-changing LinkedIn actions.`
