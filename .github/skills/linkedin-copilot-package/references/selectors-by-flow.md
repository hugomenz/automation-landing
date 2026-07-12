# Selectors by flow — LinkedIn

Agent-facing catalog of the selectors for **every flow**, read and write.
Verified live on **2026-07-12** in the VS Code integrated browser. Interface
language observed: **German (de-DE)** (accessible names are German even though
`documentElement.lang` = `en`). Always match all locale variants in
[../selectors/linkedin-i18n.json](../selectors/linkedin-i18n.json).

**Status legend:** ✅ verified live · ⚠️ to verify at runtime (structure known,
exact label appears only after interaction) · ⛔ forbidden control (never click).

## Shared conventions
- **Selector strategy order:** role + accessible name → label → placeholder →
  stable visible text → stable semantic attribute → verified href pattern →
  structural anchor to a known section → CSS (last resort). LinkedIn hashes CSS
  classes, so never rely on them.
- **`read_page` returns the accessibility tree** (role + name + `ref`) — the primary
  source. Use `run_playwright_code` `page.evaluate` for read-only DOM inspection.
- **Canonical URLs:** `/in/{slug}/` (person), `/company/{slug}/` (company),
  `/feed/update/urn:li:activity:{id}/` (post), `/jobs/view/{id}/` (job). Strip
  query/tracking params (see [../lib/normalize.mjs](../lib/normalize.mjs)).
- **Mode:** `read` flows need no confirmation. `write` flows (🖊️) require the agent
  to **show the exact action and get an explicit "yes" before the submit click**.

---

## Flow 0 — Session & global navigation (read)
| Element | Role | Name (de) | Locator | Status |
| --- | --- | --- | --- | --- |
| Session indicator | button | `Sie` | role+name; or `/mynetwork` href | ✅ |
| Global search box | textbox | `Suche` | inside `search` landmark | ✅ |
| Nav: My Network | link | `Ihr Netzwerk` | href `linkedin.com/mynetwork` | ✅ |
| Nav: Jobs | link | `Jobs` | href `linkedin.com/jobs/` | ✅ |

Stop conditions on any page: login form, password, 2FA, CAPTCHA, verification,
checkpoint → **halt and ask a human**.

---

## Flow 1 — Search: people / companies / posts (read)
Prefer direct results-URL navigation (robust, read-only). **Filter via the URL query,
not the filter pills** — the pills ship fully hashed CSS + `componentkey` UUIDs and are
not worth indexing; the URL drives the same state deterministically (verified live 2026-07-12):
- People: `https://www.linkedin.com/search/results/people/?keywords={q}`
- Companies: `https://www.linkedin.com/search/results/companies/?keywords={q}`
- Posts (newest, last week): `https://www.linkedin.com/search/results/content/?keywords={q}&origin=FACETED_SEARCH&sortBy=%22date_posted%22&datePosted=%22past-week%22`

Content-search filter params (keep the URL-encoded quotes `%22…%22`):
`sortBy=%22date_posted%22` (Aktuellste) or `%22relevance%22`;
`datePosted=%22past-24h%22 | %22past-week%22 | %22past-month%22`.

| Element | Role/type | Name (de) | Locator | Status |
| --- | --- | --- | --- | --- |
| People card | listitem | — | `[role=listitem]` containing `a[href*="/in/"]` | ✅ |
| Person link | link | person name | `a[href*="/in/"]` → `/in/{slug}/` | ✅ |
| Company card | listitem | — | `ul>li` containing `a[href*="/company/"]` | ✅ |
| Company link | link | company name | `a[href*="/company/"]` → `/company/{slug}/` | ✅ |
| Post card (new UI) | — | — | smallest ancestor of one `button[aria-label^="Kontrollmenü für den Beitrag"]` that also has an `a[href*="/in/"]` | ✅ |
| Post author / company | link | — | `a[href*="/in/"]`, `a[href*="/company/"]` inside the card | ✅ |
| Post relative date | — | e.g. `4 Tag(e) •` | plain `<span>` (⚠️ no href/permalink) | ✅ |
| Post canonical id | — | — | open control menu → read `a[href*="report-in-modal"]` → `updateUrn=urn:li:activity:{id}` (Report is NEVER clicked) | ✅ |
| Empty state | heading | `Keine Ergebnisse gefunden` | role=heading + name | ✅ |
| Next page | button | `Weiter` | role+name | ✅ |
| Previous page | button | `Zurück` | role+name | ✅ |
| All filters / pills | button | `Alle Filter`, `Aktuellste`, `Veröffentlichungsdatum` | ⛔ don't index — use URL params instead | ⚠️ |

