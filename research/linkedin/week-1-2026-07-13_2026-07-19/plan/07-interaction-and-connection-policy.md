---
campaign_version: 1.1
strategy_frozen: true
frozen_at: 2026-07-12T21:22:05+02:00
audit_status: READY
---

# 07 — Interaction, dynamic reply and warm-connection policy

**Mode:** research + `supervised_campaign`. The approved RUN covers only its frozen scheduled post, primary/reserve comments, follows and approved profile changes. It never pre-approves a reply, a connection or a reactive post.

This file follows `.github/skills/linkedin-copilot-package/config/supervised-campaign-policy.json`: a connection request is allowed only after a real warm candidate exists, with exact profile URL, exact note and a separate approval. No connection click is pre-approved by the frozen RUN.

## 1. Interaction review in RUN-02…RUN-07

At the beginning of each RUN:

1. Review notifications, the previous own post and the threads where Hugo commented.
2. Record replies, substantive comments and ICP participants with canonical conversation and profile URLs.
3. Ignore likes/reactions as reply material; they may be counted but never answered automatically.
4. Run `capture_content_insights`: extract zero to three concrete ideas, cite the originating conversation and append them to `09-content-backlog.md`.
5. Do not delay the scheduled RUN when there is no interaction, reply, connection candidate or reactive-post material.

## 2. Dynamic replies require separate approval

A reply cannot have exact text before the interaction exists. Therefore it is not an approved action in the frozen RUN.

When a substantial reply exists:

1. Record the exact conversation URL and the relevant incoming text/context.
2. Draft a brief 1–2 sentence reply under `comment-style.md`.
3. Show Hugo the exact URL and exact reply text.
4. Request a separate, single-action approval.
5. If approval is absent, continue the RUN and record `REPLY_PENDING_APPROVAL`.
6. After submission, verify once and record the resulting URL/time. Never reuse the approval or send the same reply twice.

Replies never pitch, link or mention the offer unless the other person explicitly asked.

## 3. Warm connections: candidate preparation and separate approval

A person is warm only if they replied to Hugo, took part in a real exchange in a thread, interacted substantively more than once, or engaged around a clear shared professional topic. A follow or isolated reaction is not enough.

When a candidate exists, record:

- canonical profile URL;
- exact prior interaction and conversation URL;
- why the interaction qualifies as warm;
- optional note of at most 200 characters, without pitch or link;
- `approved: false` and `status: CONNECTION_PENDING_SEPARATE_DECISION`.

No unknown future person can be approved in advance. If no candidate exists, record `SKIPPED_NO_HOT_CONNECTION` and continue. If Hugo separately approves the exact known profile and note, the copilot may send that one connection request once, verify it and log it. A missing candidate or approval never blocks the RUN.

## 4. Reactive posts

At most two reactive posts may be published across the whole campaign. A candidate exists only when a substantial conversation with someone from the ICP provides a concrete idea.

- It is outside the seven scheduled posts.
- It cites the real source conversation in the private backlog.
- Its exact final text and destination must be shown to Hugo.
- It requires separate approval and never inherits RUN approval.
- It cannot delay the RUN.
- If no real material exists, record `SKIPPED_NO_REACTIVE_MATERIAL`.

## 5. Logging

After every RUN update `03-metrics-dashboard.csv`, the action statuses in the RUN and `09-content-backlog.md`. Use `REPLY_PENDING_APPROVAL`, `CONNECTION_PENDING_SEPARATE_DECISION` and `REACTIVE_POST_PENDING_SEPARATE_APPROVAL` only for real, fully identified candidates.
