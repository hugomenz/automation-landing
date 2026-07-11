# Alcance por fases

## P0: rediseño que debe implementar Codex ahora

### Arquitectura y renderizado

- Añadir Angular Router.
- Añadir prerenderizado/SSG compatible con Angular y GitHub Pages.
- Configurar `outputMode: static`.
- Generar HTML completo para todas las rutas P0.
- Conservar el output esperado por `.github/workflows/landing-pages.yml`.

### Rutas alemanas

- `/`
- `/loesungen/technische-anfragequalifizierung/`
- `/leistungen/rfq-readiness-workshop/`
- `/leistungen/interner-rfq-copilot/`
- `/branchen/end-of-line/`
- `/branchen/verpackungsmaschinen/`
- `/branchen/palettieranlagen/`
- `/standorte/stuttgart/`
- `/ueber-hugo-menz/`
- `/kontakt/`
- `/n8n-beratung-stuttgart/` se conserva.

### Ruta inglesa

- `/en/`

La home inglesa debe ser una ruta real y prerenderizada. No crear traducciones vacías o parciales para el resto de páginas. Solo emitir `hreflang` entre páginas que realmente tengan una traducción equivalente.

### Contenido y navegación

- Sustituir el copy genérico de la home por el copy exacto de `02-content/01-home-de.md`.
- Crear las nuevas páginas a partir de los briefs de `02-content/`.
- Header con enlaces reales, no solo anclas.
- Footer con mapa reducido, contacto, LinkedIn, páginas legales existentes y selector DE/EN mediante enlaces.
- CTA principal: comprobación de preparación para un piloto.
- CTA secundario: explicación del copiloto interno.

### SEO técnico

- Title y meta description únicos.
- Un H1 por URL.
- Canonical autocanónico.
- `lang` correcto.
- `hreflang` solo para `/` y `/en/` en P0.
- Open Graph y Twitter por página.
- Breadcrumbs visibles y `BreadcrumbList`.
- `Person`, `ProfessionalService` y `Service` cuando correspondan.
- Sitemap actualizado con todas las rutas indexables.
- Robots actualizado si es necesario.
- Enlaces internos crawlables con `<a href>` o `routerLink` que genere anclas reales.

### QA

- Tests unitarios y de guardrails actualizados.
- Tests de metadatos y mapa de rutas.
- Verificación del HTML construido.
- `npm test` y `npm run build` verdes.

## P1: preparar la arquitectura, no implementar contenido vacío

- Traducciones inglesas completas de páginas de solución, servicio y verticales.
- Hub `/wissen/`.
- Artículos:
  - `/wissen/angebotsprozess-maschinenbau-digitalisieren/`
  - `/wissen/rfq-automatisierung/`
  - `/wissen/cpq-vs-rfq-copilot/`
  - `/wissen/daten-fuer-angebotsautomatisierung/`
  - `/wissen/roi-angebotsprozess-maschinenbau/`
- Calculadora ROI.
- Plantilla descargable de expediente técnico.
- Demo con datos sintéticos claramente etiquetada.

No generar estas URLs hasta que tengan contenido original suficiente.

## Fuera de alcance

- Login, panel o base de datos.
- Carga real de documentación de clientes.
- Motor de reglas o presupuesto.
- Chatbot.
- Portal de cliente.
- Integración CRM.
- Automatización de ofertas.
- Analytics o cookies nuevas.
- Páginas de ciudad en serie.
- Reseñas o rating schema.
- Traducciones automáticas sin revisión.
