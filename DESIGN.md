# Design system: Hugo Martin

## Position and visual idea

The site presents Hugo Martin's independent services in three connected areas: Angular development, GitHub Copilot and developer workflows, and process automation. The service pages explain practical work, scope and collaboration. The site must not present a packaged RFQ product or imply that visual UX/UI design is offered.

Angular work covers applications, internal tools, component libraries and the technical implementation of existing design systems. Copilot work is described through concrete capabilities such as agent configuration, reusable skills, coordinated tasks and development automation. Claims must remain grounded in Hugo's actual experience.

The visual language is a light technical workspace. Keep precise typography, thin rules, structured rows and compact process labels. White, restrained blue and a small warm yellow accent echo the Canary Islands without using a large flag or emblem.

## Colour tokens

Use the shared tokens in `apps/landing/src/styles.css`, not one-off component colours.

- Backgrounds: `--bg` `#f7f8f5`, `--surface` `#ffffff`, `--surface-2` `#eef3f5`.
- Text: `--text` `#1d2b36`, `--text-secondary` `#4c5e6a`, `--text-muted` `#596c78`.
- Rules: `--border` `#c6d3dc`, `--border-muted` `#d7e1e6`.
- Blue: `--accent` and `--accent-bright` `#245b82`.
- Primary actions: `--accent-action` `#163a56`, hover `#0d2c43`, with `--on-accent` white text.
- Yellow accent: `--accent-warm` `#dcc678`, flat tint `--accent-warm-soft` `#f6f0db`.
- Use `--accent-warm-text` `#77591b` when coloured text is necessary. Light yellow is decorative and must not carry essential text.
- Error and success colours are reserved for real form or system states.

Use flat backgrounds. Avoid gradients, glass effects, neon colours, decorative glow and transparent dark surfaces. Rules can be subtle; focus indicators and meaningful control boundaries need sufficient contrast.

## Typography

- IBM Plex Sans is the reading and interface face.
- IBM Plex Mono is for short process labels, navigation metadata and technical terms.
- Headings use weight 700 and restrained negative tracking.
- Body copy is 16px on desktop and at least 15.5px on narrow screens, with a line height around 1.6.
- Long prose is limited to approximately 65 to 75 characters per line.
- Avoid a second display face, giant full-sentence headlines, clipping and forced single-line headings.

## Layout and spacing

The content width is 1120px, including responsive inline padding. Base spacing values are 4, 8, 12, 16, 20, 24, 32, 40, 52, 64, 80 and 112px.

Use one H1 and a clear lead. A hero can contain a process diagram or the existing portrait. Keep no more than two hero actions. Service descriptions should use ruled rows with a short title, explanation and a relevant link. Sequential work uses numbered ledger rows.

Comparisons can use two adjacent columns separated by a rule. Do not turn every section into a repeated card grid. Alternate white and off-white surfaces to separate longer sections.

Default radius is 10px and control radius is 8px. Prefer borders and spacing over elevation. Reserve the soft shadow for navigation overlays or a genuinely elevated surface.

## Identity and navigation

- Visible name: Hugo Martin.
- Header subtitle: Angular · Copilot · Automatisierung, or the English equivalent.
- Use the original M mark at `/hugo-martin-m.svg`: a white rounded M on navy with a cyan dot. Preserve this original mark. The former asset URLs remain aliases for compatibility.
- Header navigation covers Angular, GitHub Copilot, automation, about and contact.
- The primary header action starts a general project conversation.
- Language links use the current page's registered alternate. If a German-only page links to the English home, its accessible label must say so.
- No RFQ demo CTA or old product slogan in shared navigation.

## LinkedIn banners

The LinkedIn covers use a navy background, the clean M from the supplied `ChatGPT Image 15 jul 2026, 19_26_29.png` reference and subtle blue and yellow waves. Preserve the white M, its short right stem and separate cyan dot. This treatment is limited to the banner artwork; the website interface remains light.

Both PNG sources are 2172 × 724 pixels and are stored without resizing or pixel edits. Use a centred 4:1 crop for `linkedin-profile-banner.png` and a centred 6:1 crop for `linkedin-company-banner.png`. The `linkedin_banner.png` compatibility alias matches the company cover. Keep the left area clear for LinkedIn's portrait or company logo.

The exact banner text is `Hugo Martin`, `Angular · GitHub Copilot · Automatisierung` and `hugomenz.de`. Do not add RFQ claims, UX/UI services, credentials or a second wordmark. The auxiliary `/brand-assets.html` download page previews the intended crops and stays outside the navigation and sitemap with `noindex`.

## Components

- The generic service flow presents the sequence supplied by page content. It has no hardcoded implementation statuses or RFQ labels.
- Process ledgers use numbered rows and remain readable on mobile.
- Callouts use a small yellow rule and a flat pale tint.
- FAQ sections use native details and summary with visible keyboard focus.
- The profile section uses the existing photo and factual biography.
- Buttons are rectangular with clear labels and 44px minimum touch height.
- Section navigation is unavailable to keyboard and assistive technology while visually hidden.

## Accessibility and motion

Normal text must meet WCAG AA contrast against its intended background. A decorative yellow accent never substitutes for a text label. Focus indicators use a strong blue outline. All navigation is available by keyboard, and closing the mobile menu with Escape returns focus to its trigger.

Controls may use 140 to 220ms colour or state transitions. Content remains visible without scroll animation. Respect prefers-reduced-motion. No pulsing dots, marquees, parallax, bounce effects or image zoom on hover.

## Content boundaries

Do not invent customer results, savings, testimonials, certifications or production claims. Preserve official employment titles while keeping the freelance offer precise. A component library or implementation of an existing design system does not imply an offer of visual design.

Avoid exposing internal implementation states, archived research, old RFQ terminology or debugging labels in the customer journey.
