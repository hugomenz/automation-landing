---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
run_id: RUN-05-CLOSE-AND-DECIDE
approved: false
status: PENDING
---

# RUN-05 — CLOSE-AND-DECIDE

**Window:** 2026-07-24 → 2026-07-26

**Commercial objective:** close the 14-day campaign with the final opinion post, one last aligned comment, follow-up on active opportunities and a hard channel decision.

**Approval command:** `EJECUTA RUN-05-CLOSE-AND-DECIDE COMPLETO SIN CAMBIAR OBJETIVOS, URLs NI TEXTOS.`

## Execution contract

- Execute only `PENDING` tasks.
- Any row with a `text_ref` uses the exact payload from the referenced source file.
- No new connection requests are sent in this RUN.
- If there are no qualified conversations or proposals in flight, mark the follow-up tasks with the matching `SKIPPED_*` status and still complete the channel decision.
- Stop on login, CAPTCHA, checkpoint, warning, throttling or ambiguous selector.

## Tasks

| task_id | commercial objective | action | exact URL | person/company | text_ref | precondition | fallback | approved | status | expected result | update field |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R05-01 | verify access | session_check | https://www.linkedin.com/feed/ | Hugo profile session | n/a | authenticated session | STOP_RUN | false | PENDING | session confirmed | this file |
| R05-02 | capture end-stage signals | review_interactions | https://www.linkedin.com/notifications/ | notifications | n/a | authenticated session | SKIPPED_NO_INTERACTIONS | false | PENDING | open responses reviewed | this file |
| R05-03 | capture end-stage signals | review_own_activity | https://www.linkedin.com/in/hugomartin-menz/recent-activity/all/ | Hugo activity | n/a | authenticated session | SKIPPED_NO_ACTIVITY_DELTA | false | PENDING | own threads reviewed | this file |
| R05-04 | close public positioning arc | create_post | https://www.linkedin.com/feed/ | Hugo profile | POST-05 | exact text not already published | STOP_TASK | false | PENDING | final opinion post visible | 06-posts-revenue-campaign.md |
| R05-05 | reinforce offer in the feed | read_post | https://www.linkedin.com/feed/update/urn:li:activity:7478380519525810176/ | VisuPal | AC-09 | post still visible and context unchanged | SKIPPED_CONTEXT_CHANGED | false | PENDING | target post re-read | this file |
| R05-06 | reinforce offer in the feed | comment_on_post | https://www.linkedin.com/feed/update/urn:li:activity:7478380519525810176/ | VisuPal | AC-09 | R05-05 confirmed | SKIPPED_CONTEXT_CHANGED | false | PENDING | aligned comment visible | 04-aligned-comments.md |
| R05-07 | move open threads to an answer | follow_up_open_conversations | ../05-sales-messages.md | accepted connections or active leads | FM-01..FM-03 / CI-01 / WO-01 | R05-02 and R05-03 complete and there is an open thread | SKIPPED_NO_OPEN_THREAD | false | PENDING | exact follow-up draft prepared and paused for approval | 05-sales-messages.md |
| R05-08 | ask for a next step | request_decision_or_next_step | ../05-sales-messages.md | qualified leads only | FD-01 | at least one qualified conversation or workshop discussion exists | SKIPPED_NO_QUALIFIED_LEAD | false | PENDING | exact next-step draft prepared and paused for approval | 05-sales-messages.md |
| R05-09 | preserve content learning without publishing | capture_content_insights | ../09-content-backlog.md | conversations since RUN-04 | n/a | R05-02 and R05-03 terminal | SKIPPED_NO_NEW_INSIGHT | false | PENDING | zero to three concrete ideas and their exact source conversations recorded; nothing published | 09-content-backlog.md |
| R05-10 | classify campaign result | classify_results_green_amber_red | ../08-FINAL-REVENUE-AUDIT.md | whole campaign | n/a | prior tasks terminal or skipped, including R05-09 | STOP_TASK | false | PENDING | GREEN / AMBER / RED result recorded | 08-FINAL-REVENUE-AUDIT.md |
| R05-11 | decide the channel | log_totals_and_channel_decision | ../07-sales-metrics.csv | whole campaign | n/a | R05-10 complete | STOP_TASK | false | PENDING | totals closed and LinkedIn channel decision recorded | 07-sales-metrics.csv |

## Text sources

- `POST-05`: `06-posts-revenue-campaign.md`
- `AC-09`: `04-aligned-comments.md`
- `FM-01..FM-03`, `CI-01`, `WO-01`, `FD-01`: `05-sales-messages.md`
