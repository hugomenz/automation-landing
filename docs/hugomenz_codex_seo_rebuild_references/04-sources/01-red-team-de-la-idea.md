# Red team de la idea

> Fuente original convertida a Markdown. Utilizar como contexto, no como copy público sin revisión.

# Dictamen del comité

**La idea no es todavía un producto SaaS. Es un proyecto de normalización del proceso de oferta, acompañado de software.** La inteligencia artificial es una capa secundaria.

Tu ventaja real es poco común: entiendes maquinaria especial, ofertas, compras, ingeniería y desarrollo web. Tu desventaja es igual de importante: acabas de iniciar la actividad y no tienes clientes, testimonios ni casos demostrables. Eso no impide vender un piloto interno, pero hace especialmente difícil pedir a clientes industriales que carguen documentación confidencial en un portal público operado por un proveedor desconocido. El alcance inicial previsto —Alemania, fabricantes de 20 a 250 empleados y una única familia de máquinas— es sensato, pero el número de empleados es un criterio débil comparado con la repetibilidad y el volumen de ofertas. fileciteturn0file0

La conclusión es tajante:

- **Versión 1, wizard público:** no debe ser el producto inicial. Es la más vistosa y la menos defendible.
- **Versión 2, copiloto interno:** es la única versión racional para empezar.
- **Versión 3, híbrida:** es el mejor estado futuro, pero solo después de demostrar internamente precisión, ahorro y mantenimiento de datos.

El mayor riesgo no es que la IA “alucine”. El mayor riesgo es descubrir que **la empresa no dispone de un modelo de oferta suficientemente repetible como para automatizarlo**.

---

# 1. Comparación de las tres versiones

Las puntuaciones son una **estimación del comité**, no datos de mercado. Escala: 1 = muy desfavorable; 5 = muy favorable. En “riesgo”, una puntuación alta significa riesgo bajo.

| Criterio | 1. Wizard público | 2. Copiloto interno | 3. Modelo híbrido |
|---|---:|---:|---:|
| **Valor económico esperado** | **3/5.** Potencialmente alto, pero depende de que el cliente complete el formulario y confíe en el resultado. Puede generar más consultas basura. | **4/5.** Ahorro medible de horas, mejor preparación de reuniones y mayor consistencia. | **5/5.** Combina datos estructurados desde el origen con control humano. Mayor valor final. |
| **Facilidad de implementación** | **1/5.** Requiere UX pública, seguridad de archivos, lógica condicional, precios, integración web, CRM, privacidad y gestión de excepciones. | **4/5.** Puede arrancar con carga manual de correos y documentos, sin integración profunda. | **2/5.** Tiene prácticamente toda la complejidad pública más el flujo interno de aprobación. |
| **Disponibilidad y tolerancia de datos** | **1/5.** Necesita reglas y datos fiables antes de mostrar nada externamente. | **4/5.** Puede operar con huecos porque el comercial corrige y completa. Permite aprender en modo sombra. | **3/5.** Tolera huecos, pero el cliente espera que su esfuerzo produzca una respuesta útil. |
| **Confianza del cliente** | **1/5.** Precio automático y carga de información confidencial en una web desconocida. Mala combinación inicial. | **5/5.** El cliente ni siquiera necesita saber que existe el copiloto. La confianza se construye internamente. | **4/5.** La revisión humana ayuda, aunque persiste el temor a cargar información sensible. |
| **Seguridad jurídica** | **1/5.** Máxima exposición por estimaciones externas, transparencia de IA, privacidad y posibles expectativas contractuales. | **4/5.** Menor riesgo de confianza externa; siguen existiendo privacidad, confidencialidad y gobernanza. | **3/5.** La aprobación humana reduce, pero no elimina, la responsabilidad por una estimación errónea. |
| **Robustez técnica** | **1/5.** Debe funcionar sin un experto presente y resistir documentos defectuosos, ataques, errores de unidades y casos límite. | **4/5.** Puede ejecutarse en paralelo al proceso actual y bloquear resultados de baja confianza. | **2/5.** Hay dos superficies de fallo: la interacción pública y el proceso de revisión. |
| **Duración estimada de venta** | **1/5: 6–12+ meses.** Requiere dirección, ventas, IT, legal y posiblemente seguridad corporativa. | **4/5: 2–5 meses.** Puede venderse como mejora departamental limitada. | **2/5: 4–9 meses.** Cruza marketing, ventas, ingeniería, IT y legal. |
| **Ticket posible** | **5/5: 60–150 k€**, pero con baja probabilidad de cierre inicial. | **3/5: piloto 15–35 k€; producción 35–80 k€**. Es el ticket más accesible para un proveedor nuevo. | **4/5: piloto 30–60 k€; producción 60–120 k€**. Necesita referencias previas. |
| **Facilidad de demostración** | **5/5.** Mucho efecto visual; un recorrido feliz impresiona. | **3/5.** Menos espectacular, pero mucho más fácil de demostrar con un antes/después real. | **4/5.** Buena demo de extremo a extremo, pero requiere más componentes. |
| **Puntuación ponderada** | **1,8/5** | **4,0/5** | **3,25/5** |

