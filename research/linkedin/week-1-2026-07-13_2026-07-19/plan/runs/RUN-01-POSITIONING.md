---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
run_id: RUN-01-POSITIONING
approved: false
status: PENDING
---

# RUN-01 — POSITIONING

**Window:** 2026-07-13 → 2026-07-14

**Commercial objective:** reposition Hugo around incomplete RFQs, shape the feed toward the right audience, publish the first problem post and place the first two aligned comments.

**Approval command:** `EJECUTA RUN-01-POSITIONING COMPLETO SIN CAMBIAR OBJETIVOS, URLs NI TEXTOS.`

## Execution contract

- The single approval command covers two internal phases; it is not two approvals.
- **PHASE A — SETUP:** `R01-00` through `R01-25V` verify the deployed site, session, profile, Featured link, initial follows and resulting state.
- **PHASE B — PUBLIC ACTIVITY:** `R01-26` through `R01-32` re-read both target posts, publish up to two comments, publish `POST-01` and record results.
- If any PHASE A task ends in `FAILED` or `STOP_RUN`, do not start PHASE B.
- Execute only tasks that remain `PENDING`.
- Any terminal status (`DONE`, `SKIPPED_ALREADY_DONE`, `SKIPPED_CONTEXT_CHANGED`, `SKIPPED_EXPIRED`, `FAILED`) is never executed again.
- Any row with a `text_ref` is authorized only when the text is copied verbatim from the referenced source file.
- Stop the whole RUN on login, CAPTCHA, checkpoint, warning, throttling or ambiguous selector.
- Record outcomes immediately in this RUN file, `plan/05-follow-list.csv`, `06-posts-revenue-campaign.md` and `07-sales-metrics.csv`.

## Tasks