People card text = name + connection degree (`• 2.`) + headline.

**New content-search UI (2026-07-12):** post cards expose the **author** (`/in/`, `urn:li:member:{id}`)
and company in the DOM, but **not** the post's own `urn:li:activity:{id}` and no `/feed/update/` href.
To canonicalize a post, open its `Kontrollmenü für den Beitrag von {Autor} öffnen` control menu and read the
`Beitrag melden` item's href (`…/report-in-modal/?entityUrn=urn:li:share:…&authorUrn=urn:li:member:…&updateUrn=urn:li:activity:…`),
then press `Escape`. Reading the href is read-only; the Report/Save/Copy items are never activated.

---

## Flow 2 — Read a profile (read)
Open canonical `/in/{slug}/`. Name via `document.title` (`"{Name} | LinkedIn"`);
plain `h1` can be empty.

| Element | Anchor (de) | Locator | Status |
| --- | --- | --- | --- |
| Name | — | `document.title` split ` | LinkedIn` | ✅ |
| About section | `Info` | section by heading | ✅ |
| Experience | `Erfahrung` | section by heading | ✅ |
| Education | `Ausbildung` | section by heading | ✅ |
| Skills | `Kenntnisse` | section by heading | ✅ |
| Interests | `Interessen` | section by heading | ✅ |
| Activity | `Aktivitäten` | section by heading; `/in/{slug}/recent-activity/all/` | ✅ |
| Current company link | — | `main a[href*="/company/"]` | ✅ |
| ⛔ Contact info | `Kontaktinfo` | **never open**; never collect email/phone | ⛔ |
| ⛔ Follow / Message / Connect | `…folgen` / `Nachricht` / `Vernetzen` | **never click** | ⛔ |

---

## Flow 3 — Read a company (read)
Open `/company/{slug}/`; tabs: `Start` · `Info` · `Beiträge` · `Personen` · `Einblicke`.
About overview at `/company/{slug}/about/` uses a `dt`/`dd` list.

| Field | Label (de) | Locator | Status |
| --- | --- | --- | --- |
| Industry | `Branche` | `dt` label → next `dd` | ✅ |
| Company size | `Größe` | `dt`→`dd` (e.g. `1.001 bis 5.000 Beschäftigte`) | ✅ |
| Headquarters | `Hauptsitz` | `dt`→`dd` | ✅ |
| Website | `Website` | `dt`→`dd` (external link) | ✅ |
| Founded | `Gegründet` | `dt`→`dd` | ✅ |
| Specialties | `Spezialgebiete` | `dt`→`dd` | ✅ |
| Posts | `Beiträge` | `/company/{slug}/posts/` | ✅ |
| ⛔ Follow / Message | `Folgen` / `Nachricht` | **never click** | ⛔ |

---

## Flow 4 — Read a post & comments (read)
Open canonical `/feed/update/urn:li:activity:{id}/`.

| Element | Name (de) | Locator | Status |
| --- | --- | --- | --- |
| Post container | — | `[data-urn*="urn:li:activity:"]` | ✅ |
| Relative date | e.g. `3 Tage •` | text `\d+ (Min.|Std.|Tag(e)|Woche(n)|Monat(e)|Jahr(e))` | ✅ |
| Reactions count | `16 Reaktionen` | visible text (context only) | ✅ |
| Comments count | `1 Kommentar` | visible text (context only) | ✅ |
| Commenter | — | `/in/` links in comments region; exclude author + self | ✅ |
| ⛔ Like / Comment / Repost / Send | `Mit „Gefällt mir" reagieren` / `Kommentieren` / `Reposten` / `Senden` | read-only mode: **never click** | ⛔ |

For dates use [../lib/normalize.mjs](../lib/normalize.mjs) `normalizeVisibleDate`.

---

## Flow 5 — Jobs: search, read offer, go to company (read) + apply (🖊️ write)
Search URL: `https://www.linkedin.com/jobs/search/?keywords={q}&location={loc}`
(selecting a job adds `&currentJobId={id}`).

