# Routing, sitemap, robots y URLs

## URLs canónicas P0

```text
https://hugomenz.de/
https://hugomenz.de/loesungen/technische-anfragequalifizierung/
https://hugomenz.de/leistungen/rfq-readiness-workshop/
https://hugomenz.de/leistungen/interner-rfq-copilot/
https://hugomenz.de/branchen/end-of-line/
https://hugomenz.de/branchen/verpackungsmaschinen/
https://hugomenz.de/branchen/palettieranlagen/
https://hugomenz.de/standorte/stuttgart/
https://hugomenz.de/ueber-hugo-menz/
https://hugomenz.de/kontakt/
https://hugomenz.de/n8n-beratung-stuttgart/
https://hugomenz.de/en/
```

## Sitemap

Actualizar `apps/landing/public/sitemap.xml` o generarlo desde la configuración de páginas. Solo incluir:

- URLs 200;
- indexables;
- autocanónicas;
- con contenido completo.

No incluir futuras páginas de Wissen vacías.

Se puede añadir `lastmod` con la fecha real de modificación del release, sin inventar una frecuencia de cambio.

## Robots

Mantener:

```text
User-agent: *
Allow: /
Sitemap: https://hugomenz.de/sitemap.xml
```

No bloquear assets necesarios para renderizado.

## Slashes

Canonical y sitemap usan slash final. Asegurar que el output estático produce `route/index.html`. Evitar dos versiones indexables de la misma URL.

GitHub Pages no ofrece reglas de 301 complejas. No introducir migraciones innecesarias. La URL existente de n8n se conserva.

## Página 404

Crear una página 404 útil y no indexable si la configuración de GitHub Pages lo permite. Debe enlazar a home, solución y contacto. No añadirla al sitemap.

## Enlaces

Todos los enlaces internos deben resolver correctamente al navegar directamente y desde una URL profunda. No usar rutas relativas ambiguas como `./` dentro de componentes compartidos; preferir `routerLink` absoluto.