Los tickets y plazos suponen una sola familia de máquinas, alcance controlado y ninguna integración SAP compleja. Son órdenes de magnitud para evaluar la economía, no tarifas de mercado ni precios de competidores.

## La trampa de la demostración

La versión pública es fácil de enseñar porque se puede preparar un caso perfecto. Eso no demuestra que:

- los clientes reales completen el formulario;
- los datos históricos sean utilizables;
- la estimación sobreviva a casos ambiguos;
- el fabricante mantenga las reglas;
- el departamento jurídico permita publicarla;
- el ahorro supere el coste de revisión.

**Es fácil demostrar una conversación. Es difícil demostrar una oferta industrial fiable.**

---

# 2. Dictamen por miembro del comité

## Director comercial de maquinaria especial

El wizard público parece atractivo desde marketing, pero puede empeorar el embudo.

Un comprador serio de una máquina especial suele tener documentación incompleta, contradicciones internas y preguntas todavía sin resolver. No siempre puede contestar dimensiones, tolerancias, calidad, interfaces y cadencia en una sola sesión. Si el wizard exige demasiado, abandona. Si exige poco, la estimación no vale nada.

Además, una cifra temprana produce un anclaje:

- demasiado alta: mata una oportunidad que quizá era viable con otro concepto;
- demasiado baja: crea una expectativa imposible y contamina toda la negociación;
- demasiado amplia: el cliente considera inútil la herramienta.

El supuesto de que “una respuesta instantánea aumenta conversión” no debe entrar en el caso económico hasta demostrarlo. También puede atraer consultas de baja calidad y aumentar el trabajo comercial.

**Veredicto comercial:** el copiloto interno ayuda al comercial. El wizard público obliga al cliente a ayudar al vendedor antes de que exista confianza.

## Ingeniero de ofertas

El problema central no es extraer campos de un PDF. El problema es estimar los elementos que todavía no están definidos:

- horas de ingeniería no recurrente;
- incertidumbre de automatización;
- pruebas y puesta en marcha;
- integración con equipos existentes;
- requisitos de seguridad;
- utillajes;
- tiempos de ciclo no validados;
- costes de proveedores pendientes;
- contingencias de proyecto;
- riesgo de cambios del cliente.

Una máquina de 500.000 euros no es simplemente la suma de componentes encontrados en ofertas anteriores. Dos proyectos aparentemente similares pueden tener riesgos radicalmente distintos.

La IA puede ayudar a identificar información y redactar preguntas. **No puede convertir un proceso comercial no normalizado en un modelo de costes fiable.**

**Veredicto de ofertas:** antes del software debe existir una taxonomía de módulos, factores de coste, supuestos, exclusiones, contingencias y criterios de escalado a ingeniería.

## Director financiero

El ahorro directo puede ser mucho menor de lo que parece.

