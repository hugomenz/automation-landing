---
campaign_version: 1.1
strategy_frozen: true
frozen_at: 2026-07-12T21:22:05+02:00
audit_status: READY
---

# 04 — Profile & website funnel

**Verified:** 2026-07-12 (read-only) · **Campaign:** 2026-07-13 → 2026-07-26 · **Campaign tag:** `linkedin_14d_2026_07`

## Commercial funnel (what we measure)
`LinkedIn post/comment → Hugo profile visit → hugomenz.de visit → web action → qualified lead`
- **Qualified lead:** a person tied to a machine builder / automation integrator / configurable-equipment maker / technical sales / project engineering / offer preparation / industrial management **who takes a valuable web action** (opens a service page, starts/opens the contact form, sends an enquiry, asks for a conversation, shares an offer process, asks about workshop/diagnosis/pilot).
- **Likes/impressions = distribution signals, not leads.**

## Website status (verified live — NO `WEBSITE_GAP`)
| URL | Status | Content |
| --- | --- | --- |
| https://www.hugomenz.de/ | ✅ live | "Angebotsprozesse im Maschinenbau digitalisieren" — hub; shows the flow EINGANG→STRUKTURIEREN→PRÜFEN→BERECHNEN→FREIGEBEN; CTAs to workshop + copilot |
| https://www.hugomenz.de/leistungen/rfq-readiness-workshop/ | ✅ live | "Ist Ihr Angebotsprozess bereit für einen internen RFQ-Piloten?" paid, scoped workshop; Go/Go-with-conditions/No-Go; CTA → Kontakt |
| https://www.hugomenz.de/leistungen/interner-rfq-copilot/ | ✅ live | Internal RFQ copilot for one machine family; inputs/outputs/controls |
| https://www.hugomenz.de/kontakt/ | ✅ live | Working contact form (Name, e-mail, phone optional, machine family + process in message; **no file uploads**) |
| extra pages found | ✅ | /loesungen/technische-anfragequalifizierung/, /branchen/{end-of-line,verpackungsmaschinen,palettieranlagen}/, /standorte/stuttgart/, /ueber-hugo-menz/, /en/ |

The site's own message already matches the campaign ("not automatic quoting; a reviewable preparation with human approval; no invented prices"). Use its wording as the source of truth.

The three specialist pages for End-of-Line, packaging and palletising are **examples, not offer boundaries**. The commercial scope also includes assembly, handling, testing, conveyor technology, robotics and other configurable machinery with recurring RFQ logic.

## Selected campaign URLs
- **Primary (constant destination = profile Featured):** `https://www.hugomenz.de/` — best overview + hub.
- **Secondary (offer post):** `https://www.hugomenz.de/leistungen/rfq-readiness-workshop/`
- **Contact:** `https://www.hugomenz.de/kontakt/`

## The #1 blocker before distribution — profile ↔ website mismatch
Hugo's LinkedIn today sells the **wrong** thing for this campaign:
- **Headline (now):** "AI Automation Engineer | Prozessautomatisierung für KMU | Ich automatisiere Leads, CRM, E-Mail & interne Abläufe mit **n8n, Make**, APIs und KI".
- **Info (now):** generic automation with n8n/Make/Low-Code for "Unternehmen".
- **Featured (now):** certificates (Angular, n8n Quickstart, MCP, Generative AI) — **no website link**.
- **Website link:** a "Zur Website" button exists (target not exposed to read-only extraction — confirm it points to hugomenz.de).

This attracts exactly the wrong audience (generic automation / n8n / developers / consultants — see exclusions) and does **not** match the machinery/RFQ site. **Fix the profile first** (see [04-profile-changeset.md](04-profile-changeset.md)); otherwise every click lands on a contradictory story and the funnel leaks at the profile step.

## Funnel stages & metrics (see [03-metrics-dashboard.csv](03-metrics-dashboard.csv))
| Stage | Signal | Field |
| --- | --- | --- |
| Post/comment seen | impressions (distribution only) | comment_impressions |
| → profile visit | profile_views, followers_gained | profile_views |
| → website visit | UTM sessions | website_sessions_utm, landing_page |
| → web action | featured_link_clicks, cta_clicks, form_started | cta_clicks, form_started |
| → qualified lead | form_submitted, conversation, request | qualified_lead, lead_company, lead_role |

## Link discipline
- Only **2 of 7** posts carry a direct link (Post 4 → home, Post 6 → workshop).
- The other 5 posts drive to the **profile**; the **Featured link** is the constant destination.
- **Comments never contain commercial links.**
- All direct links carry UTM (see [04-campaign-links.csv](04-campaign-links.csv)).

## Analytics audit · 2026-07-12

`ANALYTICS_UNVERIFIED`. Both UTM destinations return `200`, preserve all four UTM parameters and do not redirect. No analytics vendor or event instrumentation is visible in the production HTML/JavaScript or the local landing code. The contact form posts `page_url` to a Make webhook, but storage and reporting of that field are not verified. See [../09-analytics-verification.md](../09-analytics-verification.md).
