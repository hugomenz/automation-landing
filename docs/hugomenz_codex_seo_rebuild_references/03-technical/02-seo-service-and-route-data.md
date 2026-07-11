# Servicio SEO y datos por ruta

## Problema actual

`LanguageService` mezcla idioma, metadata, canonical y JSON-LD. El canonical queda ligado a la ruta alemana y las actualizaciones suceden principalmente en cliente.

## Modelo recomendado

Definir una configuración por página:

```ts
export interface PageSeo {
  title: string;
  description: string;
  canonicalPath: string;
  lang: 'de' | 'en';
  locale: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  imageAlt: string;
  alternates?: Array<{ hreflang: string; path: string }>;
  schema?: JsonLdDefinition[];
}
```

Asociar la configuración a cada ruta mediante `data` o a un registro por `pageKey`.

## SeoService

Responsabilidades:

- actualizar `document.documentElement.lang`;
- establecer title;
- description y robots;
- Open Graph y Twitter;
- canonical;
- alternates `hreflang`;
- JSON-LD por página;
- eliminar tags de la ruta anterior antes de insertar nuevos;
- funcionar durante prerender y en navegación cliente.

Usar `DOCUMENT`, `Meta` y `Title` por DI. No usar globals del navegador.

## Canonical

Construcción única y predecible:

```ts
const SITE_URL = 'https://hugomenz.de';
const canonical = new URL(page.canonicalPath, `${SITE_URL}/`).toString();
```

Cada página usa su propio canonical. No derivarlo siempre de la home alemana.

## Hreflang P0

Solo home alemana e inglesa:

```ts
alternates: [
  { hreflang: 'de-DE', path: '/' },
  { hreflang: 'en', path: '/en/' },
  { hreflang: 'x-default', path: '/' },
]
```

Las demás páginas no deben emitir alternates ingleses inexistentes.

## JSON-LD

Generar objetos tipados o funciones puras. No insertar strings concatenados a mano si puede evitarse.

IDs sugeridos:

- `https://hugomenz.de/#person`
- `https://hugomenz.de/#professional-service`
- `https://hugomenz.de/<route>/#service`
- `https://hugomenz.de/<route>/#breadcrumb`

## Route title y H1

La metadata y el contenido deben proceder de la misma fuente de configuración para reducir divergencias. Añadir tests que comparen `page.seo.title`, `page.hero.h1` y la URL.
