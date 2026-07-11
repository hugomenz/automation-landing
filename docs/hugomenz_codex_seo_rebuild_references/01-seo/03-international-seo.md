# SEO internacional

## Decisión P0

- Alemán en `https://hugomenz.de/`.
- Inglés internacional en `https://hugomenz.de/en/`.
- No mover ahora el alemán a `/de/`.
- No usar un selector que reemplace el contenido en la misma URL.
- No redirigir automáticamente según el navegador.

## Hreflang de la home

En `/`:

```html
<link rel="alternate" hreflang="de-DE" href="https://hugomenz.de/" />
<link rel="alternate" hreflang="en" href="https://hugomenz.de/en/" />
<link rel="alternate" hreflang="x-default" href="https://hugomenz.de/" />
```

En `/en/`, los mismos enlaces de forma recíproca.

## Canonical

- `/` canonicaliza únicamente a `https://hugomenz.de/`.
- `/en/` canonicaliza únicamente a `https://hugomenz.de/en/`.
- No canonicalizar el inglés hacia alemán.
- No emitir hreflang para páginas que todavía no tengan traducción equivalente.

## Locale y lenguaje

- Alemán: `<html lang="de">`, Open Graph `de_DE`.
- Inglés: `<html lang="en">`, Open Graph `en` o `en_GB` solo si el copy está deliberadamente adaptado a Reino Unido. Para P0 usar `en` como lenguaje y no afirmar orientación nacional específica.

## Selector de idioma

Debe ser un enlace real:

- En alemán: `EN` → `/en/`.
- En inglés: `DE` → `/`.

No conservar el idioma en `localStorage` como mecanismo principal. Se puede recordar una preferencia solo como mejora no indexable, sin modificar canonical ni redirigir automáticamente.

## Futuras traducciones

Cuando se publique una traducción inglesa completa, usar rutas equivalentes, por ejemplo:

```text
/leistungen/rfq-readiness-workshop/
/en/services/rfq-readiness-workshop/
```

Cada pareja debe:

- ser autocanónica;
- enlazarse recíprocamente;
- contener contenido equivalente, no una página parcial;
- aparecer en sitemap;
- usar enlaces visibles de idioma.

## Austria y Suiza

No crear `/at/` ni `/ch/` con contenido duplicado. Solo tendría sentido con diferencias reales de servicio, moneda, lenguaje comercial, condiciones o presencia operativa.
