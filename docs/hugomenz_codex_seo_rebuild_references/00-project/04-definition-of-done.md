# Definition of Done

## Build y CI

- `cd apps/landing && npm ci` funciona.
- `npm test` termina sin fallos.
- `npm run build` termina sin fallos.
- El artefacto desplegable sigue en `apps/landing/dist/landing/browser`.
- El workflow de GitHub Pages no necesita un servidor Node en producción.

## HTML prerenderizado

Para cada ruta P0, el archivo construido correspondiente debe incluir antes de ejecutar JavaScript:

- `<html lang="...">` correcto.
- `<title>` único.
- meta description única.
- canonical absoluto correcto.
- H1 visible y específico.
- contenido principal de la página.
- navegación y enlaces internos.
- JSON-LD válido cuando corresponda.

La home construida no puede quedar reducida a `<app-root></app-root>`.

## Reglas de contenido

- Un único H1 por página.
- No aparecen testimonios, logos de clientes, métricas de resultados o casos inventados.
- No se afirma que el sistema genere precios de forma autónoma.
- `n8n` no aparece en el H1 de la home ni como propuesta central.
- Se mantiene explícita la revisión humana.
- Se distingue IA interpretativa de reglas deterministas.
- Se usa `Ich` y `Sie`, no una falsa voz de gran agencia.
- No se publican precios no confirmados.

## Navegación e interlinking

- Ninguna página P0 queda huérfana.
- La home enlaza a la solución principal, el workshop, el copiloto, las tres verticales, Stuttgart, perfil y contacto.
- Las verticales enlazan a la solución y al workshop.
- Las páginas de servicio enlazan entre sí y a contacto.
- Breadcrumbs visibles en páginas interiores.
- El selector de idioma usa URLs reales.

## SEO internacional

- `/` es alemán y canonicaliza a `https://hugomenz.de/`.
- `/en/` es inglés y canonicaliza a `https://hugomenz.de/en/`.
- Ambas páginas se referencian recíprocamente con `de-DE`, `en` y `x-default`.
- No se cambia el idioma de `/` mediante `localStorage`.
- No se redirige automáticamente por idioma del navegador.

## SEO local

- `/standorte/stuttgart/` contiene contenido local real y único.
- No afirma disponer de oficina abierta al público si no existe.
- No se crean páginas clonadas para otras ciudades.

## Accesibilidad

- Skip link funcional.
- Orden de headings coherente.
- Navegación por teclado.
- Estados focus visibles.
- Menú móvil con nombre accesible y estado correcto.
- Contraste suficiente.
- No hay animaciones obligatorias con `prefers-reduced-motion`.
- Formularios con label, mensajes de error y estados de envío accesibles.

## Rendimiento y estabilidad

- No añadir una librería UI pesada sin necesidad.
- Evitar imágenes decorativas grandes.
- Mantener el bundle dentro de los presupuestos actuales o justificar cualquier cambio.
- No romper el formulario ni sus controles de protección.
- No introducir dependencias que requieran un runtime de servidor en GitHub Pages.

## Revisión manual mínima

Comprobar en viewport móvil y escritorio:

- home alemana;
- home inglesa;
- una solución;
- un servicio;
- una vertical;
- Stuttgart;
- contacto;
- página histórica de n8n.
