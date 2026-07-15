# Phase 1 — Company universe summary

**Research date:** 2026-07-12 · **Execution week:** 2026-07-13 → 2026-07-19 · **Skill:** linkedin-copilot · **UI:** de-DE · **Mode:** strictly read-only.

## Scale note (read first)
The brief asked for 250–350 organizations. The skill you told me to use (`linkedin-copilot`) and its [critical-assessment](../../../.github/skills/linkedin-copilot-package/docs/critical-assessment.md) explicitly reject that: *"30 relevant companies and 20 active people are more useful than 500 unqualified records."* Reaching 300 honestly is impossible in one conservative read-only session without either **inventing data** (you forbade it) or **bulk scraping** (you forbade it: no infinite scroll, conservative pace). So this universe is a **curated ~42 real organizations** actually observed on LinkedIn today, with `unknown` wherever a field was not verified. It exceeds the skill's 30-company target and is the honest, usable basis for Week 1. The searches are documented so the list can grow during the week.

## Organizations by classification
| Classification | Count |
| --- | --- |
| PROSPECT | ~32 |
| DISTRIBUTION | ~6 (Konradin, Bosch Rexroth, GEBHARDT, camos, Perspectix, dima; several dual-tagged) |
| ECOSYSTEM | ~6 (camos, Perspectix, Spanflug, dima, ZeMA, Automation Region) |

## Organizations by region (verified where visible)
| Region | Notes |
| --- | --- |
| Baden-Württemberg | Gerhard Schubert (Crailsheim), Schnaithmann (Korb), ASYS (Ulm), VS Sondermaschinenbau (Tuttlingen), FORM+TEST (Riedlingen), Schmid (Stuttgart), RHV (Waiblingen), GEBHARDT (Sinsheim), Adiro (Esslingen), STOPA (Achern), Hohner (Tuttlingen), camos (Stuttgart), Konradin (Leinfelden) |
| Bayern | ASS (Cham), Spanflug (München), Bosch Rexroth (Lohr) |
| Hessen | Hastamat (Lahnau), Noll (Frankenberg) |
| Niedersachsen | Nerak, REKERS, VIETZ |
| AT / CH | HAGE (Steiermark, AT), Perspectix (Zürich, CH) |
| unknown | ~16 (region not opened) |

Most companies' city/region were **not opened** (read-only budget) and are `unknown`; those confirmed are BW-heavy, matching the geographic priority.

## Organizations by segment
- **Secondary packaging / packaging machinery:** Schubert, Prewa, IWK, LoeschPack, PCA, Hastamat, HDG, Merz, Mohrbach, Kremers.
- **End-of-Line / strapping:** EOL Experts, Titan Umreifungstechnik.
- **Sondermaschinenbau:** Noll, KURTH+HEUSER, WESOBA, HAGE, VS, ASS, Hohner, Kurt Breuning IRCO, VIETZ.
- **Conveyor / intralogistics:** GEBHARDT, Nerak.
- **Handling:** GRIP, STRÖDTER.
- **Automation / assembly:** Schnaithmann, ASYS, Adiro, Woerner, HuW.
- **Plant / storage:** REKERS, STOPA.
- **CPQ / quoting software (ecosystem):** camos, Perspectix, Spanflug, dima.
- **Media / cluster / research:** Konradin, Automation Region, ZeMA, Bosch Rexroth (audience).

## Activity within 30 / 60 / 90 days
Company-level activity was verified only where a recent post surfaced in search:
- **Active ≤30d (verified):** Prewa (3 days), Perspectix (~2 weeks), dima (~3 weeks).
- **Active ≤60–90d (verified):** EOL Experts (~1 month), camos (~recent).
- **Inactive in 90d (verified):** VIETZ (~7 months), HuW (~5 months).
- **unknown:** all others (company posts pages not opened, to respect conservative pace).

## Top priority organizations (Week-1 focus)
The brief asked for a top-100. With ~42 real orgs, the honest **top ~12** by `week_1_priority` are:
1. **EOL - End of Line Packaging Experts** (5) — pure primary segment.
2. **Prewa Verpackungsmaschinen** (4) — active, SME, reachable.
3. **dima** (4) — on-topic Angebotsprozess content (comment target).
4. **PCA Roboter- und Verpackungstechnik** (4) — robotics+packaging.
5. **IWK Verpackungstechnik** (4) — configurable cartoning.
6. **Schnaithmann Maschinenbau** (4) — BW automation/handling, person in tech sales.
7. **VS Sondermaschinenbau** (4) — BW SME, GF reachable.
8. **Gerhard Schubert** (3) — reference/audience.
9. **camos / Perspectix** (3) — CPQ distribution (audience, watch skew).
10. **ASYS Group** (3) — BW automation.
11. **Adiro / Schmid / ASS / FORM+TEST** (3) — BW/Bayern builders with named contacts.
12. **GEBHARDT Fördertechnik** (3) — conveyor feeding EOL.

## Sectors: good fit but low visible activity
Sondermaschinenbau SMEs (Noll, KURTH+HEUSER, WESOBA, VS, ASS) and testing/handling builders (FORM+TEST, GRIP, STRÖDTER): **high commercial fit, near-zero LinkedIn activity**. These are cold-outreach targets, not comment targets.

## Sectors: high activity but low commercial fit
CPQ software vendors (camos, Perspectix, dima, Spanflug) and large refs (Bosch Rexroth): **high posting activity and audience value, but low direct commercial fit** (they are adjacent/competitor-context, not buyers). Use for distribution only, and watch the audience-skew risk.

## Searches that worked
`Verpackungsmaschinen`, `Verpackungstechnik`, `Sondermaschinenbau`, `Fördertechnik`, `Handhabungstechnik`, `Automatisierungstechnik`, `Prüftechnik`, `Anlagenbau` (single tokens common in company names).

## Searches that did NOT work
`Palettieranlagen`, `Palettierung`, `Montageanlagen`, `Endverpackung`, `Verpackungsmaschinen Baden-Württemberg` → **zero company results**. Company search matches names, not activities/multiword phrases. Reach palletizing/EOL via packaging builders' products and via posts instead.

## Weakened hypotheses
- *"Palletizing has its own dense company layer on LinkedIn."* → Weak: almost no companies carry palletizing terms in their name; it lives inside packaging/robotics builders.
- *"Baden-Württemberg can be filtered by keyword+region in one query."* → Weak: multiword company search fails; needs single token + a location filter (unverified) or manual regional read.
- *"The machine-builder SMEs are active on LinkedIn."* → Weak so far: the most on-topic posters are CPQ software vendors and consultants, not the machine builders themselves.

## Data limitations
- Employee size, HQ city, website, and 30/60/90 activity are `unknown` for most companies (company pages not individually opened — conservative read-only budget).
- Company name text from search cards was de-duplicated/cleaned; a few canonical slugs (e.g., Schnaithmann, ASYS, VS, Schmid, RHV, Titan) are inferred from people headlines and should be confirmed by opening the page before any outreach.
- Scores are analyst prioritization estimates (0–5), not LinkedIn-reported facts.
