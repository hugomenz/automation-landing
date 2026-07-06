# Freelance Market Validation

Este repo queda dividido en dos niveles:

- `brain/` contiene la validación de mercado, posicionamiento, scripts de
  outreach, supuestos financieros y checklists de decisión.
- `apps/landing/` contiene la landing Angular para la oferta de workflow
  automation.

## Dirección actual

El foco comercial es workflow automation para Alemania y DACH:

- Workflows con n8n, Make o Power Automate.
- Integraciones API y herramientas internas de operaciones.
- Internal tools con Angular cuando la automatización necesita UI.
- Workflows con IA, revisión humana, logging y handover.

Angular y design systems quedan como señales de credibilidad. El mensaje de
compra es operativo: reducir trabajo manual, hacer procesos trazables y entregar
un workflow pequeño antes de vender una gran transformación.

## Mapa del repo

| Ruta | Uso |
|---|---|
| `brain/README.md` | Hub original de validación |
| `brain/00-resumen-ejecutivo.md` | Resumen ejecutivo |
| `brain/01-portfolio/` | Estrategia de portfolio y mini casos |
| `brain/02-servicios/` | Servicios, paquetes y pricing |
| `brain/03-mercado/` | Mercado, plataformas y keywords |
| `brain/04-leads/` | Empresas, recruiters y perfiles de leads |
| `brain/05-outreach/` | Emails, LinkedIn y guiones de llamada |
| `brain/06-finanzas/` | Facturación, objetivo neto y riesgos |
| `brain/07-plan-semanal/` | Plan de validación de una semana |
| `brain/08-checklists/` | Checklists de portfolio, outreach, calls y decisión |
| `brain/09-decision/` | Señales de tracción y reglas de pivot |
| `apps/landing/` | Landing pública en Angular |

## Próximos retoques

1. Sustituir el email placeholder en `apps/landing/src/app/content.ts`.
2. Añadir nombre real o marca personal cuando el dominio esté decidido.
3. Publicar la landing.
4. Enlazarla desde LinkedIn, mensajes a recruiters y plantillas de outreach.

## Landing local

```bash
cd apps/landing
npm install
npm start
```

La app queda disponible en `http://127.0.0.1:4200`.

Para generar una versión publicable:

```bash
npm run build
```
