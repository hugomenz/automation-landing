# Datos estructurados, metadata y entidades

## Entidad principal

Usar una identidad coherente:

- Persona: `Hugo Martin Menz`
- Marca comercial: `Hugo Menz Automation`
- URL: `https://hugomenz.de/`
- Perfil público verificado: LinkedIn existente

No añadir perfiles sociales vacíos.

## Schema por tipo de página

| Página | Schema recomendado |
|---|---|
| Home | `Person`, `ProfessionalService`, `WebSite`, `BreadcrumbList` si se usa |
| Solución | `Service`, `BreadcrumbList` |
| Workshop | `Service`, `BreadcrumbList` |
| Copiloto | `Service`, `BreadcrumbList` |
| Verticales | `Service`, `BreadcrumbList` |
| Stuttgart | `ProfessionalService` o `Service` con `areaServed`, `BreadcrumbList` |
| Perfil | `Person`, `BreadcrumbList` |
| Contacto | `ContactPage`, `BreadcrumbList` |
| Inglés | Equivalentes con textos ingleses |

## Reglas

- El schema debe describir contenido visible.
- No usar `Review` o `AggregateRating`.
- No inventar dirección, teléfono, precio o horario.
- No usar `LocalBusiness` con ubicación física si no se cumplen sus datos.
- `FAQPage` solo cuando las preguntas y respuestas sean visibles en la página. Su presencia no garantiza rich results.
- Cada JSON-LD debe usar URL y `@id` coherentes con el canonical de la ruta.

## Metadata obligatoria por ruta

- title único y descriptivo;
- meta description única;
- canonical absoluto;
- robots `index,follow` para páginas P0;
- Open Graph title, description, URL, image, image alt y locale;
- Twitter card;
- alternates de idioma solo cuando existan.

## Imagen social

P0 puede reutilizar `og-preview.png`, pero el texto alternativo y `og:site_name` deben actualizarse al nuevo posicionamiento. No debe seguir describiendo la web únicamente como `Prozessautomatisierung`.

## Job title y knowsAbout

Sustituir `AI Automation Engineer` como etiqueta principal por una formulación factual y menos genérica, por ejemplo:

- `Maschinenbauingenieur und Webentwickler`
- `Berater für technische Angebotsprozesse`

`knowsAbout` puede incluir:

- Angebotsprozesse im Maschinenbau
- technische Anfragequalifizierung
- RFQ-Prozesse
- Vertriebsengineering
- Sondermaschinenbau
- Webentwicklung
- API-Integrationen
- n8n
- Make
- Human-in-the-loop-Automatisierung
