# Hugo Martin services website

Angular 21 application for [hugomenz.de](https://www.hugomenz.de/). The public offer covers Angular development, GitHub Copilot and process automation.

## Content and routes

Content is stored in `src/app/content/` and registered in `page.registry.ts`. Each page owns its title, description, canonical path, social metadata, breadcrumbs, body and optional language alternates. German and English versions have reciprocal language links. Only real translations are advertised.

`app.routes.ts` derives the live routes from the registry. Previous product and campaign URLs are mapped in `src/app/legacy-redirects.json`. The build writes static redirects with a canonical destination, noindex directive and an accessible link so old bookmarks still lead to the current offer.

## Contact

The shared dialog supports general, Angular, Copilot and process automation enquiries. It retains the original delivery endpoint, payload fields, validation, rate limits and keyboard behaviour. Never send a real enquiry as a deployment test.

## Commands

```bash
npm ci
npm test
npm run build
npm run verify:prerender
npm start -- --host 127.0.0.1 --port 4301
```

The deployed directory is `dist/landing/browser`. No application server is needed in production.

## Visual review

Review the home, a service page, navigation and contact dialog on desktop and mobile. Check keyboard focus, text contrast, language switching, long German words and horizontal overflow. The shared visual rules live in the root `DESIGN.md`.
