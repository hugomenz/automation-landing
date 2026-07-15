---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
run_id: RUN-02-PROBLEM-DISCOVERY
approved: false
status: PENDING
---

# RUN-02 — PROBLEM-DISCOVERY

**Window:** 2026-07-15 → 2026-07-17

**Commercial objective:** publish the method post, place two aligned comments and send the first five directed connection requests.

**Approval command:** `EJECUTA RUN-02-PROBLEM-DISCOVERY COMPLETO SIN CAMBIAR OBJETIVOS, URLs NI TEXTOS.`

## Execution contract

- Execute only `PENDING` tasks.
- Any task with a `text_ref` must use the exact payload from its source file.
- Review interactions before sending connection requests so the outbound wave reflects the current response surface.
- If there are accepted connections or replies, prepare the exact first response and pause for separate approval instead of improvising.
- Stop on login, CAPTCHA, checkpoint, warning, throttling or ambiguous selector.

## Tasks

| task_id | commercial objective | action | exact URL | person/company | text_ref | precondition | fallback | approved | status | expected result | update field |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R02-01 | verify access | session_check | https://www.linkedin.com/feed/ | Hugo profile session | n/a | authenticated session | STOP_RUN | false | PENDING | session confirmed | this file |
| R02-02 | capture incoming signals | review_interactions | https://www.linkedin.com/notifications/ | notifications | n/a | authenticated session | SKIPPED_NO_INTERACTIONS | false | PENDING | replies and reactions reviewed | this file |
| R02-03 | capture incoming signals | review_own_activity | https://www.linkedin.com/in/hugomartin-menz/recent-activity/all/ | Hugo activity | n/a | authenticated session | SKIPPED_NO_ACTIVITY_DELTA | false | PENDING | own threads reviewed | this file |
| R02-04 | show working method | create_post | https://www.linkedin.com/feed/ | Hugo profile | POST-02 | exact text not already published | STOP_TASK | false | PENDING | method post visible | 06-posts-revenue-campaign.md |
| R02-05 | reinforce offer in the feed | read_post | https://www.linkedin.com/feed/update/urn:li:activity:7481286173911392256/ | LMD GmbH | AC-03 | post still visible and context unchanged | SKIPPED_CONTEXT_CHANGED | false | PENDING | target post re-read | this file |
| R02-06 | reinforce offer in the feed | comment_on_post | https://www.linkedin.com/feed/update/urn:li:activity:7481286173911392256/ | LMD GmbH | AC-03 | R02-05 confirmed | SKIPPED_CONTEXT_CHANGED | false | PENDING | aligned comment visible | 04-aligned-comments.md |
| R02-07 | reinforce offer in the feed | read_post | https://www.linkedin.com/feed/update/urn:li:activity:7478749474245410816/ | Sebastian Tobias Leicht | AC-04 | post still visible and context unchanged | SKIPPED_CONTEXT_CHANGED | false | PENDING | target post re-read | this file |
| R02-08 | reinforce offer in the feed | comment_on_post | https://www.linkedin.com/feed/update/urn:li:activity:7478749474245410816/ | Sebastian Tobias Leicht | AC-04 | R02-07 confirmed; at least 20 minutes after prior comment | SKIPPED_CONTEXT_CHANGED | false | PENDING | aligned comment visible | 04-aligned-comments.md |
| R02-09 | start direct commercial outreach | connect | https://www.linkedin.com/in/erdinc-erboral-874354193/ | Erdinc Erboral | CR-01 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R02-10 | start direct commercial outreach | connect | https://www.linkedin.com/in/viktor-schmidt-38565711b/ | Viktor Schmidt | CR-02 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R02-11 | start direct commercial outreach | connect | https://www.linkedin.com/in/lutz-demuss-80405922/ | Lutz Demuß | CR-03 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R02-12 | start direct commercial outreach | connect | https://www.linkedin.com/in/stefan-benz-48618ab4/ | Stefan Benz | CR-04 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R02-13 | start direct commercial outreach | connect | https://www.linkedin.com/in/daniel-range/ | Daniel Range | CR-05 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R02-14 | turn accepts into discovery | inspect_acceptances_and_prepare_first_messages | ../05-sales-messages.md | accepted connections | FM-01..FM-03 | R02-02 and R02-03 complete | SKIPPED_NO_ACCEPTED_CONNECTION | false | PENDING | exact first-message candidate drafted and paused for approval | 05-sales-messages.md |
| R02-15 | preserve content learning without publishing | capture_content_insights | ../09-content-backlog.md | conversations since RUN-01 | n/a | R02-02 and R02-03 terminal | SKIPPED_NO_NEW_INSIGHT | false | PENDING | zero to three concrete ideas and their exact source conversations recorded; nothing published | 09-content-backlog.md |
| R02-16 | keep commercial learning visible | log_real_problems | ../07-sales-metrics.csv | RUN-02 metrics | n/a | prior tasks terminal or skipped, including R02-15 | STOP_TASK | false | PENDING | any described problem recorded | 07-sales-metrics.csv |

## Text sources

- `POST-02`: `06-posts-revenue-campaign.md`
- `AC-03`, `AC-04`: `04-aligned-comments.md`
- `CR-01..CR-05`, `FM-01..FM-03`: `05-sales-messages.md`