| task_id | commercial objective | action | exact URL | person/company | text_ref | precondition | fallback | approved | status | expected result | update field |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R01-00 | verify the public offer before LinkedIn changes | verify_site_scope | https://www.hugomenz.de/ | hugomenz.de | n/a | home contains the broadened Maschinen- und Anlagenbau scope and presents palletizing only as an example | STOP_RUN | false | PENDING | deployed website matches the frozen positioning | this file |
| R01-01 | verify access | session_check | https://www.linkedin.com/feed/ | Hugo profile session | n/a | authenticated session | STOP_RUN | false | PENDING | session confirmed | this file |
| R01-02 | align profile to offer | update_own_profile | https://www.linkedin.com/in/hugomartin-menz/ | Hugo profile | PROFILE-FEATURE-01 | live field differs | SKIPPED_ALREADY_DONE | false | PENDING | homepage Featured link visible first | plan/04-profile-changeset.md |
| R01-03 | align profile to offer | update_own_profile | https://www.linkedin.com/in/hugomartin-menz/ | Hugo profile | PROFILE-HEADLINE-01 | R01-02 terminal | SKIPPED_ALREADY_DONE | false | PENDING | headline matches offer | plan/04-profile-changeset.md |
| R01-04 | align profile to offer | update_own_profile | https://www.linkedin.com/in/hugomartin-menz/ | Hugo profile | PROFILE-INFO-01 | R01-03 terminal | SKIPPED_ALREADY_DONE | false | PENDING | Info text matches offer | plan/04-profile-changeset.md |
| R01-05 | align profile to offer | update_own_profile | https://www.linkedin.com/in/hugomartin-menz/ | Hugo profile | PROFILE-WEBSITE-01 | live field differs | SKIPPED_ALREADY_DONE | false | PENDING | website button points to hugomenz.de | plan/04-profile-changeset.md |
| R01-06 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/erdinc-erboral-874354193/ | Erdinc Erboral | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | direct problem owner followed | plan/05-follow-list.csv |
| R01-07 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/viktor-schmidt-38565711b/ | Viktor Schmidt | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | economic buyer followed | plan/05-follow-list.csv |
| R01-08 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/lutz-demuss-80405922/ | Lutz Demuß | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | packaging buyer followed | plan/05-follow-list.csv |
| R01-09 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/stefan-benz-48618ab4/ | Stefan Benz | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | technical-sales lead followed | plan/05-follow-list.csv |
| R01-10 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/kevin-mitulla-b99a87214/ | Kevin Mitulla | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | technical-sales lead followed | plan/05-follow-list.csv |
| R01-11 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/daniel-range/ | Daniel Range | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | application-engineering lead followed | plan/05-follow-list.csv |
| R01-12 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/dr-ing-alexander-hobt-59aa8896/ | Alexander Hobt | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | Sonderbau sales lead followed | plan/05-follow-list.csv |
| R01-13 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/andreas-ritter-b2ab50161/ | Andreas Ritter | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | BW technical-sales target followed | plan/05-follow-list.csv |
| R01-14 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/matthias-habicht-0ba33882/ | Matthias Habicht | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | project-planning target followed | plan/05-follow-list.csv |
| R01-15 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/wolfgang-breu-61491722a/ | Wolfgang Breu | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | sales leader followed | plan/05-follow-list.csv |
| R01-16 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/laura-gildein-611b10105/ | Laura Gildein | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | packaging champion followed | plan/05-follow-list.csv |
| R01-17 | shape feed to target buyers | follow_person | https://www.linkedin.com/in/patrick-ruoff-ba2008136/ | Patrick Ruoff | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | sales-engineer champion followed | plan/05-follow-list.csv |
| R01-18 | shape feed to target companies | follow_company | https://www.linkedin.com/company/prewa-verpackungsmaschinen-gmbh/ | Prewa | n/a | page opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | primary-segment company followed | plan/05-follow-list.csv |
| R01-19 | shape feed to target companies | follow_company | https://www.linkedin.com/company/end-of-line-experts-gmbh/ | EOL Experts | n/a | page opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | end-of-line account followed | plan/05-follow-list.csv |
| R01-20 | shape feed to target companies | follow_company | https://www.linkedin.com/company/transnova-ruf/ | transnova-RUF | n/a | page opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | palletizing account followed | plan/05-follow-list.csv |
| R01-21 | shape feed to target companies | follow_company | https://www.linkedin.com/company/harro-h-fliger/ | Harro Höfliger | n/a | page opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | major packaging builder followed | plan/05-follow-list.csv |
| R01-22 | add industrial distribution | follow_company | https://www.linkedin.com/company/vdma/ | VDMA | n/a | page opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | association feed signal added | plan/05-follow-list.csv |
| R01-23 | add industrial distribution | follow_company | https://www.linkedin.com/company/packaging-valley-germany-e-v-/ | Packaging Valley Germany | n/a | page opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | packaging cluster signal added | plan/05-follow-list.csv |
| R01-24 | add industrial distribution | follow_company | https://www.linkedin.com/company/neue-verpackung/ | neue verpackung | n/a | page opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | packaging media signal added | plan/05-follow-list.csv |
| R01-25 | add industrial distribution | follow_person | https://www.linkedin.com/in/markus-westermeier/ | Markus Westermeier | n/a | profile opens; not already followed | SKIPPED_ALREADY_DONE | false | PENDING | Angebotsprozess voice followed | plan/05-follow-list.csv |
| R01-25V | verify setup before public activity | verify_setup_state | https://www.linkedin.com/in/hugomartin-menz/ | Hugo profile and follow ledger | n/a | R01-01 through R01-25 terminal without `FAILED` or `STOP_RUN` | STOP_RUN | false | PENDING | profile, Featured link, website button and follow outcomes verified | this file and plan/05-follow-list.csv |
| R01-26 | show offer understanding publicly | read_post | https://www.linkedin.com/feed/update/urn:li:activity:7481969460254429184/ | Dirk Mühlhauser | AC-01 | post still visible and context unchanged | SKIPPED_CONTEXT_CHANGED | false | PENDING | target post re-read | this file |
| R01-27 | show offer understanding publicly | comment_on_post | https://www.linkedin.com/feed/update/urn:li:activity:7481969460254429184/ | Dirk Mühlhauser | AC-01 | R01-26 confirmed | SKIPPED_CONTEXT_CHANGED | false | PENDING | first aligned comment visible | 04-aligned-comments.md |
| R01-28 | show offer understanding publicly | read_post | https://www.linkedin.com/feed/update/urn:li:activity:7481270897027399680/ | Stefan Daumoser | AC-02 | post still visible and context unchanged | SKIPPED_CONTEXT_CHANGED | false | PENDING | target post re-read | this file |
| R01-29 | show offer understanding publicly | comment_on_post | https://www.linkedin.com/feed/update/urn:li:activity:7481270897027399680/ | Stefan Daumoser | AC-02 | R01-28 confirmed; at least 20 minutes after prior comment | SKIPPED_CONTEXT_CHANGED | false | PENDING | second aligned comment visible | 04-aligned-comments.md |
| R01-30 | publish positioning message | create_post | https://www.linkedin.com/feed/ | Hugo profile | POST-01 | exact text not already published | STOP_TASK | false | PENDING | first revenue post visible | 06-posts-revenue-campaign.md |
| R01-31 | stage next outbound wave | review_message_pack | ../05-sales-messages.md | CR-01..CR-05 | CR-01..CR-05 | file exists and notes stay unchanged | STOP_TASK | false | PENDING | first five connection requests frozen for RUN-02 | 05-sales-messages.md |
| R01-32 | keep ledger usable | verify_and_log | ../07-sales-metrics.csv | RUN-01 metrics | n/a | all prior tasks terminal or explicitly skipped | STOP_TASK | false | PENDING | metrics, follow states and post/comment results logged | 07-sales-metrics.csv |

## Text sources

- `PROFILE-FEATURE-01`, `PROFILE-HEADLINE-01`, `PROFILE-INFO-01`, `PROFILE-WEBSITE-01`: `plan/04-profile-changeset.md`
- `AC-01`, `AC-02`: `04-aligned-comments.md`
- `POST-01`: `06-posts-revenue-campaign.md`
- `CR-01..CR-05`: `05-sales-messages.md`
