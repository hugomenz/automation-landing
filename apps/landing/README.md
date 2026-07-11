# Hugomenz landing

Aplicación Angular 21 prerenderizada para `hugomenz.de`. Presenta la oferta B2B de cualificación técnica de RFQ para fabricantes de maquinaria y conserva n8n como página tecnológica secundaria.

## Arquitectura

- Componentes standalone, signals, `OnPush` y change detection zoneless.
- Angular Router con URLs reales para alemán e inglés.
- Registro tipado de contenido y metadatos en `src/app/content/`.
- Prerender estático con `@angular/ssr` y `outputMode: "static"`.
- Salida publicable en `dist/landing/browser`; producción no necesita servidor.
- Formulario de contacto protegido con el endpoint y el payload existentes.

## Rutas prerenderizadas

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

## Desarrollo local

```bash
npm ci
npm start
```

La aplicación queda disponible en `http://localhost:4200`.

## Validación y build

```bash
npm test
npm run build
npm run verify:prerender
```

`verify:prerender` inspecciona el HTML generado de todas las rutas y comprueba idioma, title, canonical, H1, contenido principal y que `app-root` no esté vacío.

GitHub Actions publica únicamente `dist/landing/browser` en GitHub Pages.
