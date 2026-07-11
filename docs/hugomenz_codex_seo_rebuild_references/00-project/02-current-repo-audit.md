# Auditoría del repositorio actual

## Snapshot revisado

Commit de `main`: `893658594c9e571daeaf6fbfee6b10a6f2c2501a`.

## Arquitectura actual

- `apps/landing/package.json`
  - Angular `21.2.17`.
  - Scripts: `start`, `build`, `watch`, `test`, `test:watch`.
  - Vitest.
- `apps/landing/angular.json`
  - Builder `@angular-devkit/build-angular:application`.
  - Output `dist/landing`.
  - Assets copiados desde `public/`.
- `apps/landing/src/main.ts`
  - `bootstrapApplication(AppComponent, appConfig)`.
- `apps/landing/src/app/app.config.ts`
  - Solo `provideZonelessChangeDetection()`.
  - No existe router.
- `apps/landing/src/app/app.component.html`
  - Una única landing compuesta por secciones.
- `apps/landing/src/app/content.ts`
  - Todo el contenido alemán e inglés vive en un único objeto.
  - El inglés sustituye el contenido en la misma URL.
- `apps/landing/src/app/language.service.ts`
  - Usa `localStorage` para el idioma.
  - Actualiza title, meta y JSON-LD en cliente.
  - El canonical se construye siempre con la ruta alemana.
- `apps/landing/src/index.html`
  - El body inicial solo contiene `<app-root></app-root>`.
  - El contenido principal depende de JavaScript.
- `apps/landing/public/n8n-beratung-stuttgart/index.html`
  - Página HTML estática y rastreable.
- `apps/landing/public/sitemap.xml`
  - Actualmente contiene la home y la página local de n8n.
- `.github/workflows/landing-pages.yml`
  - Ejecuta `npm ci`, tests y build.
  - Publica `apps/landing/dist/landing/browser` en GitHub Pages.

## Diseño actual

- Paleta oscura tipo GitHub.
- IBM Plex Sans e IBM Plex Mono desde Google Fonts.
- Verde como acento.
- Componentes standalone, inputs basados en signals y animaciones de aparición.
- Diagrama visual de workflow reutilizable.

El rediseño puede conservar este lenguaje visual. No hace falta convertir la web en una plantilla corporativa genérica. Sí debe cambiar el mensaje, la arquitectura, la navegación y la representación del flujo.

## Problemas SEO y de arquitectura

1. **Posicionamiento demasiado amplio.** El H1 actual habla de procesos que consumen tiempo y puede pertenecer a cualquier agencia de automatización.
2. **Una sola URL para dos idiomas.** Google no recibe una variante inglesa estable e indexable.
3. **Canonical incorrecto para el inglés.** El cambio de idioma mantiene el canonical alemán.
4. **Contenido inicial vacío.** La home no entrega el H1 ni el cuerpo principal en el HTML inicial.
5. **Sin rutas propietarias para intenciones.** Solución, oferta, verticales y local compiten dentro de una sola landing.
6. **`n8n` ocupa un papel demasiado visible.** Debe quedar como tecnología secundaria.
7. **El schema describe servicios genéricos.** Hay que actualizar `knowsAbout`, catálogo y job title a la propuesta real.
8. **La navegación usa anclas de sección.** La nueva arquitectura necesita enlaces HTML entre páginas.

## Activos que conviene conservar

- Sistema de diseño y variables CSS.
- Componentes accesibles de botones, header y footer.
- Formulario de contacto, validaciones, rate limiting y feedback.
- Patrón de tests con Vitest.
- GitHub Actions y GitHub Pages.
- Página `/n8n-beratung-stuttgart/`, reubicada conceptualmente como página técnica secundaria.
- Retrato y enlaces sociales existentes, siempre que sean correctos.
- Principios actuales de zoneless change detection y signal inputs.

## Consecuencia técnica

La solución preferida es introducir Angular Router y prerenderizado estático de todas las rutas públicas. GitHub Pages debe seguir recibiendo HTML estático en `dist/landing/browser`.

No se debe multiplicar manualmente el gran archivo HTML de la página de n8n para todas las rutas. El contenido debe vivir en componentes y configuraciones reutilizables, con generación estática en build.
