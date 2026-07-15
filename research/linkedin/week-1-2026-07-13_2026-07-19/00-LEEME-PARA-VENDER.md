---
campaign_version: 2.0
campaign_focus: revenue
strategy_frozen: true
frozen_at: 2026-07-12T21:37:15+02:00
audit_status: READY
approved: false
---

# 00 — LEEME PARA VENDER

## Objetivo único

Conseguir conversaciones comerciales con empresas industriales que puedan avanzar hacia:

1. una conversación con el responsable correcto
2. la revisión de una solicitud técnica o del proceso real de oferta
3. la presentación del RFQ Readiness Workshop
4. una propuesta comercial
5. un cliente pagado

## Alcance comercial

La oferta se dirige al Maschinen- und Anlagenbau configurable: máquinas de embalaje y final de línea, montaje, manipulación, inspección, transporte, robótica y automatización. Paletizado es un ejemplo útil, no el límite de la oferta.

## Qué cuenta y qué no cuenta

- **Lead comercial:** problema real descrito, conversación aceptada, tipo de máquina o ámbito de aplicación identificado, revisión de RFQ/proceso, interés en workshop, propuesta pedida.
- **No cuenta como lead:** like, follow, impresión, visita al perfil, aceptación de conexión sin contexto, comentario amable sin problema real.

## Métricas

- principal: `número de conversaciones cualificadas`
- secundaria: `número de workshops presentados`
- final: `dinero cobrado`

## Orden de trabajo

1. revisar `plan/04-profile-changeset.md`
2. usar `01-target-buyers.csv`, `02-target-champions.csv` y `03-distribution-accounts.csv`
3. usar `04-aligned-comments.md`, `05-sales-messages.md` y `06-posts-revenue-campaign.md`
4. ejecutar un solo RUN a la vez desde `plan/runs/`
5. registrar resultados en `07-sales-metrics.csv`
6. cerrar con `08-FINAL-REVENUE-AUDIT.md`

## Reglas duras

- no inventar clientes, ahorros, resultados ni precios
- no vender en comentarios
- no usar enlaces en comentarios
- no presentar a Hugo como experto de proceso específico no vivido
- no enviar mensajes dinámicos sin leer el contexto y pedir aprobación específica
- no repetir una acción ya terminal (`DONE`, `SKIPPED_ALREADY_DONE`, `SKIPPED_CONTEXT_CHANGED`, `FAILED`)
- detener el RUN ante login, CAPTCHA, checkpoint, warning, throttling o selector ambiguo

## Estado de la campaña

- buyers: **32**
- champions: **20**
- distribución: **16**
- comentarios alineados: **9**
- publicaciones: **5**
- solicitudes de conexión preparadas: **15**
- follows iniciales: **20**
- RUN listos: **5**

## Primer comando de ejecución

Precondición operativa: desplegar primero la versión local validada de hugomenz.de. `RUN-01` comprueba esa copia pública en `R01-00` y se detiene antes de LinkedIn si todavía no está visible.

`EJECUTA RUN-01-POSITIONING COMPLETO SIN CAMBIAR OBJETIVOS, URLs NI TEXTOS.`

Nada se ejecuta hoy. Todo sigue en `approved: false`.
