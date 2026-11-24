# SEO and publication checklist for hugomenz.de

## Current offer

Hugo Martin provides Angular development, GitHub Copilot support and process automation. Public copy must describe actual skills and scoped services. Use professional experience as context; publish customer references and results only when they are verified.

## Before publishing

- Run `npm test`, `npm run build` and `npm run verify:prerender` from `apps/landing`.
- Confirm all 14 public pages are prerendered with one H1, a unique title and description, and a self-canonical URL.
- Keep the preferred host `https://www.hugomenz.de/` across metadata, sitemap and structured data.
- Confirm six translated DE/EN pairs have reciprocal language annotations. Stuttgart and n8n pages have no invented English equivalent.
- Keep legacy URLs out of the sitemap. Verify their static redirect HTML against `legacy-redirects.json`.
- Confirm the new share image `/og-services.png`, HM favicon and portrait load.
- Check that page content, navigation, contact prompts and structured data all describe the services.
- Keep schema aligned with visible facts. Do not add ratings, client logos, Product schema or price offers without evidence.
- Check keyboard navigation, focus, contact errors and mobile overflow without submitting a real contact message.

## After publishing

- Check the live German and English homepages, all three service areas, contact and representative old URLs.
- Confirm the GitHub Pages deployment finished successfully.
- Inspect the refreshed sitemap in Google Search Console when access is available. Search engine titles and cached social previews may update later than the website.

GitHub Pages serves these legacy redirects as static HTML with a meta refresh, a canonical destination and a visible link. They are not server-side HTTP 301 redirects.
