---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
approved: false
---

# 08 — Execution checklist

## Before RUN-01

- [ ] Deploy the validated landing build and confirm the broadened German scope on https://www.hugomenz.de/.
- [ ] Confirm the RUN remains `approved: false` and `status: PENDING` before Hugo approves it.
- [ ] Use only the exact approval command in the RUN.
- [ ] Confirm no listed action is already visible or terminal.

## RUN-01 · PHASE A — SETUP

- [ ] Verify the public website scope.
- [ ] Verify the authenticated LinkedIn session.
- [ ] Apply and verify the exact profile and Featured-link changes.
- [ ] Process the 20 initial follows once, recording already-completed actions without repeating them.
- [ ] Verify the complete setup state in `R01-25V`.
- [ ] If any setup task fails or stops, do not begin PHASE B.

## RUN-01 · PHASE B — PUBLIC ACTIVITY

- [ ] Re-read both target posts and confirm unchanged context.
- [ ] Publish at most two exact approved comments.
- [ ] Publish exact `POST-01` once.
- [ ] Record URLs, timestamps, statuses and metrics immediately.

## RUN-02…RUN-05

- [ ] Review interactions and own threads since the prior RUN.
- [ ] Execute `capture_content_insights`: record 0–3 sourced ideas in `09-content-backlog.md`; publish nothing.
- [ ] Draft dynamic replies/messages only after a real interaction, show the exact text and request separate approval.
- [ ] Skip cleanly when no qualified signal exists; never let a pending reply block scheduled work.
- [ ] Never repeat a terminal action.

## Stop conditions

Stop the RUN on login, CAPTCHA, checkpoint, warning, throttling, repeated error or ambiguous selector. Record the stop condition and perform no further write.

