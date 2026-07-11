# Plantilla de descripción de PR

## Summary

- Repositioned hugomenz.de from generic workflow automation to technical RFQ qualification for machinery manufacturers.
- Added prerendered Angular routes for solutions, services, industries, Stuttgart, profile, contact and English home.
- Reworked metadata, canonical URLs, hreflang, schema, sitemap and internal linking.
- Preserved the existing n8n Stuttgart URL as a secondary technology landing page.

## Strategic changes

- Primary H1: `Angebotsprozesse im Maschinenbau digitalisieren`.
- Primary CTA: `Pilot-Eignung prüfen`.
- Product framing: internal RFQ copilot for one machine family.
- Explicit boundaries: approved rules, no invented prices, human approval.

## Technical changes

- Added Angular Router.
- Added static prerendering for GitHub Pages.
- Added page-level SEO configuration and JSON-LD.
- Added route and built-HTML verification.
- Updated sitemap and robots.

## Validation

```bash
cd apps/landing
npm ci
npm test
npm run build
npm run verify:prerender
```

## Manual QA completed

- [ ] German home desktop/mobile
- [ ] English home desktop/mobile
- [ ] Core solution page
- [ ] Workshop page
- [ ] Industry page
- [ ] Stuttgart page
- [ ] Contact form
- [ ] n8n Stuttgart page
- [ ] Direct navigation to deep URLs
- [ ] Source HTML contains H1/title/canonical
- [ ] No console or hydration errors

## Claims and data review

- [ ] No fabricated customers, testimonials or metrics
- [ ] No autonomous pricing claims
- [ ] Human review remains explicit
- [ ] No unconfirmed prices published
