# Mapa de archivos esperado

Codex puede adaptar nombres, pero la arquitectura final debería resultar aproximadamente así:

```text
apps/landing/
├── angular.json
├── package.json
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── CNAME
│   └── ...assets
├── scripts/
│   └── verify-prerender.mjs
└── src/
    ├── index.html
    ├── main.ts
    ├── main.server.ts
    ├── styles.css
    └── app/
        ├── app.component.ts
        ├── app.component.html
        ├── app.config.ts
        ├── app.config.server.ts
        ├── app.routes.ts
        ├── app.routes.server.ts
        ├── content/
        │   ├── page.types.ts
        │   ├── page.registry.ts
        │   ├── de/
        │   └── en/
        ├── core/
        │   └── seo.service.ts
        ├── layout/
        │   ├── site-header/
        │   ├── breadcrumbs/
        │   └── site-footer/
        ├── shared/
        │   ├── page-hero/
        │   ├── feature-grid/
        │   ├── process-steps/
        │   ├── faq-list/
        │   └── final-cta/
        └── pages/
            ├── home/
            ├── solution/
            ├── service/
            ├── industry/
            ├── location/
            ├── about/
            ├── contact/
            └── not-found/
```

## Archivos actuales a refactorizar

- `src/app/content.ts`: dividir por páginas e idiomas.
- `src/app/language.service.ts`: sustituir por routing + SEO service.
- `src/app/app.component.html`: convertir en shell con `router-outlet`.
- `src/app/app.config.ts`: añadir router y hydration según la configuración SSR.
- `src/app/site.config.ts`: actualizar identidad, servicios, rutas, locale y schema.
- `src/index.html`: metadata base neutra; la metadata final debe aparecer en prerender.
- `public/sitemap.xml`: actualizar o generar.
- `public/n8n-beratung-stuttgart/index.html`: mantener o migrar.
- tests de `content`, `site.config`, `seo-static-pages` y `landing-guardrails`.
- README del repo: actualizar la dirección comercial actual.

## No duplicar

- No crear una plantilla HTML completa distinta por cada página.
- No copiar cientos de líneas de CSS inline.
- No mantener dos sistemas de navegación inconexos.
- No conservar simultáneamente un language switcher por estado y otro por rutas.
