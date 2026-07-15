---
campaign_version: 1.1
strategy_frozen: true
frozen_at: 2026-07-12T21:22:05+02:00
audit_status: READY
approved: false
---

# 07 — Comment reserves (1 per RUN)

Backups. Use a reserve **only** when that RUN's primary post has disappeared, was deleted, or
changed context (`SKIPPED_CONTEXT_CHANGED`). Never use a reserve to exceed the daily comment cap
(max 2 submitted/day) or the per-company cap (max 2/company/14 days). Same style rules as primaries.
All `comment_ready: true`, `approved: false`. Re-open and re-read the post before use.

| slot | for RUN | activity URL | author | company | role/headline | date seen | max use date | type | exact German comment |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RSV-01 | RUN-01 | https://www.linkedin.com/feed/update/urn:li:activity:7481954251955580928/ | Dr.-Ing. Andreas Klippe | — | Technischer Vertrieb / erklärungsbedürftige Produkte | 2026-07-12 (11 Std.) | 2026-07-20 | observation | „Rabattschlachten sind oft ein Symptom dafür, dass der technische Mehrwert im Angebot nicht sichtbar wird. Erkennt der Kunde die Unterschiede nicht, bleibt ihm der Preis als einziges Kriterium. Margendisziplin beginnt insofern in der Angebotsstruktur, nicht erst in der Verhandlung." |
| RSV-02 | RUN-02 | https://www.linkedin.com/feed/update/urn:li:activity:7477277195418300416/ | Johannes Maurer | ENABLE PROGRESS | Systems Engineering / Functional Safety / CRA | 2026-07-12 (1 Woche) | 2026-07-22 | observation | „Das Scoping-Problem ähnelt der Anforderungsklärung: Man muss früh festlegen, wo das Produkt aufhört und die Umgebung beginnt. Die digitalen Elemente machen diese Grenze nur sichtbarer, weil Schnittstellen und Updates plötzlich dokumentiert werden müssen." |
| RSV-03 | RUN-03 | https://www.linkedin.com/feed/update/urn:li:activity:7478054703453605891/ | Andreas Dittrich | adivision GmbH | Maschinenoptimierung / Sondermaschinen / Verpackungsmaschinen | 2026-07-12 (1 Woche) | 2026-07-24 | question | „Woran machen Sie in der Praxis fest, ob dieser feine Unterschied wirklich da ist, bevor der Auftrag läuft? Bei erklärungsbedürftigen Anlagen zeigt sich Detailtiefe meist erst in der ersten Anforderungsklärung, lange bevor Technik oder Preis vergleichbar werden." |
| RSV-04 | RUN-04 | https://www.linkedin.com/feed/update/urn:li:activity:7482068107084247041/ | juergen grewe | — | Anlagenplanung / CAD → Digitaler Zwilling | 2026-07-12 (4 Std.) | 2026-07-28 | question | „Dass in Navisworks die Metadaten erhalten bleiben und nicht nur die Geometrie, ist der entscheidende Punkt. Wie halten Sie diese Properties über spätere Konstruktionsänderungen konsistent, wird das Koordinationsmodell regelmäßig neu zusammengeführt?" |
| RSV-05 | RUN-05 | https://www.linkedin.com/feed/update/urn:li:activity:7481573918198231040/ | Sebastian Halbritter | Cluster Mobility & Logistics | Innovation / Cluster (Besuch Sonplas) | 2026-07-12 (1 Tag) | 2026-07-28 | observation | „Sonplas ist ein gutes Beispiel dafür, wie stark solche Anlagen inzwischen auf einzelne Prüf- und Befüllprozesse zugeschnitten sind. Der Wert solcher Vor-Ort-Formate liegt meist darin, wie offen die Betreiber über Anforderungen sprechen, die sich erst im Betrieb gezeigt haben." |
| RSV-06 | RUN-06 | https://www.linkedin.com/feed/update/urn:li:activity:7481638839971770368/ | Jascha Rohmann | Synatics | CEO / Robotics & Automation | 2026-07-12 (1 Tag) | 2026-07-30 | question | „45 gebaute Anlagen in 15 Jahren ohne Fremdkapital sind ein ungewöhnlich langer Beobachtungszeitraum. Mich würde interessieren, welche Teile der Auftragsabwicklung dabei wirklich wiederholbar wurden und welche weiterhin projektspezifisch bleiben." |
| RSV-07 | RUN-07 | https://www.linkedin.com/feed/update/urn:li:activity:7477798402768949248/ | Christian Sojka | United Automation Hub | CEO / Full-Service für Maschinenbauer | 2026-07-12 (1 Woche) | 2026-07-30 | observation | „Sichtbarkeit ohne klar umrissenes Angebot bringt vor allem mehr unqualifizierte Anfragen. Im Maschinenbau entscheidet weniger der Kanal als die Frage, ob ein Interessent in den ersten zwei Sätzen erkennt, wofür genau Sie der richtige Partner sind. Daran hakt es öfter als an der Reichweite." |

## Notes
- RSV-01, RSV-02, RSV-03, RSV-07 are consulting/software authors — acceptable **as reserves**, but if
  a reserve replaces a primary, keep the campaign's overall software/CPQ/consulting share ≤ 20 %.
- RSV-06 (Rohmann) is a partner/investor-search post: the reserve comment deliberately addresses the
  *operational* point (repeatable delivery), never the fundraising. Use only if context still fits.
- Two backlog candidates without a captured activity id (Thomas Meyer-Dethlefs, Dimitri Kapetzke) are
  in `datos/07-comment-candidate-research.csv`; re-fetch their canonical id before any use.
