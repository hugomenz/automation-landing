---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
run_id: RUN-03-CONVERSATION
approved: false
status: PENDING
---

# RUN-03 — CONVERSATION

**Window:** 2026-07-18 → 2026-07-20

**Commercial objective:** convert public interest and accepted connections into real conversations while sending the second wave of five requests.

**Approval command:** `EJECUTA RUN-03-CONVERSATION COMPLETO SIN CAMBIAR OBJETIVOS, URLs NI TEXTOS.`

## Execution contract

- Execute only `PENDING` tasks.
- Any row with a `text_ref` uses the exact payload from the referenced source file.
- If a contact describes a real problem, prepare `CI-01` exactly and pause for separate approval.
- If no one has accepted or replied yet, mark the dynamic conversation step `SKIPPED_NO_QUALIFIED_SIGNAL` and continue.
- Stop on login, CAPTCHA, checkpoint, warning, throttling or ambiguous selector.

## Tasks

| task_id | commercial objective | action | exact URL | person/company | text_ref | precondition | fallback | approved | status | expected result | update field |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R03-01 | verify access | session_check | https://www.linkedin.com/feed/ | Hugo profile session | n/a | authenticated session | STOP_RUN | false | PENDING | session confirmed | this file |
| R03-02 | capture incoming signals | review_interactions | https://www.linkedin.com/notifications/ | notifications | n/a | authenticated session | SKIPPED_NO_INTERACTIONS | false | PENDING | responses reviewed | this file |
| R03-03 | capture incoming signals | review_own_activity | https://www.linkedin.com/in/hugomartin-menz/recent-activity/all/ | Hugo activity | n/a | authenticated session | SKIPPED_NO_ACTIVITY_DELTA | false | PENDING | own activity reviewed | this file |
| R03-04 | invite qualified conversations | create_post | https://www.linkedin.com/feed/ | Hugo profile | POST-03 | exact text not already published | STOP_TASK | false | PENDING | invitation post visible | 06-posts-revenue-campaign.md |
| R03-05 | reinforce offer in the feed | read_post | https://www.linkedin.com/feed/update/urn:li:activity:7480983624826249216/ | Fabio Trapani | AC-05 | post still visible and context unchanged | SKIPPED_CONTEXT_CHANGED | false | PENDING | target post re-read | this file |
| R03-06 | reinforce offer in the feed | comment_on_post | https://www.linkedin.com/feed/update/urn:li:activity:7480983624826249216/ | Fabio Trapani | AC-05 | R03-05 confirmed | SKIPPED_CONTEXT_CHANGED | false | PENDING | aligned comment visible | 04-aligned-comments.md |
| R03-07 | reinforce offer in the feed | read_post | https://www.linkedin.com/feed/update/urn:li:activity:7480001658064801792/ | Dietmar Ungar | AC-06 | post still visible and context unchanged | SKIPPED_CONTEXT_CHANGED | false | PENDING | target post re-read | this file |
| R03-08 | reinforce offer in the feed | comment_on_post | https://www.linkedin.com/feed/update/urn:li:activity:7480001658064801792/ | Dietmar Ungar | AC-06 | R03-07 confirmed; at least 20 minutes after prior comment | SKIPPED_CONTEXT_CHANGED | false | PENDING | aligned comment visible | 04-aligned-comments.md |
| R03-09 | expand direct outreach | connect | https://www.linkedin.com/in/andreas-ritter-b2ab50161/ | Andreas Ritter | CR-06 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R03-10 | expand direct outreach | connect | https://www.linkedin.com/in/matthias-habicht-0ba33882/ | Matthias Habicht | CR-07 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R03-11 | expand direct outreach | connect | https://www.linkedin.com/in/dr-ing-alexander-hobt-59aa8896/ | Alexander Hobt | CR-08 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R03-12 | expand direct outreach | connect | https://www.linkedin.com/in/kevin-mitulla-b99a87214/ | Kevin Mitulla | CR-09 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R03-13 | expand direct outreach | connect | https://www.linkedin.com/in/wolfgang-breu-61491722a/ | Wolfgang Breu | CR-10 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R03-14 | move real pain into a call | prepare_call_invites | ../05-sales-messages.md | qualified responders | CI-01 | R03-02 and R03-03 complete and at least one real problem described | SKIPPED_NO_QUALIFIED_SIGNAL | false | PENDING | exact call-invite candidate prepared and paused for approval | 05-sales-messages.md |
| R03-15 | preserve content learning without publishing | capture_content_insights | ../09-content-backlog.md | conversations since RUN-02 | n/a | R03-02 and R03-03 terminal | SKIPPED_NO_NEW_INSIGHT | false | PENDING | zero to three concrete ideas and their exact source conversations recorded; nothing published | 09-content-backlog.md |
| R03-16 | preserve commercial intelligence | log_machine_type_and_process | ../07-sales-metrics.csv | RUN-03 metrics | n/a | prior tasks terminal or skipped, including R03-15 | STOP_TASK | false | PENDING | machine type or application context, process pain and conversation status recorded | 07-sales-metrics.csv |

## Text sources

- `POST-03`: `06-posts-revenue-campaign.md`
- `AC-05`, `AC-06`: `04-aligned-comments.md`
- `CR-06..CR-10`, `CI-01`: `05-sales-messages.md`
