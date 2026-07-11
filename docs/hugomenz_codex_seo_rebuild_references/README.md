# Referencias para el rediseño SEO de hugomenz.de

Paquete de trabajo para que Codex actualice el repositorio público `hugomenz/automation-landing` y cambie el posicionamiento de la web desde automatización genérica hacia la digitalización del proceso técnico de oferta en fabricantes de maquinaria.

## Estado de referencia

- Repositorio: `hugomenz/automation-landing`
- Rama base: `main`
- Commit revisado: `893658594c9e571daeaf6fbfee6b10a6f2c2501a`
- Aplicación: Angular 21, componentes standalone, signals y detección de cambios sin Zone.js
- Hosting: GitHub Pages
- Directorio publicado por CI: `apps/landing/dist/landing/browser`
- Fecha del paquete: 2026-07-11

## Orden de lectura para Codex

1. `CODEX_PROMPT.md`
2. `00-project/01-strategic-decision.md`
3. `00-project/02-current-repo-audit.md`
4. `00-project/03-scope-and-phases.md`
5. `02-content/01-home-de.md`
6. El resto de briefs de contenido de `02-content/`
7. `01-seo/`
8. `03-technical/`
9. `00-project/04-definition-of-done.md`

## Precedencia de las referencias

Si dos documentos parecen entrar en conflicto, utilizar este orden:

1. Decisiones y límites no negociables de `00-project/01-strategic-decision.md`.
2. Copy exacto y metadatos de `02-content/`.
3. Arquitectura y mapeo SEO de `01-seo/`.
4. Requisitos de implementación de `03-technical/`.
5. Fuentes originales de `04-sources/`, que sirven como contexto y no como instrucciones directas de interfaz.

## Entrega P0

La primera entrega debe incluir:

- Home alemana completamente reposicionada.
- Páginas alemanas de solución, servicio, tres verticales, Stuttgart, perfil y contacto.
- Home inglesa real en `/en/`, no un cambio de idioma dentro de `/`.
- Rutas Angular prerenderizadas como HTML estático.
- Metadatos, canonical, `hreflang`, sitemap, schema, breadcrumbs y enlaces internos.
- Conservación de la página existente `/n8n-beratung-stuttgart/` como página secundaria.
- Conservación del formulario de contacto, sus validaciones y sus protecciones existentes.
- Tests y build verdes.

## Qué no incluye

- Construcción de un wizard público de RFQ.
- SaaS, login, panel de clientes o CRM real.
- Casos de cliente, logotipos, testimonios o cifras de ahorro inventadas.
- Páginas de ciudad duplicadas.
- Publicación de precios que Hugo no haya confirmado explícitamente.

El prompt listo para pegar en Codex se encuentra también como archivo independiente en la raíz del ZIP.
