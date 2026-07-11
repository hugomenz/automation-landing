# Diseño y precio de la oferta

> Fuente original convertida a Markdown. Utilizar como contexto, no como copy público sin revisión.

# Oferta productizada propuesta: **Digital RFQ Qualification Pilot**

## 1. Decisión de diseño

La oferta no debe prometer “automatizar presupuestos con IA”. Debe prometer algo más controlado:

> **Construir y evaluar, para una sola familia de máquinas, un flujo que convierte solicitudes desestructuradas en una ficha de requisitos, preguntas pendientes, riesgos, supuestos y una estimación presupuestaria trazable, siempre sujeta a revisión humana.**

La estimación utiliza exclusivamente reglas, módulos, tablas, fórmulas y datos aprobados por el cliente. La IA interpreta información; no crea precios. n8n, Make o cualquier otro componente son medios de implementación, no la promesa comercial.

Aunque eres nuevo como consultor independiente y no tienes casos que mostrar, no eres un perfil técnico junior: combinas aproximadamente ocho años en maquinaria especial con tres años de desarrollo y automatización. La oferta debe aprovechar esa combinación sin inventar resultados ni referencias. fileciteturn0file0

La denominación **“Implementación completa”** necesita un límite contractual: significa “producción completa para la familia de máquinas validada”, no automatización completa de todo el catálogo, todos los países y todos los sistemas de la empresa.

---

## 2. Base de precios

Los precios siguientes son **recomendaciones**, no datos de mercado observados para este producto concreto. Se calculan para Alemania en 2026, entrega remota o híbrida, por una sola persona, y se expresan en euros netos, más IVA aplicable, licencias, consumo de API y viajes.

Como referencias:

