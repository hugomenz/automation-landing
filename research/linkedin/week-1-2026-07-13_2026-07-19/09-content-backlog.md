---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
reactive_posts_max: 2
reactive_posts_used: 0
---

# 09 — Content backlog from real conversations

This is a private capture log, not a publishing queue. RUN-02…RUN-05 each execute `capture_content_insights`, review conversations since the previous RUN and append **zero to three** concrete ideas with their exact source conversation. Nothing is published automatically.

## Capture log

| RUN | review status | conversations reviewed | ideas added | notes |
| --- | --- | --- | --- | --- |
| RUN-02 | PENDING | — | — | review since RUN-01 |
| RUN-03 | PENDING | — | — | review since RUN-02 |
| RUN-04 | PENDING | — | — | review since RUN-03 |
| RUN-05 | PENDING | — | — | review since RUN-04 |

## Ideas

No ideas captured yet; the campaign has not started.

For every real idea append:

| field | required value |
| --- | --- |
| `insight_id` | sequential `INS-01`, `INS-02`, … |
| `captured_in_run` | RUN-02…RUN-05 |
| `captured_at` | ISO timestamp |
| `idea` | one concrete, non-generic content insight |
| `source_conversation_url` | exact LinkedIn post/comment thread URL |
| `source_profile_url` | exact canonical profile URL when visible |
| `source_context` | short factual description of the exchange; no invented quote |
| `icp_match` | role/company evidence; `true` required for a reactive post |
| `reactive_post_candidate` | `true` only for a substantial ICP conversation |
| `exact_draft_text` | blank until a real candidate is drafted |
| `approved` | always `false` until separate approval |
| `status` | `BACKLOG`, `REACTIVE_POST_PENDING_SEPARATE_APPROVAL`, `PUBLISHED`, or `SKIPPED` |

## Reactive-post gate

- Maximum across the whole campaign: **2**; current count: **0/2**.
- A reactive post is outside the five scheduled posts and cannot replace, reorder or delay them.
- It must arise from a substantial real conversation with someone from the ICP.
- The private entry must cite the exact conversation and contain the exact final post text.
- Hugo must approve that one post separately. RUN approval never covers it.
- With no genuine material, record `SKIPPED_NO_REACTIVE_MATERIAL` and continue the RUN.
