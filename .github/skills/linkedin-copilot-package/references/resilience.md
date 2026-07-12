# Resilience — page objects, operation flow, diagnostics

The skill is agent-driven over the VS Code integrated browser. "Page objects" are
adapters: each knows its URL/page-type signature, a semantic anchor to wait for,
and the read-only extractions it supports. All selectors come from
[../selectors/linkedin-selector-registry.json](../selectors/linkedin-selector-registry.json).

## Page objects
| Adapter | Page signature | Semantic anchor | Reads |
| --- | --- | --- | --- |
| `LinkedInHomePage` | `/feed/` | banner nav ("Sie"/"Me") | session state |
| `LinkedInSearchPage` | `/search/results/…` | `search` landmark / results region | tab switching |
| `LinkedInPeopleResultsPage` | `/search/results/people/` | `role=list` of `role=listitem` | person cards |
| `LinkedInCompanyResultsPage` | `/search/results/companies/` | `ul>li` cards | company cards |
| `LinkedInPostResultsPage` | `/search/results/content/` | post cards | post cards |
| `LinkedInProfilePage` | `/in/{slug}/` | heading sections (Erfahrung/Aktivitäten) | profile fields, activity |
| `LinkedInCompanyPage` | `/company/{slug}/` | tabs (Info/Beiträge/Personen) | overview, posts |
| `LinkedInPostPage` | `/feed/update/urn:li:activity:{id}/` | `data-urn` container | post + comments |

## Per-operation flow (every read)
1. **Verify** the URL / page-type matches the expected adapter.
2. **Wait** for a semantic page element (landmark, heading, or `data-urn`).
3. **Locate** with the registry primary strategy (role + accessible name).
4. **Try fallbacks** (label → placeholder → stable text → semantic attr → verified
   href → structural anchor). CSS classes are last resort (LinkedIn hashes them).
5. **Validate the postcondition** for the selector.
6. **Record which selector worked** (for `linkedin_selector_health_check`).
7. **Fail safe** if none resolve: stop, emit diagnostics, do not continue silently.

Before any click, run `assertNavigationAllowed(element)`; skip non-`allow` elements.

## Language resilience
Accessible names were observed in **German** even though `document.documentElement.lang`
reported `en`. Never rely on one language: match every accessible-name against all
locale variants in [../selectors/linkedin-i18n.json](../selectors/linkedin-i18n.json)
(de/en/es), plus href patterns which are language-independent.

## Diagnostic mode (`linkedin_discover_selectors`)
When a selector fails, capture only what is needed to repair it:
- current URL and page title,
- the list of relevant roles + accessible names,
- the selector `id` that failed,
- optionally a temporary screenshot and a small structural DOM fragment.

**Privacy:** screenshots and DOM fragments may contain personal data. Do **not**
commit them. Redact or delete them after diagnosis. Never store emails, phones,
photos, or private messages.

## Failure signals that must halt the run
throttling, warnings, repeated errors, challenge/CAPTCHA, expired session,
unexpected UI change, or an ambiguous selector → stop and produce a diagnosis
(see the policy `stop_conditions`).
