---
name: seo-optimizer
description: "Audit and improve landing pages for technical SEO, on-page SEO, local SEO, structured data, accessibility, performance, and conversion. Use before publishing new landing pages, after SEO audit tools, when targeting a new keyword/location, or after redesigns."
---

# SEO Optimizer

## Purpose
Improve landing pages safely for search engines and humans: indexability, metadata, content depth, local SEO signals, structured data, accessibility, performance, internal linking, and conversion.

## Inputs to Request
- Target URL or path
- Primary keyword
- Secondary keywords
- Target location
- Verified business facts
- Competitors, if provided
- SEO audit tool results, if provided

## Workflow
1. Inspect the repo structure and identify the build system from `package.json`, framework config, or equivalent.
2. Identify the target page files, shared SEO config, sitemap, robots file, and reusable layout/components.
3. Check indexability: robots directives, `noindex`, canonical URL, sitemap inclusion, redirects, and URL host consistency.
4. Check metadata: title, meta description, Open Graph, Twitter, language, and real hreflang variants only when they exist.
5. Check content: one H1, useful H2/H3 hierarchy, search intent coverage, page depth, CTAs, and FAQ content.
6. Check internal linking from home, footer, service cards, breadcrumbs, and contextual links.
7. Check structured data: Person, ProfessionalService/Service, FAQPage, BreadcrumbList, visible-content alignment, canonical `url`/`@id`, and valid values.
8. Check local SEO signals: location wording, area served, local service language, Google Business Profile follow-ups, and citations. Do not invent address, phone, reviews, ratings, clients, or certifications.
9. Check usability and accessibility: viewport, semantic landmarks, labels, alt text, focus states, tap targets, color contrast, mobile navigation, readable text, and horizontal overflow.
10. Check performance basics: image dimensions, lazy loading for non-critical media, font loading, unnecessary JavaScript, and bundle impact.
11. Make focused code changes that preserve the design system and avoid broad rewrites.
12. Run available tests, lint, and build commands. If no command exists, state that clearly.
13. Report changed files, SEO impact, commands run, risks, assumptions, and manual follow-ups.

## Rules
- Do not invent business facts.
- Do not keyword-stuff; prefer helpful, natural copy.
- Keep canonical URLs consistent across HTML, sitemap, robots, Open Graph, and schema.
- Keep structured data aligned with visible content.
- Do not add fake reviews, fake ratings, fake clients, fake addresses, fake phone numbers, or fake case studies.
- Do not remove existing analytics or tracking unless it is broken and the user asked for a fix.
- Preserve the existing visual identity and design system unless a usability issue requires a targeted change.
- Prefer `ProfessionalService` or `Service` schema with `areaServed` when no public address or phone number exists.
- Add TODO comments only for missing verified business details that cannot be safely inferred.

## Output Format
- Summary of changes
- Files changed
- SEO impact
- Manual follow-ups
- Commands run
- Risks or assumptions
