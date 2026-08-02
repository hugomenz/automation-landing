# Design system — hugomenz.de

## Position and visual idea

The site presents one specialist practice: controlled RFQ automation for machinery manufacturers. Secondary pages may demonstrate the same method in adjacent industrial processes, but must not turn the homepage into a catalogue of unrelated services.

The visual language is a dark technical work surface: precise typography, restrained rules and small source-like labels. Process diagrams and review states are functional evidence, not decoration.

## Allowed colours

Use the CSS tokens in `apps/landing/src/styles.css`; do not add one-off literals inside components.

- Backgrounds: `--bg` `#0d1117`, `--surface` `#161b22`, `--surface-2` `#1c2230`, `--elevated` `#1c2128`.
- Rules: `--border` `#30363d`, `--border-muted` `#21262d`.
- Text: `--text` `#f0f6fc`, `--text-secondary` `#8b949e`, `--text-muted` `#7d8590`.
- Primary blue: `--accent` `#1677b8`, `--accent-bright` `#72b9ea`, action states from `--accent-action` and `--accent-action-hover`.
- Review yellow: `--accent-warm` `#f2c94c`; use only for attention, review or a small identity cue.
- Success and error tokens are reserved for real state, never decoration.

Do not introduce purple/cyan startup palettes, gradient text or decorative glow. Existing low-opacity background tints may create depth, but may not carry meaning or reduce contrast.

## Typography

- `IBM Plex Sans` is the reading and interface face.
- `IBM Plex Mono` is for file labels, statuses, rule identifiers and compact process metadata.
- Headings use the sans family at weight 700 with restrained negative tracking.
- Body copy stays at 16px or larger on desktop and 15.5px or larger on narrow screens, with a line height around 1.6.
- Long copy is limited to roughly 65–75 characters per line.
- Do not add Inter, a second display face, italic-serif heroes or oversized full-sentence display type.

## Spacing scale

Base values: `4, 8, 12, 16, 20, 24, 32, 40, 52, 64, 80, 112px`.

Use tight spacing inside a semantic group and a visibly larger jump between sections. Do not repeat one spacing value throughout a page.

## Radii and elevation

- Default surface radius: `--radius` (`14px`).
- Controls and compact elements: `--radius-sm` (`8px`).
- Full pills are limited to short status or metadata tokens.
- Prefer a border or spacing hierarchy. Use `--shadow-soft` only for a genuinely elevated surface and never pair every hairline border with a wide shadow.

## Hierarchy and composition

1. The RFQ homepage and RFQ demo remain the primary conversion path.
2. A secondary application must be reached from a secondary navigation group and link back to the RFQ method.
3. Use one clear H1, one lead and at most two hero actions.
4. Alternate dense explanatory passages with a process-specific structure: flow, ledger, comparison or source list.
5. Do not repeat identical three-card sections. Prefer ruled rows, definition lists and direct prose.

## Components

- Header and footer: preserve the M mark, brand title, RFQ subtitle and RFQ demo CTA.
- Flow diagram: use for a real sequence with explicit inputs, checks, human review and output.
- Process ledger: numbered ruled rows for sequential operational work; avoid card styling.
- Comparison: one paired surface is acceptable for “system / human” or “implemented / not implemented”.
- Callout: one left rule and a flat tint for an important boundary.
- Buttons: rectangular, 8px radius, no oversized icons or decorative motion.

## Motion

- Motion must communicate navigation, focus, expansion or newly revealed content.
- Keep transitions between 140–220ms for controls.
- Scroll reveal is progressive enhancement only; content must remain visible when scripts or motion are unavailable.
- Respect `prefers-reduced-motion`.
- No pulsing status dots, marquees, bounce easing, parallax or image scaling on hover.

## Prohibited patterns

- Repeated card grids or cards nested inside cards.
- Decorative gradients, glassmorphism, neon glows or generic floating orbs.
- Giant icons, icon tiles above every heading or badge-heavy layouts.
- Repeated eyebrow + oversized headline patterns without information value.
- Redundant copy, invented outcomes, unsupported savings, customer logos or production claims.
- Claims that an ERP, CRM or customer system is connected when only an export draft exists.
- Autonomous-decision language or copy that frames automation as replacing employees.

