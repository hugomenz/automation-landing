# 07 — Rebuild report (research-only) · 2026-07-12

**Scope:** rebuild the 14-day LinkedIn campaign into *executable* RUNs, based only on **real, verified**
posts. **No public action was taken** (no post, comment, follow, connect, message, react, profile edit).
Everything is `approved: false` and waits for a per-RUN approval command.

---

## 0. Search method (the pre-task question: selector indexing vs URL query)
**Decision: drive search with the URL query — do not index the filter pills.** Verified live on the
authenticated session (Hugo's own account, `/in/hugomartin-menz/`, de-DE):

- **Filtering by URL works and is robust:** `…/search/results/content/?keywords={q}&origin=FACETED_SEARCH&sortBy=%22date_posted%22&datePosted=%22past-week%22`
  (also `past-24h`, `past-month`; keep the `%22…%22` quotes). The filter pills (`Beiträge`, `Aktuellste`,
  `Veröffentlichungsdatum`, `Inhaltsart`, `Vom Mitglied`) ship hashed CSS + `componentkey` UUIDs and are not worth indexing.
- **New-UI catch:** the content-search cards **do not** expose the post's `urn:li:activity:` id in the DOM or
  React props (only the author `urn:li:member` + `/in/`). The reliable **read-only** way to get the canonical
  permalink is to open a post's `Kontrollmenü für den Beitrag` and read the `Beitrag melden` item's href
  (`…report-in-modal/?…&updateUrn=urn:li:activity:…`), then press Escape. The Report control is **never** clicked.
- Recorded in the skill: `selectors/linkedin-selector-registry.json` (v1.1.0 — `search_content_filter_params`,
  `search_content_result_card`, `post_permalink_via_control_menu`), `selectors/linkedin-i18n.json`,
  `references/selectors-by-flow.md`. This is what makes the harvest below repeatable.

## 1. Candidate posts researched
**7 content searches** (newest-first, past-week/past-month): `Sondermaschinenbau`, `Lastenheft Maschinenbau`,
`Verpackungsmaschine`, `technischer Vertrieb Maschinenbau`, `Palettieranlage` (sparse), `Anlagenbau`,
`Angebot Sondermaschinenbau` (best signal). **~90 cards scanned**, recruiting/job-ads and off-topic filtered
out → **26 real candidates** kept in [datos/07-comment-candidate-research.csv](datos/07-comment-candidate-research.csv).
**21 posts were opened and read in full** to draft defensible comments.

## 2. Posts with a canonical URL
All 26 kept candidates carry a canonical `…/feed/update/urn:li:activity:{id}/` (except 2 flagged
`BACKLOG_no_id` whose id must be re-fetched before use). The 20 used in the campaign (13 primary + 7 reserve)
are all fully verified.

## 3. Primary comments prepared — **13** (not a forced 21)
Full metadata + exact German text in [plan/03-comment-drafts.md](plan/03-comment-drafts.md). Honest count:
deep research produced **13** genuinely defensible primaries. Padding to 21 would have meant weak or
off-theme posts — the task says stop at the real number, so we did. Headline targets:
Jakob Fähler (GF AWARONIC), Stefan Daumoser (Leiter Projektleitung Sondermaschinenbau), LMD GmbH,
Eric Springborn (Actemium), Sebastian Tobias Leicht, Dirk Mühlhauser, Fabio Trapani, Dietmar Ungar,
Dr. Arash Abbaspour, Carl Valentin GmbH, Norbert Telle, Raphael Juda, VisuPal.
Type mix: **7 observations / 4 questions / 2 disagreement-limit** (54 / 31 / 15 %).

## 4. Reserve comments — **7** (1 per RUN)
In [plan/07-comment-reserves.md](plan/07-comment-reserves.md): Klippe, Maurer, Dittrich, grewe, Halbritter,
Rohmann (operational angle only), Sojka. Used only if a primary post disappears or changes context.

## 5. Share aimed at industrial buyers
Primaries: **11/13 = 85 %** in front of machinery / EOL / engineering / technical-sales audiences;
**2/13 = 15 %** software/consulting (Juda, VisuPal) — within the ≤ 20 % cap. ≥ 70 % target met.

## 6. Initial accounts to follow — **25 in RUN-01**
12 active prospects (7 verified-active authors from this week + Prewa, EOL Experts, transnova-RUF,
Harro Höfliger, IWK), 7 ICP people (Erboral, V. Schmidt, Demuß, Range, Benz, Mitulla, Gildein),
6 media/associations/fairs (VDMA, Packaging Valley, Messe Düsseldorf, NürnbergMesse, Konradin, Fraunhofer IPA).
RUN-02…07: **max 2 new follows each**. See [plan/05-follow-list.csv](plan/05-follow-list.csv) / [.md](plan/05-follow-list.md).

## 7. Final order of the seven posts
1) incomplete requests → 2) six-category method → 3) 20-minute conversation invite →
4) synthetic process example (**link → homepage**, `utm_content=post_04`) → 5) economic case →
6) RFQ Readiness Workshop offer (**link → workshop**, `utm_content=post_06`) → 7) critical "AI calculates the machine".
The ask for a conversation and the offer now come earlier. Texts unchanged; only order/dates/links moved.
See [plan/06-posts-final.md](plan/06-posts-final.md) and [plan/04-campaign-links.csv](plan/04-campaign-links.csv).