- El Freelancer-Kompass 2026 sitúa el promedio de freelancers DACH en **103 €/hora**; también muestra un mercado más difícil, con un 49 % indicando una peor situación de pedidos que el año anterior. ([freelancermap.de](https://www.freelancermap.de/freelancer-kompass))
- El BDU informó de un promedio facturado de **1.300 €/día** para consultoría en 2025. ([bdu.de](https://www.bdu.de/news/studie-honorare-im-consulting-2025-tagessaetze-leicht-ruecklaeufig/))
- Malt sitúa en aproximadamente **1.021 €/día** a consultores de estrategia y negocio con 8–15 años de experiencia. ([malt.de](https://www.malt.de/t/tarifbarometer/business-consulting))

Por ello, una base interna de **1.100–1.300 €/día** resulta defendible para el trabajo híbrido industrial, de procesos y software. Los proyectos a precio fijo deben incorporar margen adicional por incertidumbre, reuniones, gestión, documentación, correcciones y riesgo de datos.

## 3. Resumen de la escalera

| Nivel | Servicio | Precio recomendado | Duración |
|---|---|---:|---:|
| 0 | RFQ Fit Call | 0 € | 30–45 minutos |
| 1 | RFQ Readiness Workshop | 2.900 € | 5–7 días laborables |
| 2 | Historical RFQ Prototype | 9.800 € | 3 semanas |
| 3 | Digital RFQ Qualification Pilot | 24.900 € | 8 semanas |
| 4 | Production Rollout — One Machine Family | 39.900 € | 8–10 semanas |
| 5 | RFQ Optimization Care | 2.900 €/mes | Mínimo inicial de 3 meses |

La progresión comercial debe tener puertas de decisión. Un diagnóstico puede terminar en **“no recomendamos continuar”**. El prototipo puede demostrar que los datos o las reglas de precio no son suficientes. Eso protege al cliente y mejora la credibilidad del consultor.

---

# Nivel 0 — **RFQ Fit Call**

| Campo | Definición |
|---|---|
| **Cliente ideal** | Fabricante de maquinaria, integrador de automatización o fabricante de equipos de 20–250 empleados. Tiene una posible familia de soluciones repetible y una persona responsable de ventas técnicas o cálculo. |
| **Problema** | No está claro si el caso tiene suficiente repetibilidad, volumen, datos y lógica de configuración para justificar un diagnóstico pagado. |
| **Entregables** | Formulario previo breve; llamada estructurada; clasificación verde, ámbar o roja; recomendación de siguiente paso; resumen de los principales bloqueos detectados. |
| **Duración** | 30–45 minutos. Máximo de 15 minutos adicionales de revisión interna. |
| **Límites** | Una empresa, un proceso y una familia candidata. No se revisan documentos técnicos, históricos de RFQ, arquitectura ni integraciones. |
| **Dependencias del cliente** | Completar el formulario previo y asistir con una persona que conozca el proceso de oferta. Aportar cifras aproximadas de volumen y tiempo empleado, aunque no estén perfectamente medidas. |
| **Precio recomendado** | **0 €**. No debe superar 45 minutos ni convertirse en consultoría gratuita. |
| **Forma de pago** | No aplica. Puede utilizarse una política de cancelación para reducir ausencias. |
| **Criterios de aceptación** | Se responde a cinco preguntas: repetibilidad, volumen o coste de cualificación, disponibilidad de históricos, existencia de reglas de precio y disponibilidad de un responsable interno. Se documenta una decisión: diagnóstico, no-go o reconsiderar más adelante. |
| **Garantía razonable** | Sin coste y sin obligación de continuar. No se garantiza viabilidad técnica ni económica. |
| **Exclusiones** | Diseño de solución, presupuesto, selección tecnológica, auditoría de datos, análisis de ROI, NDA complejo o revisión contractual. |
| **Riesgos** | Que la conversación se convierta en una sesión de consultoría; que participe una persona sin autoridad ni conocimiento operativo; que el prospecto solo busque una estimación gratuita. |
| **Siguiente servicio** | **RFQ Readiness Workshop**. |

### Preguntas mínimas de cualificación

1. ¿Existe una familia con configuraciones, módulos o reglas relativamente repetibles?
2. ¿Cuántas solicitudes relevantes recibe al año y cuánto tiempo técnico consume cada una?
3. ¿Existen al menos algunos RFQ, presupuestos y decisiones históricas reutilizables?
4. ¿Los precios pueden descomponerse en reglas, módulos, tablas o fórmulas?
5. ¿Habrá un responsable de ventas técnicas disponible semanalmente?

No debe venderse un piloto cuando el cliente espera una oferta vinculante autónoma, no puede identificar una familia concreta o reconoce que cada máquina se calcula desde cero sin reglas reutilizables.

---

# Nivel 1 — **RFQ Readiness Workshop**

| Campo | Definición |
|---|---|
| **Cliente ideal** | Empresa con interés real, pero sin claridad suficiente sobre proceso, datos, familia inicial, métricas o arquitectura. Participan ventas técnicas, cálculo, ingeniería y, cuando sea necesario, IT. |
| **Problema** | La idea parece atractiva, pero el proceso real está distribuido entre personas, carpetas, hojas de cálculo, ERP, CRM y conocimiento tácito. Empezar a desarrollar directamente produciría cambios de alcance. |
| **Entregables** | Cuestionario previo; taller de hasta 4 horas; mapa del proceso actual; inventario de datos y sistemas; evaluación de familias candidatas; mapa de reglas de configuración y precio; riesgos y bloqueos; métricas de línea base disponibles; recomendación go/no-go; alcance cerrado del prototipo. |
| **Duración** | 5–7 días laborables desde la recepción completa de la información. Una sesión principal y una sesión de revisión de 60 minutos. |
| **Límites** | Una familia candidata; hasta 5 participantes; hasta 10 documentos previos; una ubicación; una ronda consolidada de comentarios. Entrega remota. Jornada presencial como adicional. |
| **Dependencias del cliente** | Acceso a responsables del proceso; 5–10 ejemplos de RFQ; descripción de cómo se calcula actualmente; listado de CRM/ERP/herramientas; respuestas consolidadas dentro de 2 días laborables. |
| **Precio recomendado** | **2.900 € netos**. |
| **Forma de pago** | 50 % al encargo y 50 % con la entrega del informe. Facturas con vencimiento de 14 días. |
| **Criterios de aceptación** | El informe contiene mapa del proceso, inventario de datos, familia recomendada, riesgos, alcance del prototipo y decisión go/no-go. La sesión de revisión se ha realizado y se ha incorporado una ronda de correcciones objetivas. |
| **Garantía razonable** | Si la recomendación o el alcance siguen siendo ambiguos por una omisión del consultor, se incluye una sesión adicional de 60 minutos y una revisión del informe sin coste. |
| **Exclusiones** | Desarrollo, prototipo funcional, limpieza de datos, cálculo detallado de ROI, asesoría jurídica, evaluación de seguridad, selección definitiva de proveedores y documentación de todo el portfolio. |
| **Riesgos** | Conocimiento de precios no documentado; desacuerdo entre ventas e ingeniería; datos históricos no comparables; ausencia del propietario real del proceso; subestimación del trabajo de limpieza. |
| **Siguiente servicio** | **Historical RFQ Prototype**, únicamente si el resultado es verde o ámbar con acciones concretas. |

### Resultado comercial correcto

El workshop debe ser comprable incluso cuando termine en no-go. El cliente paga por evitar un proyecto mal definido, no por recibir necesariamente una recomendación positiva.

---

# Nivel 2 — **Historical RFQ Prototype**

| Campo | Definición |
|---|---|
| **Cliente ideal** | Empresa con una familia seleccionada, históricos disponibles y una hipótesis de configuración o precio que necesita demostrarse antes de involucrar usuarios o sistemas productivos. |
| **Problema** | No se sabe si los documentos pueden interpretarse de forma suficientemente útil, si la información ausente puede detectarse y si la estimación puede reconstruirse con fuentes aprobadas. |
| **Entregables** | Esquema estructurado de requisitos; prototipo aislado; importación de hasta 30 RFQ históricos; extracción de campos; detección de información ausente; clasificación de riesgos y supuestos; lógica presupuestaria basada en fuentes aprobadas; vista interna sencilla; evaluación sobre un conjunto de prueba; demostración y reporte de limitaciones. |
| **Duración** | 3 semanas, suponiendo acceso puntual a datos y expertos. Aproximadamente 8–10 días efectivos de consultoría. |
| **Límites** | Una familia; un idioma; hasta 30 RFQ y 500 páginas en total; máximo de cuatro tipos de archivo acordados; hasta 20 módulos de coste o 75 reglas; sin CRM, ERP ni usuarios externos; una ronda de comentarios. |
| **Dependencias del cliente** | Datos legalmente utilizables y preferiblemente anonimizados; 10 casos con resultado conocido para pruebas; tablas, fórmulas o módulos autorizados; experto disponible en dos sesiones de 90 minutos; definición de campos obligatorios. |
| **Precio recomendado** | **9.800 € netos**. |
| **Forma de pago** | 40 % al encargo, 40 % cuando el flujo procesa el primer conjunto de casos y 20 % después de la demostración y entrega del informe. |
| **Criterios de aceptación** | El prototipo procesa todos los casos acordados sin bloquearse; cada campo obligatorio queda marcado como aportado, interpretado, ausente o pendiente de revisión; todo valor económico referencia una fuente aprobada y versionada; no se envía nada automáticamente; se documentan aciertos, errores y casos no determinables. |
| **Garantía razonable** | Punto de parada temprano: si después del primer subconjunto el consultor concluye que los datos no permiten una prueba técnicamente honesta, entrega los hallazgos y se cancelan los hitos aún no devengados. Los defectos reproducibles respecto al alcance se corrigen durante 14 días. |
| **Exclusiones** | Uso productivo, CRM, portal público, usuarios múltiples, SLA, SSO, entrenamiento de un modelo propio, clasificación legal, cálculo vinculante, garantía de precisión porcentual o garantía de ahorro. |
| **Riesgos** | Históricos seleccionados de forma sesgada; presupuestos antiguos con otras tarifas; archivos escaneados deficientes; poca trazabilidad de decisiones; conocimiento de precios guardado únicamente por personas; confundir reconstrucción histórica con capacidad predictiva futura. |
| **Siguiente servicio** | **Digital RFQ Qualification Pilot**. |

### Importante sobre la “precisión”

No conviene prometer “90 % de precisión” sin una definición contractual de:

- qué campos se evalúan;
- quién produce la verdad de referencia;
- cómo se penalizan campos ausentes;
- qué tolerancia existe en valores numéricos;
- qué documentos quedan fuera.

El criterio obligatorio debe ser la **trazabilidad y la identificación explícita de incertidumbre**, no que el sistema siempre produzca una respuesta.

---

# Nivel 3 — **Digital RFQ Qualification Pilot**

Este es el producto central y debe poder ser entregado por una sola persona.

| Campo | Definición |
|---|---|
| **Cliente ideal** | Empresa que ha superado prototipo o posee datos excepcionalmente preparados; una familia claramente repetible; patrocinador interno; responsable semanal de ventas técnicas; volumen suficiente para observar casos reales o un coste elevado por cada cualificación. |
| **Problema** | El prototipo aislado no demuestra cómo funcionará el proceso con usuarios, documentos entrantes, revisión humana, seguimiento y CRM. |
| **Entregables** | Wizard web controlado; preguntas condicionales; carga de documentos e imágenes; extracción estructurada; detección de campos ausentes; preguntas adicionales; riesgos y supuestos; rango presupuestario trazable; bandeja de revisión humana; registro de fuentes y versiones; creación de oportunidad en un CRM sandbox mediante API o webhook; formación; ejecución controlada del piloto; informe final. |
| **Duración** | **8 semanas**: aproximadamente 5 semanas de configuración y construcción, 1 semana de UAT y 2 semanas de observación controlada. Máximo planificado de 22–24 días de consultoría. |
| **Límites** | Una familia; un idioma; hasta 30 preguntas principales; máximo de 5 archivos por RFQ y 20 MB por archivo; hasta 25 módulos y 100 reglas; un CRM sandbox; máximo de 5 revisores internos; hasta 25 RFQ durante el piloto; interfaz estándar; una ronda mayor y una menor de ajustes. |
| **Dependencias del cliente** | Entorno o cuentas acordadas; fuentes de precio aprobadas; acceso al CRM sandbox; responsable disponible 45 minutos por semana; feedback en un máximo de 2 días laborables; usuarios de prueba; autorizaciones de datos; decisión sobre alojamiento y proveedores; participación en UAT. |
| **Precio recomendado** | **24.900 € netos**. Licencias, consumo de modelos, OCR, alojamiento y software externo se facturan directamente al cliente o como coste separado. |
| **Forma de pago** | 40 % al encargo, 40 % cuando el flujo completo funciona en staging y 20 % tras UAT y entrega del informe de piloto. |
| **Criterios de aceptación** | Diez escenarios UAT acordados funcionan de extremo a extremo; cada valor económico tiene fuente; los campos ausentes se muestran; ninguna respuesta se envía sin aprobación humana; se crea correctamente la oportunidad de prueba en CRM; existe registro de eventos; no quedan defectos críticos; se entrega manual y reporte. |
| **Garantía razonable** | Corrección durante 30 días de defectos reproducibles respecto a los criterios aceptados. Si un escenario UAT falla por una omisión propia dentro del alcance, se incluye una iteración adicional de hasta dos días. No se garantiza ROI, número de leads ni porcentaje de conversión. |
| **Exclusiones** | ERP, CAD, PLM, SSO, múltiples CRM, varios idiomas, varias familias, oferta vinculante, envío autónomo, cálculo sin fuentes, rediseño corporativo completo, aplicación móvil, 24/7, pentest certificado, asesoría jurídica, migración masiva o modelo de IA propio. |
| **Riesgos** | Pocos RFQ reales durante el período; cambios tardíos en reglas; baja participación de usuarios; integraciones con API deficientes; solicitudes fuera de familia; documentos ambiguos; exposición de información sensible; expectativas de producto terminado; dependencia excesiva de una única persona. |
| **Siguiente servicio** | **Production Rollout — One Machine Family**. |

## Métricas del piloto

Estas métricas sirven para evaluar, no para garantizar resultados:

- tiempo interno desde recepción hasta “listo para revisar”;
- porcentaje de campos obligatorios aportados, detectados como ausentes o interpretados;
- número de preguntas aclaratorias;
- porcentaje de expedientes aceptados por el ingeniero con cambios menores;
- líneas de coste con fuente trazable;
- frecuencia de intervención manual;
- errores por tipo de documento;
- uso y abandono del wizard.

Los umbrales de éxito se acuerdan después de establecer una línea base. La aceptación técnica del piloto no debe depender de que el cliente reciba suficientes solicitudes comerciales durante ocho semanas.

## Plan de entrega compatible con una sola persona

| Semana | Resultado |
|---:|---|
| 1 | Esquema, flujo, reglas y arquitectura congelados |
| 2–3 | Wizard, ingesta y extracción |
| 4 | Reglas de configuración y estimación |
| 5 | Revisión humana, trazabilidad y CRM sandbox |
| 6 | UAT, correcciones y formación |
| 7–8 | Uso controlado, medición e informe |

Regla operativa: **un solo piloto activo al mismo tiempo** durante los primeros clientes.

---

# Nivel 4 — **Production Rollout — One Machine Family**

| Campo | Definición |
|---|---|
| **Cliente ideal** | Cliente con piloto aceptado, propietario interno del proceso, reglas estables, aprobación de IT y decisión clara de operar la solución para la misma familia. |
| **Problema** | El piloto carece de las garantías operativas, administración, seguridad, documentación, monitorización y soporte necesarios para un uso continuo. |
| **Entregables** | Entorno de staging y producción; despliegues controlados; gestión de secretos; roles de usuario; copias de seguridad; monitorización y alertas; CRM productivo; configuración versionada; registro de decisiones y fuentes; pruebas de restauración; UAT productivo; documentación de operación; formación de administradores y usuarios; go-live; dos semanas de hypercare. |
| **Duración** | 8–10 semanas después de recibir las aprobaciones y accesos. |
| **Límites** | La misma familia del piloto; un idioma; un CRM; hasta dos integraciones API/webhook; máximo de 10 usuarios internos; hasta 100 RFQ al mes; dos entornos; una marca; mismo modelo de reglas aprobado. No constituye rollout de todo el portfolio. |
| **Dependencias del cliente** | Piloto aceptado; revisión de seguridad y privacidad; cuentas productivas; dominio y correo; responsables de CRM e IT; aprobaciones de proveedores; participación en UAT; datos maestros; propietario de reglas; usuarios disponibles para formación. |
| **Precio recomendado** | **39.900 € netos**, siempre que se reutilicen los activos del piloto y el alcance permanezca estable. Una implementación directa sin piloto no debe cotizarse a este precio. |
| **Forma de pago** | 30 % al encargo, 30 % al completar la preparación productiva, 30 % al iniciar UAT y 10 % después de go-live y entrega documental. |
| **Criterios de aceptación** | Escenarios críticos de UAT superados; CRM productivo probado; roles y permisos verificados; prueba de copia y restauración completada; trazabilidad de precios y documentos; despliegue productivo ejecutado; formación impartida; manual de operación entregado; cero defectos críticos abiertos. |
| **Garantía razonable** | Garantía de 60 días para defectos reproducibles respecto a la especificación aceptada. Durante el hypercare, respuesta inicial al siguiente día laborable para una interrupción crítica. No se garantiza disponibilidad 24/7 sin SLA específico. |
| **Exclusiones** | Otras familias, otros países, ERP/CAD/PLM, SSO, alta disponibilidad empresarial, certificaciones, auditoría o pentest independiente, consultoría jurídica, migraciones extensas, soporte 24/7, entrada manual de datos y costes de terceros. |
| **Riesgos** | Demoras de procurement o IT; requisitos de seguridad descubiertos tarde; cambios de API; costes variables de proveedores; dependencia del conocimiento de una persona; reglas comerciales no gobernadas; expansión informal del alcance; mantenimiento insuficiente después del go-live. |
| **Siguiente servicio** | **RFQ Optimization Care**. Posteriormente puede venderse un rollout fijo para otra familia. |

La legislación de IA de la UE se aplica progresivamente y contiene obligaciones diferentes según rol, uso y nivel de riesgo; además, las reglas de transparencia entran en aplicación en agosto de 2026. El paquete debe incluir controles técnicos y documentación, pero **no una opinión legal ni una certificación de conformidad**. La clasificación y las obligaciones concretas deben validarse con el cliente y sus asesores. ([digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai))

---

# Nivel 5 — **RFQ Optimization Care**

| Campo | Definición |
|---|---|
| **Cliente ideal** | Cliente con una implementación productiva, responsable interno y volumen recurrente. Necesita continuidad, no una bolsa ilimitada de desarrollo. |
| **Problema** | Las reglas, precios, documentos, modelos, APIs y necesidades de usuarios cambian. Sin mantenimiento, la calidad y trazabilidad se degradan. |
| **Entregables** | Monitorización; revisión mensual de salud; gestión y análisis inicial de incidencias; hasta 16 horas de cambios menores; una actualización mensual de reglas/configuración; revisión de copias de seguridad; informe de métricas; registro de cambios; reunión mensual de 45 minutos. |
| **Duración** | Servicio mensual con compromiso inicial de 3 meses. Después, cancelación con 30 días de preaviso. |
| **Límites** | Una familia y una instalación; horario laborable alemán; máximo de 16 horas al mes; hasta 4 horas pueden trasladarse únicamente al mes siguiente; cambios mayores de un día se cotizan aparte; sin 24/7. |
| **Dependencias del cliente** | Responsable interno; canal de incidencias; acceso vigente; aprobación de cambios; datos suficientes para reproducir errores; reglas y precios versionados; comunicación previa de cambios en CRM o procesos. |
| **Precio recomendado** | **2.900 € netos al mes**, más licencias, alojamiento y consumo. Horas adicionales aprobadas previamente: **150 €/hora**. |
| **Forma de pago** | Mensual por adelantado. El consumo y las tareas se reportan cada mes. |
| **Criterios de aceptación** | Informe mensual entregado; reunión realizada o puesta a disposición; incidencias registradas; tiempos de respuesta cumplidos; cambios documentados; consumo de capacidad transparente; actualizaciones desplegadas según procedimiento. |
| **Garantía razonable** | Crédito del 10 % de la mensualidad por incumplimiento reiterado de un tiempo de respuesta crítico acordado, con un máximo del 20 % mensual y excluyendo caídas de terceros o falta de acceso del cliente. |
| **Exclusiones** | Nueva familia, nueva integración, rediseño, migración, proyecto de datos, auditoría, nuevas funciones grandes, disponibilidad 24/7, soporte a sistemas externos y trabajo acumulable indefinidamente. |
| **Riesgos** | Convertir el retainer en backlog ilimitado; infrautilización de horas; cambios de reglas sin propietario; incidencias de proveedores externos; expectativas de disponibilidad inmediata; dependencia del consultor. |
| **Siguiente servicio** | **Additional Machine Family Rollout**, sprint trimestral de optimización o una segunda integración, todos con alcance y precio separados. |

---

# 4. Filtros de viabilidad antes del piloto

## Señales verdes

- Una familia puede describirse mediante módulos, opciones y restricciones.
- Existen al menos 20–30 casos históricos razonablemente comparables.
- Los valores económicos pueden vincularse a reglas o fuentes.
- El cliente acepta que la estimación sea no vinculante.
- Hay una persona capaz de aprobar reglas y otra de aceptar el sistema.
- Cada RFQ consume suficiente trabajo técnico como para justificar la inversión.
- La revisión humana sigue siendo obligatoria.

## Señales ámbar

- El volumen es bajo, pero el coste de cada cualificación es muy elevado.
- Los datos existen, aunque requieren limpieza limitada.
- Una parte de la estimación es repetible y otra depende de ingeniería.
- El CRM permite integración, pero el cliente todavía no tiene acceso preparado.
- Los históricos usan versiones diferentes de precios.

En estos casos debe reducirse el piloto a **estructuración y cualificación**, dejando fuera parte de la estimación.

## Señales rojas

- Cada proyecto es completamente nuevo y no existen módulos reutilizables.
- El cliente no puede explicar cómo se produce hoy la estimación.
- Espera que la IA invente o “adivine” precios.
- Quiere automatizar todo el portfolio en el primer proyecto.
- Exige una oferta contractual automática sin revisión humana.
- No asigna responsable, usuarios ni tiempo de feedback.
- No puede autorizar el uso de sus documentos.
- Confunde el piloto con un producto productivo con SLA.

Con dos o más señales rojas no se debe vender el piloto.

---

# 5. Comparación de modelos de precio

| Modelo | Ventajas | Problemas | Uso recomendado |
|---|---|---|---|
| **Precio fijo** | Certeza presupuestaria; facilita compras; premia la eficiencia; hace que la oferta parezca un producto. | El consultor asume el riesgo de datos, cambios y reuniones; puede perder margen si el alcance es ambiguo. | Modelo principal para workshop, prototipo, piloto e implementación. Siempre con límites, dependencias, hitos, aceptación y change requests. |
| **Por hora o día** | Flexible cuando el trabajo no puede preverse; apropiado para limpieza, incidencias y cambios. | El cliente no conoce el coste final; penaliza la eficiencia; invita a supervisar horas en lugar de resultados. | Cambios fuera de alcance, limpieza no estimable, soporte adicional y talleres especiales. Recomendación: **150 €/h** o **1.150–1.250 €/día**. |
| **Por resultado** | Alinea incentivos cuando el resultado es medible y está bajo control. | Ventas, conversión, volumen de RFQ, calidad de datos, comportamiento de usuarios y precios dependen del cliente; genera disputas de atribución. | No utilizarlo como modelo principal durante los primeros proyectos. Más adelante podría añadirse un bonus limitado, después de medir una línea base. |
| **Mensual** | Ingresos recurrentes; capacidad reservada; continuidad y mejora progresiva. | Puede convertirse en una bolsa ilimitada o parecer caro en meses tranquilos. | Mantenimiento posterior al go-live, con horas incluidas, SLA limitado, caducidad de capacidad y cambios grandes fuera del contrato. |
| **Híbrido** | Combina seguridad y flexibilidad. | Requiere explicar bien qué pertenece a cada componente. | Recomendación general: precio fijo por fase + horas aprobadas para cambios + retainer después de producción. |

## Recomendación concreta

- **Workshop:** precio fijo.
- **Prototipo:** precio fijo con punto de parada.
- **Piloto:** precio fijo por hitos.
- **Implementación:** precio fijo después de piloto aceptado.
- **Cambios:** 150 €/hora, siempre con estimación y tope previo.
- **Mantenimiento:** mensual.
- **Pago por resultado:** no ofrecer inicialmente.

Un eventual componente de resultado debería representar como máximo una parte pequeña del precio y ligarse a una métrica operativa, no a ventas. Por ejemplo: proporción de expedientes aceptados como “listos para revisión” bajo una definición acordada. No conviene vincularlo a facturación, conversión comercial o adjudicación de máquinas.

---

# 6. Reglas contractuales que mantienen el producto limitado

## Regla de alcance

Cualquier elemento no enumerado expresamente queda fuera. Se considera cambio de alcance:

- otra familia de máquinas;
- otro idioma;
- otro CRM o sistema;
- una nueva clase de documento;
- otra lógica de precio;
- más usuarios o volumen;
- SSO;
- ERP, CAD o PLM;
- un nuevo recorrido de usuario;
- diseño gráfico personalizado;
- requisitos de seguridad no declarados.

Cada cambio puede resolverse de tres formas: intercambio por algo equivalente, adicional con precio fijo o backlog para una fase posterior.

## Regla de disponibilidad del cliente

Los plazos presuponen respuesta en dos días laborables. Un retraso del cliente desplaza el calendario. Si el proyecto queda bloqueado más de diez días laborables, se replantea la planificación y puede aplicarse una tarifa de reactivación.

## Regla de aceptación

- Criterios acordados antes de construir.
- Cinco días laborables para comunicar desviaciones objetivas.
- Defectos críticos impiden aceptación.
- Defectos menores se documentan y no bloquean necesariamente la aceptación.
- Nuevas preferencias no son defectos.
- Los resultados comerciales no son criterios de aceptación técnica.

## Regla de datos

El cliente confirma que puede proporcionar y utilizar los datos. Las cuentas productivas y, preferentemente, las cuentas de proveedores de IA, alojamiento y CRM deben pertenecer al cliente. El tratamiento de datos, subencargados, retención y ubicaciones se documentan antes del piloto externo.

## Regla de garantía

La garantía cubre que los entregables funcionen conforme a la especificación. No cubre:

- ahorro concreto;
- precisión absoluta;
- volumen de RFQ;
- ventas;
- adjudicaciones;
- disponibilidad de proveedores externos;
- cambios posteriores en APIs;
- datos o reglas incorrectos aportados por el cliente.

---

# 7. Adicionales estandarizados

| Adicional | Precio orientativo |
|---|---:|
| Jornada presencial adicional | 1.150 € más viaje |
| Limpieza manual de datos no incluida | 150 €/h, con tope previo |
| Idioma adicional | 2.500–4.000 € |
| Segunda integración CRM/API | 5.000–9.000 € |
| SSO estándar | 4.000–7.000 € |
| Familia adicional después del go-live | 12.000–20.000 € |
| Pentest externo | Presupuesto de tercero |
| Soporte 24/7 | No ofrecer como consultor individual inicialmente |

---

# 8. Política de lanzamiento sin casos previos

No conviene competir bajando el piloto a 5.000–10.000 €. Eso atraería clientes con expectativas de implementación completa y dejaría poco margen para datos deficientes, reuniones e iteraciones.

Para los primeros clientes puede utilizarse una concesión de **máximo 10–15 %**, denominada “Design Partner”, solo cuando:

- el alcance permanezca idéntico;
- exista acceso semanal al experto;
- el cliente tenga datos preparados;
- los tiempos de respuesta sean breves;
- el cliente permita solicitar —no exigir— una referencia factual o un caso anonimizado después del proyecto y sujeto a aprobación escrita.

El descuento nunca debe intercambiarse por un testimonio positivo. Tampoco debe utilizarse para compensar un alcance mal definido.

---

# 9. Oferta principal lista para presentar

## **Digital RFQ Qualification Pilot — 24.900 €**

> En ocho semanas construimos y evaluamos, para una sola familia de máquinas, un flujo controlado que transforma solicitudes, documentos e imágenes en una ficha estructurada de requisitos, información ausente, preguntas adicionales, riesgos, supuestos y una estimación presupuestaria trazable.  
>  
> Un comercial o ingeniero revisa y aprueba cada resultado. El sistema no inventa precios y no envía ofertas vinculantes.

**Incluye:** wizard, carga documental, extracción, reglas aprobadas, revisión humana, CRM sandbox, hasta 25 RFQ, formación y evaluación.

**No incluye:** ERP, CAD, PLM, varias familias, varios idiomas, SSO, oferta automática, precio vinculante, aplicación móvil, pentest o soporte 24/7.

**Requisito de entrada:** workshop y prototipo superados, salvo que el cliente demuestre una preparación equivalente.

La estrategia más defendible para empezar es vender primero el **workshop de 2.900 €**, utilizarlo para descartar proyectos inadecuados y convertir únicamente los casos bien preparados en prototipo y piloto.