| Element | Role/type | Name (de) | Locator | Status |
| --- | --- | --- | --- | --- |
| Keyword box | combobox | `Suche (Position, Kenntnisse oder Unternehmen)` | role+name | ✅ |
| Location box | combobox | `Ort, Bundesland/Kanton oder PLZ` | role+name | ✅ |
| Job card | listitem | job title | `li` containing `a[href*="/jobs/view/"]` | ✅ |
| Job link | link | job title | `a[href*="/jobs/view/{id}/"]` → canonical job URL | ✅ |
| Card meta | — | company name + `Ort … (Vor Ort/Hybrid)` | text spans in card | ✅ |
| Detail: company link | link | company | detail top-card `a[href*="/company/"]` (strip `/life`) → navigate to company | ✅ |
| Detail: description | — | — | job detail description region | ⚠️ |
| Promoted badge | — | `Anzeige` | text (ad marker) | ✅ |
| 🖊️ Apply (Easy Apply) | button | `Einfach bewerben` | role+name — **write; confirm first** | ✅ |
| 🖊️ Apply on site | link | `… bewerben` (company site) | leaves LinkedIn — **confirm first** | ✅ |

**Apply is a WRITE.** Before clicking `Einfach bewerben`, show the job + any
answers to the user and wait for explicit confirmation. Never submit an
application automatically. Stop if a CAPTCHA/verification appears.

---

## Flow 6 — Comment on a post (🖊️ write, supervised)
On a post permalink `/feed/update/urn:li:activity:{id}/`.

| Step | Element | Role | Name (de) | Locator | Status |
| --- | --- | --- | --- | --- | --- |
| 1 open composer | Comment trigger | button | `Kommentieren` | role+name | ✅ |
| 2 focus editor | Comment editor | textbox | `Texteditor zum Erstellen von Kommentaren` | `[aria-label="Texteditor zum Erstellen von Kommentaren"]` (contenteditable, TipTap/ProseMirror) | ✅ |
| 3 type text | — | — | — | type into the focused editor | — |
| 4 **confirm** | — | — | — | **show exact comment text → wait for user "yes"** | — |
| 5 submit | Send comment | button | `Senden` | button `Senden` **inside the comment composer**, enabled only when text present | ✅ |
| optional | Emoji / GIF / Photo | button | `Emoji-Auswahl anzeigen` / `GIF-Auswahl öffnen` / `Foto teilen` | role+name | ✅ |

**Disambiguation:** the comment `Senden` is the button adjacent to the comment
editor (disabled while empty). Do **not** confuse it with the messaging `Senden`.
Never post without step 4 confirmation. One comment per explicit request.

---

## Flow 7 — Update your own profile (🖊️ write, supervised)
Open your own profile (`/in/{your-slug}/`). Each pencil opens an edit **modal**
whose Save button is `Speichern`.

| Element | Role | Name (de) | Locator | Status |
| --- | --- | --- | --- | --- |
| Edit intro | button | `Profil bearbeiten` | role+name | ✅ |
| Edit background photo | button | `Hintergrundbild bearbeiten` | role+name | ✅ |
| Add a section | button | `Abschnitt hinzufügen` | role+name | ✅ |
| Edit About | button | `Info bearbeiten` | role+name | ✅ |
| Add / edit experience | button | `Berufserfahrung hinzufügen` / `… bearbeiten` | role+name | ✅ |
| Add / edit education | button | `Ausbildung hinzufügen` / `… bearbeiten` | role+name | ✅ |
| Add / edit skill | button | `Kenntnis hinzufügen` / `… bearbeiten` | role+name | ✅ |
| Add / edit certificate | button | `Ein Zertifikat hinzufügen` / `… bearbeiten` | role+name | ✅ |
| Edit public URL | button | `Öffentliches Profil und URL bearbeiten` | role+name | ✅ |
| **Confirm** | — | — | **show field + old→new value → wait for "yes"** | — |
| Save (in modal) | button | `Speichern` | button `Speichern` inside the edit dialog | ⚠️ |
| Cancel (in modal) | button | `Abbrechen` | to leave without saving | ⚠️ |

**Never click `Speichern` without step-confirm.** Show the exact field and the
old → new value, wait for explicit "yes", save once, then report. If unsure which
control saves, stop and ask.

---

## Still forbidden in every mode
connect / follow / unfollow, react / like, repost / share, send message, invite,
endorse, subscribe, delete, and any bulk/scraped export. See
[../config/linkedin-readonly-policy.json](../config/linkedin-readonly-policy.json).