Ejemplo ilustrativo, no dato de mercado:

- 100 solicitudes relevantes al año;
- 8 horas combinadas de comercial e ingeniería por solicitud;
- coste interno cargado de 90 €/hora.

Coste anual actual:

**100 × 8 × 90 € = 72.000 €**

Con una reducción muy optimista del 40 %:

**ahorro directo = 28.800 € al año**

Un proyecto inicial de 60.000 € no se justifica por ahorro laboral con esos números. Para defenderlo habría que demostrar además:

- menos trabajo en oportunidades sin encaje;
- más ofertas procesadas con la misma plantilla;
- menor tiempo de respuesta;
- menos errores de alcance;
- mejor protección de margen;
- más pedidos ganados.

El CFO no debe valorar estos beneficios como hechos hasta que estén medidos.

La fórmula correcta es:

> **Beneficio anual = ahorro de horas + coste evitado de ofertas inútiles + margen incremental demostrado − coste de errores − mantenimiento − licencias**

No:

> “La IA mejora la conversión y por eso vale 100.000 euros.”

**Veredicto financiero:** muchos fabricantes de 20 a 250 empleados no tendrán suficiente volumen en una sola familia para justificar el sistema. El cliente bueno debe tener un coste anual de preparación de ofertas claramente superior al coste del producto.

## Consultor de software industrial

Esto es, en esencia, una combinación de:

- formulario de RFQ;
- modelo de configuración;
- reglas de costes;
- gestión documental;
- workflow de aprobación;
- integración CRM/ERP;
- trazabilidad;
- una capa de IA para extracción y redacción.

La parte valiosa y difícil no es el chatbot. Es el modelo de configuración y estimación. Cada cliente tendrá módulos, márgenes, criterios y excepciones diferentes. Sin una arquitectura común demostrada en varios clientes, el resultado será una consultoría a medida.

El sistema debe separar estrictamente:

1. **Hechos extraídos** de documentos.
2. **Datos introducidos** por el cliente.
3. **Reglas y precios aprobados** por el fabricante.
4. **Inferencias o sugerencias** de la IA.
5. **Decisiones humanas**.
6. **Versión exacta de precios y reglas** utilizada.

Si estos elementos se mezclan en un texto fluido, no existe auditabilidad.

**Veredicto de software:** no construyas una plataforma multiempresa. Construye primero una herramienta monocliente, monofamilia y en modo sombra.

---

# 3. Riesgo jurídico y de datos

Este no parece, por su finalidad, un caso típico de IA de alto riesgo. Esa es una inferencia, no un dictamen jurídico. Sin embargo, hay obligaciones y riesgos ordinarios que afectan directamente al diseño.

A fecha de julio de 2026, una parte central del AI Act está prevista para aplicarse el **2 de agosto de 2026**. Cuando un sistema de IA interactúa directamente con personas, el artículo 50 exige normalmente informarles de que están interactuando con IA, salvo que resulte evidente. Esto afecta especialmente al wizard público; afecta mucho menos al copiloto puramente interno. ([digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai?utm_source=chatgpt.com))

El GDPR es tecnológicamente neutral. Si los formularios o archivos contienen nombres, correos, firmas, fotografías de personas u otros datos personales, deben aplicarse finalidad definida, minimización, transparencia y periodos de conservación. Recoger “todo por si acaso” sería exactamente la dirección incorrecta. ([commission.europa.eu](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en?utm_source=chatgpt.com))

Tampoco debe suponerse que escribir “estimación no vinculante” elimina todo riesgo. En Alemania, el §145 BGB establece como principio que quien formula una oferta contractual queda vinculado salvo que excluya esa vinculación. Que una salida del wizard sea una mera indicación, una invitación a negociar o una oferta dependerá del lenguaje, los controles y el flujo completo. El §649 BGB regula determinados efectos de un *Kostenanschlag* que sirve de base a un contrato; no se aplica automáticamente a cualquier cifra precontractual mostrada en una web, pero demuestra que la categoría jurídica importa. ([gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__145.html?utm_source=chatgpt.com))

