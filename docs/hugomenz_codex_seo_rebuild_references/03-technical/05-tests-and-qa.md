# Tests y QA

## Mantener guardrails existentes

- zoneless change detection;
- signal inputs;
- scripts sin host/puerto hardcodeado;
- offsets de navegación;
- `prefers-reduced-motion`;
- formulario y validaciones.

Actualizar los tests que dependan de la estructura de landing de una sola página.

## Nuevos tests recomendados

### 1. Registry de páginas

Para cada página P0:

- path único;
- title único;
- meta description no vacía;
- H1 no vacío;
- canonicalPath único;
- lang válido;
- no más de una página propietaria por keyword principal.

### 2. Home guardrails

El contenido alemán debe contener exactamente:

- `Angebotsprozesse im Maschinenbau digitalisieren`
- `Pilot-Eignung prüfen`
- `freigegebene Regeln`
- `menschliche Prüfung`

Y no debe contener como H1:

- `Ich automatisiere Prozesse, die jeden Tag Zeit kosten.`

### 3. Claims prohibidos

Buscar en el contenido indexable:

- `% Zeit sparen`
- `garantiert`
- `unsere Kunden`
- `führende Kunden`
- `90 %`
- `vollautomatisch`

El test debe permitir usos explicativos como `nicht vollautomatisch` solo si se implementa con criterio; mejor validar datos estructurados de contenido que texto compilado completo.

### 4. SEO internacional

- `/` y `/en/` poseen canonical distinto.
- alternates recíprocos.
- ninguna página alemana sin traducción emite `/en/...` inexistente.

### 5. Sitemap

- contiene las 12 URLs P0.
- no contiene duplicados.
- no contiene anchors.
- no contiene URLs futuras.

### 6. HTML construido

Añadir un script de verificación posterior al build, por ejemplo `scripts/verify-prerender.mjs`, que compruebe:

- existencia de `index.html` por ruta;
- title esperado;
- canonical esperado;
- H1 esperado;
- contenido mínimo;
- ausencia de una home vacía.

Puede integrarse como `npm run verify:prerender` y ejecutarse en CI después de build.

## Comandos de aceptación

```bash
cd apps/landing
npm ci
npm test
npm run build
npm run verify:prerender
```

Si se añade lint, no convertirlo en una migración grande no solicitada.

## QA manual

- navegación directa a cada URL;
- navegación interna desde una ruta profunda;
- back/forward del navegador;
- menú móvil;
- CTA y formulario;
- DE/EN;
- metadata inspeccionada en source generado;
- links del sitemap;
- no errores en consola;
- no hydration mismatch;
- no cambios visuales bruscos al cargar.
