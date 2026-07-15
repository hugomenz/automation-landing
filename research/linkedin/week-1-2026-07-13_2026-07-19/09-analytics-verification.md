---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
analytics_status: ANALYTICS_UNVERIFIED
---

# 09 — Analytics verification

## Result

`ANALYTICS_UNVERIFIED`

This does not block campaign execution. It does mean that campaign sessions and conversions **cannot currently be claimed as attributable with certainty**.

## URL audit · 2026-07-12

| content | exact URL tested in isolated headless Chrome | browser result | redirects | query retained |
| --- | --- | --- | --- | --- |
| post_04 | `https://www.hugomenz.de/?utm_source=linkedin&utm_medium=organic&utm_campaign=linkedin_14d_2026_07&utm_content=post_04` | `200`; title `Angebotsprozesse im Maschinenbau digitalisieren | Hugo Menz`; expected home H1 | 0 | yes, all four UTM values |
| post_06 | `https://www.hugomenz.de/leistungen/rfq-readiness-workshop/?utm_source=linkedin&utm_medium=organic&utm_campaign=linkedin_14d_2026_07&utm_content=post_06` | `200`; title `RFQ Readiness Workshop für Maschinenbauer | Hugo Menz`; expected workshop H1 | 0 | yes, all four UTM values |
| revenue POST-04 | `https://www.hugomenz.de/leistungen/rfq-readiness-workshop/?utm_source=linkedin&utm_medium=organic&utm_campaign=revenue_14d_2026_07&utm_content=post_04` | `200`; workshop route loads | 0 | yes, all four UTM values |

The UTM parameters cause no incorrect redirect.

The broadened German copy is validated in the local build but is not yet deployed. Production still exposes the previous wording; deployment is a precondition in `RUN-01` and was intentionally not performed during this no-public-action audit.

## Observable instrumentation

- Production HTML and `main-XEWF2AIK.js` show no identifiable Google Analytics/Tag Manager, Matomo, Plausible, Umami, Microsoft Clarity, Hotjar, Fathom, PostHog, Mixpanel or Segment loader/API.
- The local Angular application contains `data-cta` labels, but no click-event analytics client.
- Opening the contact dialog has no analytics event.
- Starting to type in the form has no analytics event.
- Successful submit posts to a Make webhook. The payload includes `page_url: window.location.href` and `source: website_contact_form`.
- The presence of `page_url` means the webhook can receive UTM values **only when they remain in the current URL**, but the audit cannot confirm that Make stores them, parses them or exposes reports.

## What can be claimed now

| measurement | status | reason |
| --- | --- | --- |
| `utm_source` | UNVERIFIED | URL retains it; no verified analytics ingestion/report |
| `utm_medium` | UNVERIFIED | same |
| `utm_campaign` | UNVERIFIED | same |
| `utm_content` | UNVERIFIED | same; no verified custom dimension/report |
| landing visits | UNVERIFIED | no observable page-view analytics |
| CTA click | NOT INSTRUMENTED / UNVERIFIED | `data-cta` exists without an event collector |
| form started | NOT INSTRUMENTED / UNVERIFIED | no start/change event collector |
| form submitted | WEBHOOK EXISTS / UNVERIFIED | submit is operationally posted, but measurement/storage/reporting is not verified |

## Hugo's exact verification checklist

1. Identify the intended analytics property/tool and confirm who owns admin access. If none exists, record that explicitly; do not infer analytics from `data-cta` attributes.
2. In browser DevTools → Network, enable Preserve log, load each exact UTM URL and look for the vendor's page-view/collect request. Confirm its request payload contains the full `page_location` and the four UTM values.
3. In the analytics real-time/debug view, match that test visit and verify source=`linkedin`, medium=`organic`, campaign=`linkedin_14d_2026_07`, and content=`post_04`/`post_06`. Confirm `utm_content` is queryable in the intended report or custom dimension.
4. Click one CTA marked `data-cta`; verify one named event, its CTA identifier and the landing/campaign context. Ensure one click produces one event.
5. Open the contact form and enter the first field; verify distinct `form_open` and `form_start` events if those metrics are required. They do not exist in the audited code today.
6. Submit one clearly labelled internal test enquiry. In Make, verify the run receives `page_url` with the four UTMs, then confirm the values are persisted to the final lead store and can be reported. Delete or mark the test record afterward.
7. Confirm consent/cookie behavior for the chosen analytics system and test both consent states where applicable.
8. Only after steps 2–6 pass, change this file to `analytics_status: VERIFIED`, record property/tool, event names, report locations and verification timestamp.
