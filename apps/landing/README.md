# Landing app

Landing Angular para la oferta de workflow automation.

## Qué hace

- Detecta idioma por defecto:
  - alemán si el navegador parece `de-DE` o la zona horaria es `Europe/Berlin`.
  - inglés para el resto.
- Permite cambiar idioma manualmente con el selector `DE / EN`.
- Divide la página en componentes pequeños para que cada archivo tenga una
  responsabilidad clara.
- Usa animaciones CSS sobrias para entrada, scroll, hover, workflow y CTA,
  coordinadas desde componentes Angular pequeños.

## Previsualización local

```bash
npm install
npm start
```

Después abre `http://127.0.0.1:4200`.

## Build

```bash
npm run build
```

## Antes de publicar

- Sustituye `hello@your-domain.de` por el email real en
  `src/app/content.ts`.
- Cambia las iniciales `WA` si quieres una marca personal.
- Mantén los certificados como `Planned` hasta terminarlos.
- Publica el contenido generado en `dist/landing/browser`.