Para una versión pública habría que revisar, como mínimo:

- denominación y redacción exacta de la “Budgetindikation”;
- ausencia de mecanismo de aceptación contractual;
- validez temporal de la estimación;
- supuestos, exclusiones e impuestos;
- identidad de quien revisó y aprobó;
- términos de uso y responsabilidad;
- privacidad, conservación y eliminación;
- subencargados y proveedores de modelos;
- tratamiento de secretos empresariales;
- registro de la versión de reglas y precios.

**La revisión humana no borra la responsabilidad. Solo crea un control adicional.**

---

# 4. Las diez razones más probables de fracaso

## 1. El mercado útil es demasiado estrecho

La empresa debe estar en un punto muy concreto:

- suficientemente compleja para sufrir en las ofertas;
- suficientemente repetitiva para poder modelarlas;
- sin tener ya un configurador o CPQ adecuado.

Los fabricantes totalmente a medida son demasiado variables. Los fabricantes muy estandarizados posiblemente ya tienen configuradores, listas de precios o ERP bien organizados.

## 2. El conocimiento está en personas, no en datos

Las hojas de cálculo, BOM, ofertas antiguas y datos de ERP no contienen necesariamente:

- por qué se eligió una solución;
- qué riesgo se añadió;
- qué parte era negociación;
- qué se excluyó;
- qué cambió posteriormente;
- qué coste real terminó teniendo el proyecto.

Digitalizar documentos no equivale a capturar criterio técnico.

## 3. El volumen de ofertas no soporta la inversión

Una empresa que prepara diez o veinte ofertas complejas al año puede tener mucho dolor, pero poco ahorro repetible. El sistema se convierte en una herramienta cara utilizada una vez al mes.

## 4. La revisión humana consume casi el mismo tiempo

El sistema puede generar una ficha elegante, pero el ingeniero seguirá necesitando:

- leer los documentos;
- comprobar todas las dimensiones;
- validar el concepto;
- consultar a proveedores;
- cuestionar supuestos;
- rehacer la estimación.

En ese caso no se elimina trabajo: se añade una nueva salida que debe revisarse.

## 5. Los clientes no completan el wizard ni cargan información sensible

El cliente puede preferir enviar su especificación habitual por correo. Además, un fabricante nuevo y sin referencias pide desde el primer contacto fotografías, planos y datos de producción. Esa barrera de confianza es enorme.

## 6. Una cifra incorrecta daña margen o credibilidad

Un precio bajo puede sobrevivir durante meses en correos, actas y discusiones internas aunque esté claramente marcado como no vinculante. Un precio alto puede eliminar una oportunidad sin que el fabricante llegue a conocerla.

## 7. Nadie mantiene reglas y precios

Los sistemas de estimación no se mantienen solos. Hay que actualizar:

- tarifas internas;
- precios de módulos;
- costes de proveedores;
- horas estándar;
- márgenes;
- contingencias;
- recargos;
- monedas;
- fechas de validez.

Sin propietario de datos, el producto se degrada silenciosamente.

## 8. Integración y seguridad se comen el proyecto

El piloto comienza como extracción de documentos y termina incluyendo:

- SAP o ERP;
- CRM;
- SharePoint o DMS;
- SSO;
- permisos;
- almacenamiento europeo;
- auditoría;
- escaneo de malware;
- gestión de archivos CAD;
- despliegue local;
- copias de seguridad;
- soporte.

El margen desaparece antes de validar el valor principal.

## 9. No existe un comprador único

Ventas obtiene velocidad. Ingeniería aporta conocimiento. Finanzas controla márgenes. IT asume riesgos. Dirección paga. Ninguno posee por sí solo problema, datos, presupuesto y decisión.

Sin un patrocinador ejecutivo y un responsable operativo, el proyecto queda atascado entre departamentos.

## 10. Cada implantación es distinta y nunca aparece el producto

