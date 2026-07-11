# CTA, conversión y formulario

## Jerarquía de CTA

### CTA principal global

`Pilot-Eignung prüfen`

Destino preferido: `/leistungen/rfq-readiness-workshop/`.

### CTA secundario global

`Internen RFQ-Copiloten ansehen`

Destino: `/leistungen/interner-rfq-copilot/`.

### CTA final de páginas de servicio y verticales

- `Maschinenfamilie besprechen`
- `RFQ Readiness Workshop anfragen`
- `Eignung der Maschinenfamilie prüfen`

Destino final: `/kontakt/`.

## Regla de conversión

El sitio no debe empujar a una demo genérica. Debe preparar al visitante para describir:

- una familia de máquinas;
- el volumen aproximado de solicitudes;
- el trabajo actual de ventas/ingeniería;
- la existencia de históricos, módulos o reglas;
- las restricciones más importantes.

## Formulario

Mantener las validaciones y protecciones existentes. No reemplazar el flujo de contacto por un enlace `mailto:` salvo como fallback.

Campos mínimos:

- nombre;
- empresa;
- email;
- mensaje.

Campos recomendados si el cambio no rompe el endpoint:

- teléfono opcional;
- website opcional;
- familia de máquinas;
- volumen aproximado de solicitudes;
- mayor cuello de botella.

## Copy de privacidad y confianza

> Bitte senden Sie im ersten Kontakt keine vertraulichen Lastenhefte, Zeichnungen oder Kundendaten. Der Umgang mit Dokumenten wird vor einer Analyse separat vereinbart.

## Eventos de conversión futuros

No añadir tracking nuevo en P0. Dejar los CTA con IDs o atributos estables para una instrumentación posterior, por ejemplo:

- `data-cta="readiness-hero"`
- `data-cta="copilot-hero"`
- `data-cta="contact-final"`

No incluir datos personales en atributos ni URLs.