## 8. Rebuilt RUNs
[plan/runs/](plan/runs/) RUN-01…07, each with `task_id`, type, exact URL, exact text, precondition, fallback,
expected result, `approved:false`, status. RUN-01 adds the profile changeset + 25 follows. RUN-02…07 begin
with a read-only interaction review and carry conditional reply/hot-connection steps (`SKIPPED_NO_INTERACTION`
/ `SKIPPED_NO_HOT_CONNECTION` by default, since no interaction exists yet). No open-ended "find a post" tasks.
Previous RUNs preserved in [archive/runs-before-final-rebuild/](archive/runs-before-final-rebuild/).

## 9. Blockers / missing data
- **Comment volume:** verified pool supports **13** primaries, not 21 (segment is polluted with recruiting +
  consulting; core-product terms surface vendors/promos, not buyers-in-pain).
- **2 backlog candidates** (Thomas Meyer-Dethlefs, Dimitri Kapetzke) lack a captured activity id — re-fetch before use.
- **Older primaries:** Fähler and Springborn are ~3 weeks old (on-theme, still active). Use early in their RUN or fall back to the reserve.
- **Slug audit update (final audit 2026-07-12):** Harro Höfliger was corrected and confirmed as `https://www.linkedin.com/company/harro-h-fliger/`. FORM+TEST and Schnaithmann remain unverified backlog entries and are not part of RUN-01.
- **No interactions yet:** reply and hot-connection steps are correctly empty until the campaign actually runs.

## 10. Files created / modified
**Created:** `plan/07-interaction-and-connection-policy.md`, `plan/07-comment-reserves.md`,
`datos/07-comment-candidate-research.csv`, `07-rebuild-report.md`, `archive/runs-before-final-rebuild/` (7 files).
**Rebuilt:** `plan/03-comment-drafts.md`, `plan/03-metrics-dashboard.csv`, `plan/05-follow-list.csv` + `.md`,
`plan/06-posts-final.md`, `plan/06-content-calendar-14-days.md`, `plan/runs/RUN-01…07`.
**Updated:** `plan/04-campaign-links.csv` (UTM → post_04/post_06), `00-HUGO-LEEME.md`, `README.md`.
**Skill updated:** `selectors/linkedin-selector-registry.json` (v1.1.0), `selectors/linkedin-i18n.json`,
`references/selectors-by-flow.md`.

## 11. Test result
Skill gate tests (`.github/skills/linkedin-copilot-package/`): final audit result **32/32 PASS** —
`node --test tests/supervised-campaign.test.mjs tests/linkedin-readonly-smoke.test.mjs`.

---
**Nothing is published.** Approve a single RUN with, e.g., `EJECUTA RUN-01 COMPLETO SIN CAMBIAR OBJETIVOS, URLs NI TEXTOS.`
