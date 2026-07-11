# Prompt maestro para Codex

Trabaja en el repositorio `hugomenz/automation-landing` sobre la rama base `main`.

Crea una rama nueva llamada `feat/industrial-rfq-seo-rebuild`. No hagas push directo ni merge a `main`.

Antes de modificar código, lee todos los archivos Markdown de esta carpeta de referencias, en este orden:

1. `README.md`
2. `00-project/01-strategic-decision.md`
3. `00-project/02-current-repo-audit.md`
4. `00-project/03-scope-and-phases.md`
5. `02-content/01-home-de.md`
6. El resto de `02-content/`
7. `01-seo/`
8. `03-technical/`
9. `00-project/04-definition-of-done.md`

## Objetivo

Reposiciona `hugomenz.de` desde una landing genérica de n8n/workflow automation hacia una web B2B especializada en digitalización del proceso técnico de oferta para fabricantes de maquinaria.

La propuesta principal es un **copiloto interno de cualificación de RFQ para una sola familia de máquinas**, con fuentes trazables, reglas aprobadas y revisión humana. No es un wizard público, no es un CPQ completo y no genera precios autónomamente.

## Implementación obligatoria

### 1. Arquitectura

- Mantén Angular 21, standalone components, signals, `OnPush` y zoneless change detection. No actualices Angular a otra major.
- Añade `@angular/router` y `@angular/ssr` en la misma versión `21.2.17` usada por el proyecto, salvo que el lockfile exija exactamente otra patch 21.x coherente.
- Añade prerenderizado estático compatible con GitHub Pages utilizando el soporte oficial de Angular (`@angular/ssr` y `outputMode: "static"`).
- El deploy debe seguir generando contenido publicable en `apps/landing/dist/landing/browser`.
- No introduzcas un servidor requerido en producción.
- Refactoriza `AppComponent` como shell con `router-outlet`.
- Sustituye el cambio de idioma en la misma URL por rutas reales.

### 2. Rutas P0

Implementa y prerenderiza:

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
- `/en/`

Conserva `/n8n-beratung-stuttgart/`. Puedes migrarla al router prerenderizado o mantener el HTML estático, pero actualiza su branding y enlaces para que sea una página tecnológica secundaria, no la propuesta principal.

### 3. Contenido

- Usa el copy exacto de `02-content/01-home-de.md` para la home alemana.
- Usa los headings, metadatos, copy y límites de los demás archivos de `02-content/`.
- Puedes hacer ajustes menores de gramática o longitud solo cuando sean necesarios para la UI, sin cambiar la promesa ni inventar claims.
- Utiliza `Ich` y `Sie`.
- No publiques precios salvo que ya exista una confirmación explícita y actual en el repo. En caso de duda, no muestres precio.

### 4. SEO

Para cada ruta:

- title y meta description únicos;
- un H1;
- canonical absoluto autocanónico;
- Open Graph y Twitter;
- idioma/locale correcto;
- breadcrumbs visibles en páginas interiores;
- JSON-LD coherente con contenido visible;
- enlaces internos rastreables.

Para `/` y `/en/`:

- hreflang recíproco `de-DE`, `en` y `x-default`;
- canonical independiente;
- no auto-redirección por navegador;
- no `localStorage` como fuente del idioma de la URL.

Actualiza sitemap y robots. No crees páginas vacías de Wissen ni traducciones inglesas incompletas.

### 5. Diseño

- Conserva la base visual oscura, IBM Plex y el acento verde.
- Reutiliza componentes y CSS existentes cuando sea razonable.
- Cambia el diagrama del hero a: entrada técnica → requisitos → huecos/riesgos → reglas aprobadas → revisión humana.
- Añade plantillas interiores, breadcrumbs y navegación multipágina.
- Evita stock photos, robots, cerebros de IA, dashboards ficticios y logos de clientes.
- Mantén el retrato de Hugo de forma factual y discreta.

### 6. Contacto

- Conserva el formulario existente, validaciones, feedback y protecciones/rate limiting.
- Adapta el copy a `Pilot-Eignung prüfen`.
- No añadas subida de archivos.
- Incluye un aviso para no enviar Lastenhefte, planos ni datos confidenciales en el primer contacto.
- Si ampliar campos rompe el endpoint o eleva mucho el riesgo, conserva los campos actuales y añade el contexto en el textarea/ayuda.

### 7. Límites estrictos

No introduzcas:

- clientes, testimonios, logos o casos no existentes;
- porcentajes de ahorro, precisión, conversión o ROI como resultados;
- oferta autónoma, precio inventado o confirmación de viabilidad por IA;
- falso equipo usando `wir`;
- páginas locales clonadas;
- login, CRM, wizard, chatbot o backend nuevo;
- tracking/cookies nuevos;
- dependencias UI pesadas sin necesidad.

### 8. Tests y verificación

Actualiza los tests existentes y añade tests para:

- registry de rutas, titles, H1 y canonical únicos;
- home DE y home EN;
- hreflang correcto;
- sitemap completo;
- claims prohibidos;
- HTML prerenderizado con contenido real.

Añade un script `verify:prerender` que inspeccione `dist/landing/browser` después del build y compruebe, por ruta, que existen title, canonical, H1 y texto principal. La home construida no puede ser únicamente `<app-root></app-root>`.

Ejecuta:

```bash
cd apps/landing
npm ci
npm test
npm run build
npm run verify:prerender
```

Corrige todos los fallos relacionados con tus cambios.

### 9. Documentación y entrega

- Actualiza el README del repo para reflejar el nuevo posicionamiento.
- Mantén los workflows de CI/Pages funcionando.
- Realiza commits lógicos.
- Si tienes acceso GitHub, abre un draft PR hacia `main` usando `05-handoff/PR_DESCRIPTION_TEMPLATE.md`.
- Si no puedes abrir PR, deja la rama con commits listos y proporciona el comando exacto para publicar/abrir el PR.

## Criterio de decisión técnica

No preguntes por decisiones menores. Elige la solución mínima, mantenible y compatible con el repo que cumpla la Definition of Done. Solo detente si falta una credencial o dato que impida físicamente continuar; en ese caso, completa todo lo demás y documenta el bloqueo concreto.

## Informe final

Incluye:

1. resumen de cambios;
2. arquitectura elegida;
3. rutas creadas;
4. tests ejecutados y resultado;
5. archivos principales modificados;
6. cualquier decisión o limitación pendiente;
7. URL o número del draft PR, si se creó.
