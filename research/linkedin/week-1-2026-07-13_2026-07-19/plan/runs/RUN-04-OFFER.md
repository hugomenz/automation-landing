---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
run_id: RUN-04-OFFER
approved: false
status: PENDING
---

# RUN-04 — OFFER

**Window:** 2026-07-21 → 2026-07-23

**Commercial objective:** publish the workshop offer, place two aligned comments and send the final five directed connection requests while only presenting the workshop to qualified leads.

**Approval command:** `EJECUTA RUN-04-OFFER COMPLETO SIN CAMBIAR OBJETIVOS, URLs NI TEXTOS.`

## Execution contract

- Execute only `PENDING` tasks.
- Any row with a `text_ref` uses the exact payload from the referenced source file.
- The workshop is presented only when the lead has shown a real problem, role fit and a clearly defined machine type or application context.
- If no lead qualifies, mark the workshop step `SKIPPED_NO_QUALIFIED_LEAD` and continue.
- Stop on login, CAPTCHA, checkpoint, warning, throttling or ambiguous selector.

## Tasks

| task_id | commercial objective | action | exact URL | person/company | text_ref | precondition | fallback | approved | status | expected result | update field |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R04-01 | verify access | session_check | https://www.linkedin.com/feed/ | Hugo profile session | n/a | authenticated session | STOP_RUN | false | PENDING | session confirmed | this file |
| R04-02 | capture incoming signals | review_interactions | https://www.linkedin.com/notifications/ | notifications | n/a | authenticated session | SKIPPED_NO_INTERACTIONS | false | PENDING | open conversations reviewed | this file |
| R04-03 | capture incoming signals | review_own_activity | https://www.linkedin.com/in/hugomartin-menz/recent-activity/all/ | Hugo activity | n/a | authenticated session | SKIPPED_NO_ACTIVITY_DELTA | false | PENDING | own activity reviewed | this file |
| R04-04 | state the concrete offer | create_post | https://www.linkedin.com/feed/ | Hugo profile | POST-04 | exact text not already published | STOP_TASK | false | PENDING | workshop post visible with UTM link | 06-posts-revenue-campaign.md |
| R04-05 | reinforce offer in the feed | read_post | https://www.linkedin.com/feed/update/urn:li:activity:7482065833033150465/ | Norbert Telle | AC-07 | post still visible and context unchanged | SKIPPED_CONTEXT_CHANGED | false | PENDING | target post re-read | this file |
| R04-06 | reinforce offer in the feed | comment_on_post | https://www.linkedin.com/feed/update/urn:li:activity:7482065833033150465/ | Norbert Telle | AC-07 | R04-05 confirmed | SKIPPED_CONTEXT_CHANGED | false | PENDING | aligned comment visible | 04-aligned-comments.md |
| R04-07 | reinforce offer in the feed | read_post | https://www.linkedin.com/feed/update/urn:li:activity:7478326756005953537/ | Raphael C. Juda | AC-08 | post still visible and context unchanged | SKIPPED_CONTEXT_CHANGED | false | PENDING | target post re-read | this file |
| R04-08 | reinforce offer in the feed | comment_on_post | https://www.linkedin.com/feed/update/urn:li:activity:7478326756005953537/ | Raphael C. Juda | AC-08 | R04-07 confirmed; at least 20 minutes after prior comment | SKIPPED_CONTEXT_CHANGED | false | PENDING | aligned comment visible | 04-aligned-comments.md |
| R04-09 | complete outbound wave | connect | https://www.linkedin.com/in/carsten-wolters-16630215b/ | Carsten Wolters | CR-11 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R04-10 | complete outbound wave | connect | https://www.linkedin.com/in/thomas-noll-948341198/ | Thomas Noll | CR-12 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R04-11 | complete outbound wave | connect | https://www.linkedin.com/in/laura-gildein-611b10105/ | Laura Gildein | CR-13 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R04-12 | complete outbound wave | connect | https://www.linkedin.com/in/patrick-ruoff-ba2008136/ | Patrick Ruoff | CR-14 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R04-13 | complete outbound wave | connect | https://www.linkedin.com/in/n%C3%A4ckel-birkenfeld-g%C3%BCnther-7a379934/ | Günther Näckel-Birkenfeld | CR-15 | no existing request or connection | SKIPPED_ALREADY_DONE | false | PENDING | request pending or accepted | 05-sales-messages.md |
| R04-14 | move qualified pain toward revenue | present_workshop_to_qualified_leads | ../05-sales-messages.md | qualified leads only | WO-01 | R04-02 and R04-03 complete; real problem, responsible role and machine type or application context identified | SKIPPED_NO_QUALIFIED_LEAD | false | PENDING | workshop introduction drafted and paused for approval | 05-sales-messages.md |
| R04-15 | preserve content learning without publishing | capture_content_insights | ../09-content-backlog.md | conversations since RUN-03 | n/a | R04-02 and R04-03 terminal | SKIPPED_NO_NEW_INSIGHT | false | PENDING | zero to three concrete ideas and their exact source conversations recorded; nothing published | 09-content-backlog.md |
| R04-16 | preserve pipeline clarity | log_offer_outcomes | ../07-sales-metrics.csv | RUN-04 metrics | n/a | prior tasks terminal or skipped, including R04-15 | STOP_TASK | false | PENDING | workshops presented and proposals requested/rejected recorded | 07-sales-metrics.csv |

## Text sources

- `POST-04`: `06-posts-revenue-campaign.md`
- `AC-07`, `AC-08`: `04-aligned-comments.md`
- `CR-11..CR-15`, `WO-01`: `05-sales-messages.md`
