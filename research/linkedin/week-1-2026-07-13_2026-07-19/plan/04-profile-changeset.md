---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
approved: false
---

# 04 — Profile changeset (revenue version, not applied)

**Verified current state:** 2026-07-12 (read-only). **Do not apply** until approved through `RUN-01-POSITIONING`.
Goal: make the profile continue the exact offer on hugomenz.de, so a technical-sales or project-engineering visitor understands within seconds that Hugo works on incomplete RFQs, not generic automation.

Rules honored: first person, real experience, no invented clients, no invented savings, no n8n value proposition, one clear next step.

## 1. Headline
- **Now:** `AI Automation Engineer | Prozessautomatisierung für KMU | Ich automatisiere Leads, CRM, E-Mail & interne Abläufe mit n8n, Make, APIs und KI`
- **Proposed:** `Technische Anfragen im Maschinenbau klären | unvollständige RFQs in prüfbare Angebotsgrundlagen überführen | RFQ Readiness Workshop für Vertrieb & Engineering | Stuttgart`
- **Why:** states the problem, the deliverable and the first commercial offer in one line.

## 2. Info — complete replacement text
- **Now:** `Ich helfe Unternehmen dabei, manuelle Geschäftsprozesse mit Automatisierung, KI-gestützten Workflows, n8n, Make, APIs und Low-Code-Lösungen zu verbessern…`
- **Proposed complete value:**

  > Ich helfe Maschinenbauern, unvollständige technische Anfragen aus E-Mails, Lastenheften, Fotos und PDFs in eine prüfbare Anforderungsakte mit offenen Punkten, Widersprüchen, Annahmen und einer regelbasierten Budgetbasis zu überführen, bevor Vertrieb und Engineering Zeit in die falschen Fälle investieren.
  >
  > Kein autonomes Angebot. Keine erfundenen Preise. Keine Kalkulation ohne freigegebene Quelle.
  >
  > Hintergrund: rund acht Jahre Sondermaschinenbau, Automatisierung, Konstruktion, Einkauf, Lieferanten- und Projektabwicklung plus drei Jahre Web, APIs und Automatisierung.
  >
  > Wenn bei Ihnen ähnliche technische Anfragen für einen Maschinentyp oder klar abgegrenzten Angebotsbereich wiederkehren, prüfe ich im RFQ Readiness Workshop zuerst Prozess, Volumen, Daten, Regeln und Grenzen. Ziel ist eine klare Go/No-Go-Entscheidung, nicht eine allgemeine Demo. Mehr auf hugomenz.de.

## 3. CTA at the end of Info
- **Proposed:** use the last paragraph above exactly as written.
- **Why:** pushes toward workshop qualification, not broad consulting.

## 4. Featured links
- **Required first item:** `https://www.hugomenz.de/`
- **Title:** `Angebotsprozesse im Maschinenbau digitalisieren`
- **Description:** `Von unvollständigen Anfragen zur prüfbaren Angebotsgrundlage. Technische Anfragequalifizierung für Maschinenbauer.`
- **Optional second item:** `https://www.hugomenz.de/leistungen/rfq-readiness-workshop/`
- **Optional title:** `RFQ Readiness Workshop`
- **Optional description:** `Prüfen, ob ein klar abgegrenzter Anwendungsfall genug Wiederholbarkeit, Daten und Regeln für einen sinnvollen Pilot hat.`

## 5. Website link
- **Target:** `https://www.hugomenz.de/`
- **Link text:** `hugomenz.de`
- **Action:** verify that the profile website button opens exactly this URL.

## 6. Sensitive item not automated
- **Display name suggestion only:** `Hugo Martin Menz`
- **Reason:** aligns personal profile and site branding.
- **Rule:** leave this to Hugo; not part of the automated changeset.

## Apply order inside RUN-01
1. Add the homepage Featured link as the first item.
2. Replace the headline.
3. Replace the Info text.
4. Verify the website button.

Every step is an `update_own_profile` action with post-action verification. Nothing is applied today.
