# linkedin-copilot

A packaged `.github/skills/linkedin-copilot` skill for industrial LinkedIn research and supervised visibility work.

## Start

Read `SKILL.md`, then run one of the three JSON jobs in `jobs/`.

## Important distinction

The agent may search and draft at scale within bounded research limits. It may not publish comments autonomously. Every public comment requires approval of the exact final text and target post.

## Test

```bash
node --test .github/skills/linkedin-copilot-package/tests/supervised-campaign.test.mjs .github/skills/linkedin-copilot-package/tests/linkedin-readonly-smoke.test.mjs
```
