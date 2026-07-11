# Hugo Menz Automation

Repositorio de validación y web pública de Hugo Menz. La propuesta principal de
`hugomenz.de` es la digitalización del proceso técnico de oferta para fabricantes
de maquinaria: cualificación interna de RFQ para una sola familia de máquinas,
con fuentes trazables, reglas aprobadas y revisión humana.

La solución no se presenta como un wizard público, un CPQ completo ni un sistema
autónomo de pricing o aprobación técnica. n8n, Make, APIs y webhooks permanecen
como tecnologías de implementación secundarias.

## Estructura

| Ruta | Uso |
|---|---|
| `apps/landing/` | Sitio Angular 21 prerenderizado y publicado en GitHub Pages |
| `brain/` | Investigación y validación histórica de mercado |
| `docs/` | Referencias, decisiones, contenido y handoff del rebuild SEO |

## Arquitectura de la web

- Angular 21.2.17 con componentes standalone, signals, `OnPush` y change
  detection zoneless.
- Angular Router con rutas explícitas.
- Prerender estático mediante `@angular/ssr` y `outputMode: "static"`.
- Registro tipado único para contenido, metadatos, canonical, hreflang,
  breadcrumbs y schema.
- Formulario existente con validaciones, feedback y rate limiting conservados.
- Sin servidor requerido en producción.

El artefacto publicable permanece en:

```text
apps/landing/dist/landing/browser
```

## Rutas públicas

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
- `/n8n-beratung-stuttgart/`
- `/en/`

## Desarrollo y validación

```bash
cd apps/landing
npm ci
npm test
npm run build
npm run verify:prerender
```

`verify:prerender` inspecciona el HTML publicado de cada ruta y comprueba title,
canonical, H1 y contenido principal. Los workflows de GitHub Actions ejecutan la
misma validación antes de publicar `dist/landing/browser` en GitHub Pages.