Si cada cliente necesita un esquema de RFQ diferente, un motor de reglas diferente, integraciones diferentes y una interfaz diferente, se ha creado una consultora de software a medida.

Eso puede ser un negocio válido, pero no es el producto escalable que sugiere la idea.

---

# 5. Condiciones mínimas para que un fabricante sea buen cliente

El número de empleados debe utilizarse solo como filtro secundario. Las siguientes condiciones son más importantes.

## Condiciones no negociables

### 1. Una familia claramente delimitada

Debe existir una familia con variantes acotadas: por ejemplo, una célula robotizada repetible, un banco de pruebas modular, una estación de montaje o una solución de manipulación con opciones conocidas.

“Fabricamos cualquier máquina que el cliente necesite” es una exclusión, no una propuesta de valor.

### 2. Volumen económico suficiente

Para la familia seleccionada debe existir al menos una de estas situaciones:

- aproximadamente **1.000 horas anuales** de trabajo comercial y técnico antes del pedido;
- un coste anual interno de preparación y cualificación superior a **75–100 k€**;
- suficiente volumen y margen como para demostrar otros beneficios económicos equivalentes.

No es obligatorio tener cientos de ofertas, pero las horas y el coste deben existir.

### 3. Presupuesto parcialmente modelable

Como mínimo:

- alrededor del **70 % de la indicación inicial** debe poder explicarse mediante módulos, reglas, factores o fórmulas;
- la parte incierta debe poder expresarse como contingencia, rango o escalado obligatorio a ingeniería;
- las excepciones no pueden dominar la mayoría de los casos.

### 4. Datos mínimos utilizables

Para un piloto serio:

- unas **30 ofertas recientes comparables**;
- al menos **10 proyectos ejecutados** con algún contraste entre estimación y coste real;
- tarifas internas actuales;
- listas o modelos de módulos;
- información sobre revisiones, cambios y exclusiones;
- posibilidad de identificar qué datos estaban disponibles en el momento de la estimación.

No se necesita entrenar un modelo predictivo. Se necesita validar reglas y resultados.

### 5. Propietario de la lógica de oferta

Una persona con autoridad debe poder decidir:

- qué regla es válida;
- qué precio está vigente;
- qué margen se aplica;
- qué caso exige revisión;
- qué campos son obligatorios;
- qué salida puede enviarse.

Un comité sin responsable no sirve.

### 6. Disponibilidad operativa

El cliente debe comprometer aproximadamente:

- un responsable de ventas/ofertas;
- acceso limitado a ingeniería y controlling;
- varias horas semanales durante el piloto;
- revisión de casos históricos;
- validación de reglas y resultados.

La expectativa de “te damos 500 PDF y vuelves con el sistema terminado” es motivo para rechazar el proyecto.

### 7. Caso económico previo

Antes de construir, deben medirse:

- número de solicitudes;
- horas por solicitud;
- tiempo hasta primera respuesta;
- porcentaje descartado;
- tiempo de revisión;
- errores o retrabajo;
- coste interno.

Sin línea base no puede demostrarse ROI.

### 8. Aceptación de alcance limitado

El cliente debe aceptar:

- una sola familia;
- uso interno inicialmente;
- sin precio vinculante;
- sin respuesta automática;
- sin promesa de medir dimensiones desde fotografías;
- sin integración ERP profunda en la primera fase.

### 9. Viabilidad de seguridad y datos

Debe existir una arquitectura aceptable para ambos:

- almacenamiento y retención acordados;
- permisos por usuario;
- proveedores aprobables;
- separación entre clientes;
- registros de auditoría;
- eliminación documentada;
- tratamiento seguro de archivos.

### 10. Presupuesto real

Debe estar dispuesto a pagar por diagnóstico y piloto. Una empresa que solo acepta una prueba gratuita probablemente no valora suficientemente el problema o no dispone de presupuesto.

---

# 6. Criterios concretos para continuar

## Validación comercial

Continuar solo si, tras conversaciones cualificadas con el mercado:

