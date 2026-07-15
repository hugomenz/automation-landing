---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
---

# LinkedIn revenue campaign → hugomenz.de

**Investigación base:** 2026-07-12 · **Campaña:** 2026-07-13 → 2026-07-26 · **Skill:** `linkedin-copilot` · **Estado:** nada ejecutado todavía.

Empieza por `00-LEEME-PARA-VENDER.md`. Esa es la entrada nueva para vender, no el paquete anterior de visibilidad.

## Fuente de verdad de la campaña

| Archivo | Contenido |
| --- | --- |
| `00-LEEME-PARA-VENDER.md` | objetivo comercial, reglas y orden de ejecución |
| `01-target-buyers.csv` | 32 compradores/personas objetivo |
| `02-target-champions.csv` | 20 champions y validadores técnicos |
| `03-distribution-accounts.csv` | 16 cuentas de distribución, separadas del ICP comprador |
| `04-aligned-comments.md` | clasificación completa de comentarios heredados + 9 comentarios finales alineados |
| `05-sales-messages.md` | 15 solicitudes de conexión y mensajes dinámicos por etapa |
| `06-posts-revenue-campaign.md` | 5 posts con función comercial clara |
| `07-sales-metrics.csv` | métrica principal, secundaria y final por RUN |
| `08-FINAL-REVENUE-AUDIT.md` | auditoría final y veredicto READY |
| `09-content-backlog.md` | ideas procedentes de conversaciones reales; nunca publica automáticamente |
| `09-analytics-verification.md` | auditoría UTM y estado `ANALYTICS_UNVERIFIED` |

## plan/ — ejecución

| Archivo | Contenido |
| --- | --- |
| `plan/04-profile-changeset.md` | cambios exactos del perfil para vender la oferta actual |
| `plan/05-follow-list.csv` / `plan/05-follow-list.md` | 20 follows iniciales + backlog controlado |
| `plan/runs/` | 5 RUN nuevos: POSITIONING, PROBLEM-DISCOVERY, CONVERSATION, OFFER, CLOSE-AND-DECIDE |

## datos/ — soporte, no ejecución

Los archivos en `datos/` siguen siendo la evidencia de investigación. Se conservan para trazabilidad, pero ya no mandan la ejecución. Los borradores históricos en `plan/03-comment-drafts.md`, `plan/07-comment-reserves.md` y el `07-rebuild-report.md` se usan solo como insumo auditado para `04-aligned-comments.md`.

## archive/

- `archive/runs-before-final-rebuild/` conserva la reconstrucción anterior.
- `archive/runs-before-revenue-rebuild/` conserva los 7 RUN de visibilidad que fueron reemplazados por la campaña comercial de 5 RUN.

## Totales de la campaña nueva

- Compradores objetivo: **32**
- Champions/usuarios: **20**
- Cuentas de distribución: **16**
- Comentarios principales alineados: **9**
- Solicitudes de conexión preparadas: **15**
- Posts propios: **5**
- Follows iniciales: **20**
- RUN listos: **5**

## Gate del skill

El skill `linkedin-copilot-package` quedó actualizado para `supervised_campaign` con follows, conexiones, posts, comentarios y mensajes/respuestas con aprobación específica. Tests del gate: **34/34 PASS**.

## Precondición antes de RUN-01

La copia alemana ampliada está validada localmente, pero no se desplegó durante esta auditoría porque no se autorizó ninguna acción pública. Publica primero la landing; `R01-00` verifica producción y detiene el RUN antes de LinkedIn si la versión antigua sigue visible.
