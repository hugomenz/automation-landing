# Implementación Angular y prerenderizado

## Objetivo

Convertir la landing CSR de una sola ruta en un sitio Angular prerenderizado y estático, compatible con GitHub Pages.

## Enfoque preferido

1. Añadir `@angular/router@21.2.17` y `@angular/ssr@21.2.17`, manteniendo la major actual.
2. Ejecutar o reproducir los cambios de `ng add @angular/ssr@21.2.17` de forma controlada.
3. Configurar `outputMode: "static"` en `angular.json`.
4. Definir rutas de cliente en `app.routes.ts`.
5. Definir rutas de servidor/prerender en `app.routes.server.ts` con `RenderMode.Prerender`.
6. Añadir `provideRouter(routes)` y la configuración de hydration/SSR que genere la CLI.
7. Mantener el output estático en `dist/landing/browser`.
8. Conservar el workflow de GitHub Pages o ajustarlo solo si el output real cambia de manera justificada.

Referencia oficial: `https://angular.dev/guide/ssr`.

## Rutas

Usar rutas explícitas y componentes de página. Evitar un catch-all que renderice contenido indexable incorrecto.

```ts
export const routes: Routes = [
  { path: '', component: HomePageComponent, data: { pageKey: 'home-de' } },
  { path: 'loesungen/technische-anfragequalifizierung', component: ... },
  { path: 'leistungen/rfq-readiness-workshop', component: ... },
  { path: 'leistungen/interner-rfq-copilot', component: ... },
  { path: 'branchen/end-of-line', component: ... },
  { path: 'branchen/verpackungsmaschinen', component: ... },
  { path: 'branchen/palettieranlagen', component: ... },
  { path: 'standorte/stuttgart', component: ... },
  { path: 'ueber-hugo-menz', component: ... },
  { path: 'kontakt', component: ... },
  { path: 'en', component: EnglishHomePageComponent, data: { pageKey: 'home-en' } },
  { path: '**', component: NotFoundPageComponent },
];
```

Angular no requiere slash final en la definición. Los canonical y sitemap sí deben usar slash final. Verificar que GitHub Pages genere carpetas con `index.html`.

## Componentes y reutilización

Crear un shell compartido:

- `SiteHeaderComponent`
- `BreadcrumbsComponent`
- `PageHeroComponent`
- `SectionHeaderComponent`
- `FeatureGridComponent`
- `BoundaryPanelComponent`
- `ProcessStepsComponent`
- `FaqListComponent`
- `FinalCtaComponent`
- `SiteFooterComponent`

Reutilizar y adaptar componentes actuales cuando resulte más simple. Mantener signal inputs y ChangeDetectionStrategy.OnPush.

## Datos de página

Separar contenido de la lógica. Una estructura sugerida:

```text
src/app/content/
├── de/
│   ├── home.ts
│   ├── solutions.ts
│   ├── services.ts
│   ├── industries.ts
│   └── pages.ts
├── en/
│   └── home.ts
└── page.types.ts
```

No mantener dos idiomas completos en el mismo objeto de una única página.

## Compatibilidad con prerender

- Evitar acceso directo a `window`, `localStorage`, `navigator` o `location` durante la renderización.
- Usar `DOCUMENT` mediante DI para metadata.
- Inicialización estrictamente de navegador con `afterNextRender` cuando sea necesaria.
- Mantener el HTML de servidor y cliente consistente para evitar errores de hydration.
- Revisar `ScrollRevealDirective`, timer de diagramas y formulario.
- El contenido principal no puede depender de efectos ejecutados únicamente en navegador.

## Idioma

Eliminar `LanguageService` como mecanismo que cambia el idioma de la misma URL. Puede sustituirse por:

- contenido determinado por la ruta;
- un enlace de idioma real;
- un servicio de página que derive locale y metadata de route data.

No usar `localStorage` para decidir qué idioma se renderiza en `/`.

## Página n8n existente

Opciones aceptables:

1. Migrarla a una ruta Angular prerenderizada, conservando URL y contenido útil.
2. Mantener el HTML estático existente y actualizar branding/enlaces/sitemap.

Preferir la migración si no aumenta mucho el riesgo. En cualquier caso, no eliminar la URL.

## GitHub Pages

- No depender de SSR en runtime.
- No necesitar Express en producción.
- Generar directorios estáticos por ruta.
- Mantener `CNAME` y assets existentes.
- Verificar navegación directa a cada URL desplegada.