- al menos **8 de 20** fabricantes describen el problema como frecuente y cuantificable;
- al menos **4** aceptan mostrar muestras anonimizadas de RFQ y ofertas;
- al menos **2** pagan por una fase de diagnóstico o prueba histórica;
- existe un comprador identificable, no solo usuarios interesados;
- la necesidad aparece entre los tres problemas operativos prioritarios del responsable.

“Suena interesante” no cuenta. Una reunión de demostración tampoco.

## Validación histórica

Sobre al menos 20–30 solicitudes antiguas de una misma familia:

- **0 hechos críticos inventados**;
- más del **90 % de campos obligatorios** correctamente extraídos o marcados como ausentes;
- más del **85 % de ausencias críticas** detectadas;
- trazabilidad de cada dato hasta su documento o regla;
- el rango generado contiene la estimación humana aprobada en al menos el **80 %** de los casos;
- el rango no es tan amplio que resulte comercialmente inútil;
- las reglas producen el mismo resultado al ejecutarse de nuevo con la misma versión de datos.

Una estimación “correcta” sin trazabilidad no es aceptable.

## Validación operativa

Durante un piloto en modo sombra:

- reducción mínima del **50 % en tiempo de preparación inicial**;
- reducción mínima del **30 % en esfuerzo total previo a la reunión o estimación**;
- utilización en al menos el **70 % de los casos elegibles**;
- correcciones recurrentes convertibles en reglas, no correcciones totalmente diferentes en cada caso;
- mantenimiento de datos inferior a unas pocas horas al mes por familia;
- aprobación real por parte de los ingenieros de ofertas, no solo por dirección.

## Validación financiera

Continuar si:

- el beneficio anual conservador es al menos **dos veces el coste recurrente**;
- el coste total del primer año puede recuperarse aproximadamente en **12 meses**;
- el caso económico funciona sin depender exclusivamente de un supuesto aumento de conversión;
- el coste esperado de un error está controlado mediante rangos, bloqueos y revisión.

## Validación de producto

Productizar solo cuando:

- al menos **dos clientes pagan**;
- ambos utilizan el mismo núcleo funcional;
- puede reutilizarse al menos el **70 %** de esquema, workflow, interfaz y arquitectura;
- las diferencias se concentran en datos y reglas configurables, no en nuevo desarrollo;
- uno de los clientes amplía o continúa después del piloto.

Antes de eso, existe un proyecto, no un producto.

---

# 7. Criterios para modificar la idea

## El análisis de requisitos funciona, pero el precio no

Eliminar la estimación presupuestaria del producto inicial.

Vender:

- estructuración de RFQ;
- detección de información ausente;
- generación de cuestionario;
- identificación de riesgos y supuestos;
- preparación de reunión;
- creación de oportunidad CRM.

Este producto es menos atractivo en una demo, pero mucho más seguro.

## El cliente tiene datos pobres, pero mucho dolor

Convertir la primera oferta en un servicio de:

- normalización de familias;
- taxonomía de módulos;
- reglas de oferta;
- limpieza de datos;
- análisis de desviaciones estimado-real.

El software viene después.

## El portal público no obtiene adopción

Permitir que el cliente siga enviando correo, PDF y Excel. El comercial carga o reenvía el material al copiloto interno.

No intentes cambiar simultáneamente el proceso del comprador y el del fabricante.

## La integración domina el esfuerzo

Empezar con:

- carga manual;
- exportación Excel o PDF;
- enlace o borrador CRM;
- ninguna escritura automática en ERP.

La integración completa solo se justifica después de probar el ahorro.

## Los proyectos tienen poco volumen, pero alto valor

Abandonar el modelo de producto recurrente y vender consultoría de oferta, configuración y automatización por proyecto.

Eso puede generar ingresos, pero debe nombrarse correctamente.

---

# 8. Criterios para abandonar

## Abandonar la estimación automática si:

