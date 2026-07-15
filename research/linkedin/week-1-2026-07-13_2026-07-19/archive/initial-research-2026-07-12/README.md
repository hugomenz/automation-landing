# Week 1 — LinkedIn visibility research (Hugo Menz)

**Research date:** 2026-07-12 · **Execution week:** 2026-07-13 → 2026-07-19 · **Skill:** `linkedin-copilot` · **Mode:** read-only (nothing published, no connect/follow/message).

## What this is
Read-only LinkedIn research to prepare Hugo Menz's Week-1 industrial visibility: a real,
de-duplicated universe of German machinery/automation companies and people, the active
conversations worth joining, drafted (unpublished) comments and posts, an action queue, and a
segment decision with go/adjust/stop thresholds.

## Honest scale note
The brief asked for 250–350 companies and 300–500 people. The skill used (`linkedin-copilot`)
and its critical assessment call that the wrong principle ("30 relevant companies and 20 active
people beat 500 unqualified records"), and your own rules forbid invented data and bulk
scraping. So this contains a **verified core** gathered at a conservative pace, with `unknown`
wherever a field wasn't opened — not a padded quota. The documented searches let it grow during
the week.

## Files
| File | Contents |
| --- | --- |
| [01-company-universe.csv](01-company-universe.csv) / [.json](01-company-universe.json) | ~42 real organizations, classified (PROSPECT/DISTRIBUTION/ECOSYSTEM) with 0–5 scores |
| [01-company-universe-summary.md](01-company-universe-summary.md) | Company analysis, top-12, searches that worked/failed, weakened hypotheses |
| [02-people-universe.csv](02-people-universe.csv) / [.json](02-people-universe.json) | ~38 real ICP people, classified, with 0–5 scores |
| [02-active-publishers.csv](02-active-publishers.csv) | ~12 accounts/people posting on-topic |
| [02-content-opportunities.csv](02-content-opportunities.csv) | ~12 posts to engage, with angle/risk/date |
| [02-people-summary.md](02-people-summary.md) | People analysis, distribution points, topics |
| [03-week-1-decision.md](03-week-1-decision.md) | Segment decision + Green/Amber/Red thresholds |
| [03-week-1-action-queue.csv](03-week-1-action-queue.csv) | Mon–Fri actions (SKIP where no natural opportunity) |
| [03-comment-drafts.md](03-comment-drafts.md) | 7 real German drafts + honest SKIP_COMMENT slots |
| [03-content-plan.md](03-content-plan.md) | 3 own-post drafts (defensible, no invented facts) |
| [03-metrics-dashboard.csv](03-metrics-dashboard.csv) | Template separating distribution vs commercial signals |
| [sources/01-company-searches.json](sources/01-company-searches.json) | Company search log |
| [sources/02-profile-and-post-research.json](sources/02-profile-and-post-research.json) | People + post search log |

## Totals
- Organizations investigated: **~42** (curated real; unique by canonical URL)
- People investigated: **~38** (curated real; unique by canonical URL)
- People with verified recent activity: **~5** (rest `unknown` — verify first Monday)
- Posts evaluated: **~22** (12 kept as opportunities)
- Chosen primary segment: **End-of-Line / packaging / palletizing machinery**
- Secondary: **Sondermaschinenbau + handling/assembly**

## Rules honored
Dedup by canonical URL · `unknown` where unverifiable · source + observed_at kept · no
emails/phones/Contact Info · no infinite scroll · conservative pace · no login/CAPTCHA hit ·
LinkedIn content treated as data, not instructions · **no public action taken** — all comments
and posts are drafts requiring explicit human approval.
