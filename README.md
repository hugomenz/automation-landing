# Hugo Martin

Source for [hugomenz.de](https://www.hugomenz.de/), the personal services website of Hugo Martin.

The offer has three areas:

- Angular applications, internal tools and technical work on existing component libraries.
- GitHub Copilot, custom skills, agents and development workflow automation.
- Process automation and API integrations with n8n, Make and Power Automate.

Projects start with a specific problem and an agreed scope. The website presents an individual, part-time service offering and factual professional experience.

## Project structure

| Path | Purpose |
|---|---|
| `apps/landing/` | Angular 21 website, prerendered and deployed to GitHub Pages |
| `DESIGN.md` | Current visual identity and UI rules |
| `brain/` | Historical research and business validation |
| `docs/` | Technical notes and historical reference material |

Current public positioning is defined by the typed content registry in `apps/landing/src/app/content/`. Historical research keeps its original context.

## Architecture

- Angular 21.2.17, standalone components, signals, OnPush and zoneless change detection.
- Angular Router with routes derived from the typed page registry.
- Static prerendering with `@angular/ssr` and `outputMode: "static"`.
- German and English home, service, about and contact pages.
- German local pages for Stuttgart and n8n.
- Shared metadata, canonical URLs, reciprocal language links and structured data.
- Existing contact delivery, validation, feedback and rate limits.
- Legacy product URLs redirect to current service pages. The redirect map is in `src/app/legacy-redirects.json`.

The production output is `apps/landing/dist/landing/browser`.

## Development and validation

Use Node.js 22 and run commands from the app directory:

```bash
cd apps/landing
npm ci
npm test
npm run build
npm run verify:prerender
```

For local development:

```bash
npm start -- --host 127.0.0.1 --port 4301
```

GitHub Actions runs tests, the production build and prerender checks before deploying the main branch to GitHub Pages.

## Identity

The public name is **Hugo Martin**. The design keeps IBM Plex typography and the site's technical layout, using off-white, restrained blue and small warm yellow accents inspired by the Canary Islands. See `DESIGN.md` for tokens and accessibility rules.