- menos del 60–70 % del presupuesto inicial puede expresarse mediante reglas;
- la estimación sigue exigiendo la misma consulta a ingeniería y proveedores;
- el rango útil acierta en menos del 70 % de los casos históricos;
- aparecen omisiones técnicas críticas en más del 5 % de los casos;
- la revisión humana ahorra menos del 25 % del tiempo;
- la lógica cambia sustancialmente para cada proyecto.

## Abandonar la idea como producto si:

- después de unas **30 conversaciones cualificadas** nadie paga por diagnóstico;
- ningún prospecto cumple simultáneamente volumen, repetibilidad y datos;
- cada piloto exige más del 50 % de desarrollo específico;
- el coste de seguridad, despliegue e integración supera el valor del núcleo;
- el beneficio anual conservador es inferior al coste del primer año;
- los clientes quieren la demostración, pero no entregan datos, responsable ni presupuesto;
- solo se puede vender prometiendo una precisión que no puede medirse;
- el cliente exige precios públicos desde el primer día.

No hay que “perseverar” ante estas señales. Hay que cerrar la hipótesis.

---

# 9. Versión inicial seleccionada

## Versión 2: copiloto interno

Pero con un alcance más estrecho que la idea original.

### Debe hacer

1. Recibir correos, formularios internos y documentos.
2. Extraer datos a un esquema estructurado.
3. Mostrar la fuente exacta de cada dato.
4. Marcar contradicciones y campos ausentes.
5. Generar preguntas adicionales.
6. Proponer módulos exclusivamente desde un catálogo aprobado.
7. Calcular un rango mediante reglas deterministas.
8. Mostrar supuestos, exclusiones, contingencias y versión de precios.
9. Bloquear la salida si faltan campos críticos.
10. Preparar una ficha para el comercial y un borrador de oportunidad CRM.
11. Requerir aprobación explícita.
12. Registrar todas las correcciones para mejorar reglas.

### No debe hacer

- Hablar directamente con el cliente.
- Enviar correos automáticamente.
- Publicar una cifra en la web.
- Inferir precios mediante lenguaje generativo.
- Medir dimensiones fiables desde fotografías.
- usar ofertas históricas como “verdad” sin validarlas;
- cubrir varias familias;
- escribir directamente en ERP;
- prometer precisión antes de una prueba histórica;
- convertirse desde el principio en plataforma multiempresa.

### Papel correcto de la IA

La IA puede:

- extraer;
- clasificar;
- resumir;
- comparar;
- redactar;
- localizar contradicciones;
- sugerir preguntas.

La IA no debe:

- fijar costes;
- decidir márgenes;
- inventar módulos;
- aprobar supuestos;
- decidir que una solución es técnicamente viable.

### Secuencia comercial recomendable

1. **Diagnóstico pagado:** proceso, volumen, datos, reglas y caso económico.
2. **Prueba histórica pagada:** 20–30 oportunidades anteriores.
3. **Piloto en modo sombra:** casos nuevos, sin afectar al cliente.
4. **Despliegue interno limitado:** una familia y usuarios concretos.
5. **Modelo híbrido:** solo después de demostrar métricas.
6. **Wizard público:** únicamente si la familia se comporta prácticamente como un producto configurable.

Una hipótesis razonable para empezar sería un diagnóstico de aproximadamente **4–8 k€** y un piloto de **15–30 k€**, ajustados al alcance y a los datos. No ofrecería un piloto gratuito: el trabajo difícil consiste precisamente en entender y estructurar el proceso del cliente.

# Decisión final

**Empieza por el copiloto interno.**

No construyas ahora el wizard público. No construyas todavía el híbrido completo. No vendas “IA para presupuestar máquinas”.

Vende una mejora medible de la preparación de ofertas para una familia concreta, con reglas aprobadas, trazabilidad y revisión humana.

Construir la versión pública ahora probablemente produciría una demo impresionante que ningún fabricante serio confiaría en poner delante de sus clientes. El copiloto interno permite demostrar valor sin arriesgar precio, margen ni reputación. Solo después de obtener datos reales y dos pilotos pagados habrás ganado el derecho a desarrollar el modelo híbrido.
