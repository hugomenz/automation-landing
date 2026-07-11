# Selección del nicho y familia de máquinas

> Fuente original convertida a Markdown. Utilizar como contexto, no como copy público sin revisión.

# Conclusión ejecutiva

El asistente encaja mejor en fabricantes **configure-to-order** —soluciones compuestas principalmente por módulos, opciones y reglas conocidas— que en fabricantes **engineer-to-order**, donde cada proyecto exige demostrar de nuevo la viabilidad técnica.

La idea no es igualmente válida para todos los segmentos. La cualificación técnica puede aportar valor en casi todos, pero la **estimación presupuestaria automática** solo es prudente cuando existen módulos, precios y límites técnicos suficientemente estables. Esto coincide con la hipótesis planteada: usar exclusivamente datos aprobados, no inventar precios, producir una estimación no vinculante y mantener la aprobación humana. fileciteturn0file0

Mi priorización es:

1. **Fabricantes de equipos configurables**, como arquetipo transversal.
2. **Equipos de final de línea**.
3. **Maquinaria de packaging**, especialmente packaging secundario.

**Transportadores** quedan muy cerca en cuarto lugar: técnicamente son incluso más fáciles de parametrizar, pero en muchos casos el ahorro de ingeniería y la disposición a pagar serán menores.

El primer piloto recomendado es una familia muy delimitada de **células robotizadas de paletizado de cajas o bandejas cerradas**. Aunque las células robotizadas genéricas no puntúan especialmente alto, el paletizado estandarizado sí se comporta como un producto modular de final de línea.

---

# Contexto de mercado y límites de la conclusión

Baden-Württemberg es un territorio razonable para prospectar: el estado se presenta como el mayor emplazamiento industrial de Alemania y el Maschinenbau representa el 22,1 % del empleo industrial, su principal campo de especialización. Eso facilita encontrar empresas objetivo, pero no demuestra que quieran comprar este producto. ([wm.baden-wuerttemberg.de](https://wm.baden-wuerttemberg.de/de/wirtschaft/wirtschaftsstandort-bw/wirtschaftspolitik/wirtschaftsbereiche))

El packaging presenta una base empresarial atractiva. La asociación VDMA correspondiente agrupa a más de 320 empresas, principalmente medianas, que representan más del 80 % de las ventas del sector. VDMA indica además que la producción alemana de maquinaria alimentaria y de packaging alcanzó aproximadamente 17.000 millones de euros en 2025. ([vdma.org](https://www.vdma.org/en/nahrungsmittelmaschinen-verpackungsmaschinen?redirect=%2Fen%2Fsharep-test%3Fp_p_id%3Dcom_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_V0CeYFTJ4OhB%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_r_p_assetEntryId%3D143080382%26p_r_p_resetCur%3Dfalse%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_V0CeYFTJ4OhB_cur%3D0))

También existe una actividad robótica relevante: Alemania fue en 2024 el mayor mercado de robots industriales de Europa, con 26.982 instalaciones y un 32 % del total europeo. Sin embargo, **demanda de robots no significa repetibilidad de ofertas**; muchas células siguen siendo proyectos altamente específicos. ([ifr.org](https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years))

Existe evidencia adyacente —no específica de maquinaria— de que la rapidez y precisión de las ofertas influyen en el éxito comercial, y de que la identificación manual de productos adecuados a partir de RFQ constituye un cuello de botella. Apoya el mecanismo de valor, pero no valida por sí sola el mercado objetivo. ([conf.researchr.org](https://conf.researchr.org/details/icse-2025/icse-2025-software-engineering-in-practice/15/Leveraging-MLOps-Developing-a-Sequential-Classification-System-for-RFQ-Documents-in-))

Finalmente, el contexto comercial no es especialmente expansivo. VDMA describe el Maschinenbau de Baden-Württemberg como estancado y señala que la incertidumbre continúa frenando la confianza. Eso aumenta el interés por la eficiencia, pero también significa que será difícil vender una iniciativa genérica de “IA”: habrá que demostrar ahorro operativo concreto y bajo riesgo. ([vdma.org](https://www.vdma.org/en/economic-situation))

---

# Metodología de puntuación

Las puntuaciones son **hipótesis direccionales**, no datos estadísticos del mercado. Una empresa concreta puede desviarse fácilmente uno o dos puntos según su catálogo, volumen de consultas y madurez de datos.

Para los nueve primeros criterios:

- **1** = muy desfavorable.
- **10** = muy favorable.

Para “riesgo de estimación incorrecta”:

- **1** = riesgo bajo.
- **10** = riesgo alto.

El índice final es una media simple de los diez factores, invirtiendo el riesgo mediante `11 − riesgo`. No he aplicado ponderaciones para evitar una precisión artificial.

## Factores comerciales

| Segmento | Consultas | Tiempo de ingeniería de ventas | Valor de responder rápido | Capacidad de pago | Acceso al decisor |
|---|---:|---:|---:|---:|---:|
| Maquinaria de packaging | 8 | 9 | 9 | 9 | 7 |
| Células robotizadas | 8 | 9 | 8 | 8 | 8 |
| Sistemas de manipulación | 7 | 8 | 8 | 7 | 8 |
| Equipos de montaje | 6 | 10 | 7 | 9 | 7 |
| Sistemas de inspección | 7 | 8 | 8 | 8 | 8 |
| Transportadores | 7 | 6 | 7 | 6 | 8 |
| Equipos de final de línea | 8 | 8 | 9 | 8 | 8 |
| Máquinas de procesamiento | 7 | 9 | 7 | 9 | 7 |
| Integradores de automatización | 9 | 10 | 9 | 7 | 9 |
| Fabricantes de equipos configurables | 8 | 8 | 9 | 8 | 8 |

## Factores técnicos y de datos

| Segmento | Repetibilidad | Módulos estándar | Rango calculable | Históricos utilizables | Riesgo de error ↓ | Índice favorable |
|---|---:|---:|---:|---:|---:|---:|
| **Fabricantes de equipos configurables** | 10 | 10 | 9 | 9 | 3 | **8,7** |
| **Equipos de final de línea** | 9 | 9 | 8 | 8 | 4 | **8,2** |
| **Maquinaria de packaging** | 8 | 8 | 8 | 8 | 5 | **8,0** |
| Transportadores | 9 | 10 | 9 | 9 | 3 | **7,9** |
| Sistemas de manipulación | 7 | 8 | 7 | 7 | 5 | **7,3** |
| Células robotizadas | 6 | 7 | 6 | 7 | 6 | **7,2** |
| Sistemas de inspección | 6 | 7 | 6 | 6 | 7 | **6,8** |
| Integradores de automatización | 4 | 5 | 4 | 6 | 8 | **6,6** |
| Equipos de montaje | 5 | 6 | 5 | 6 | 7 | **6,5** |
| Máquinas de procesamiento | 5 | 6 | 5 | 7 | 8 | **6,5** |

---

# Interpretación por segmento

## 1. Fabricantes de equipos configurables — 8,7

Es el mejor perfil, aunque no sea un sector vertical independiente. Un fabricante configurable tiene variantes de tamaño, velocidad, alimentación, protección, control y accesorios, pero conserva una arquitectura común.

El asistente puede:

- Identificar una configuración inicial.
- Detectar incompatibilidades entre opciones.
- Seleccionar módulos.
- Aplicar reglas de coste.
- Calcular una banda presupuestaria.
- Escalar las excepciones a ingeniería.

La etiqueta “configurable” no basta. El candidato debe poder demostrar que una parte sustancial de la solución procede de módulos realmente reutilizables, no de modelos CAD copiados que después se rediseñan por completo.

## 2. Equipos de final de línea — 8,2

Es el mejor segmento de aplicación. Incluye paletizado, encajado, cerrado de cajas, etiquetado, enfardado, envolvedoras, dispensadores de palés y combinaciones de estos módulos.

Sus ventajas son:

- Entradas relativamente fáciles de estructurar.
- Arquitecturas recurrentes.
- Accesorios y opciones identificables.
- Alto valor de una respuesta rápida.
- Proyectos con suficiente importe para justificar la inversión.
- Posibilidad de excluir explícitamente los casos anómalos.

El riesgo aparece con productos deformables, cargas inestables, múltiples formatos simultáneos, velocidades extremas, espacio insuficiente o interfaces complejas.

## 3. Maquinaria de packaging — 8,0

Es un segmento atractivo, pero demasiado amplio para abordarlo como una sola categoría.

La primera aproximación debería centrarse en:

- Packaging secundario.
- Formado y cerrado de cajas.
- Encajado.
- Agrupado.
- Etiquetado.
- Cambios de formato parametrizados.
- Máquinas con una plataforma claramente reconocible.

Dejaría inicialmente fuera:

- Dosificación y llenado dependientes del comportamiento del producto.
- Asepsia.
- Aplicaciones farmacéuticas validadas.
- Packaging primario de materiales difíciles.
- Procesos en los que la capacidad solo se conoce tras realizar pruebas.

En packaging, el material de envase, la fricción, rigidez, sellabilidad, tolerancias y comportamiento a velocidad pueden invalidar una estimación aparentemente correcta. Por eso puntúa algo peor en riesgo que final de línea.

## 4. Transportadores — 7,9

Son posiblemente el caso más sencillo desde el punto de vista técnico:

- Metros de línea.
- Número de curvas y transferencias.
- Tipo de producto.
- Carga.
- Velocidad.
- Acumulación.
- Número de zonas.
- Estructura y soportes.
- Control y sensórica.

El inconveniente comercial es que algunas ofertas ya se calculan con hojas de cálculo, CAD paramétrico o configuradores existentes. Si el proceso actual solo consume treinta minutos, un nuevo asistente tiene poco valor.

Sería un buen **piloto técnico de bajo riesgo**, pero no necesariamente el mejor primer caso comercial.

## 5. Sistemas de manipulación — 7,3

Son atractivos cuando se limitan a aplicaciones como:

- Pick-and-place repetitivo.
- Elevadores.
- Volteadores.
- Alimentación de piezas bien orientadas.
- Portales cartesianos.
- Transferencias entre estaciones.

Pierden puntuación cuando aparecen:

- Piezas a granel.
- Geometrías variables.
- Bin picking.
- Superficies delicadas.
- Productos flexibles.
- Grippers completamente personalizados.
- Tiempos de ciclo no demostrados.

## 6. Células robotizadas genéricas — 7,2

Tienen muchas consultas, alto coste de ingeniería y una buena capacidad de pago. Sin embargo, la estimación suele depender de:

- Estudio de ciclo.
- Alcance y singularidades.
- Diseño de garra.
- Visión.
- Seguridad.
- Interfaces con máquinas existentes.
- Accesibilidad y mantenimiento.
- Simulación.

Por ello no elegiría como segmento inicial a un integrador que afirma hacer “cualquier aplicación robotizada”. Sí elegiría una empresa que vende repetidamente **una aplicación robotizada concreta**, como paletizado, carga de CNC o soldadura de una familia homogénea.

## 7. Sistemas de inspección — 6,8

La cualificación es valiosa, pero el presupuesto puede ser engañoso. El cliente rara vez describe adecuadamente:

- El defecto mínimo relevante.
- La variabilidad aceptable del producto bueno.
- La tasa tolerada de falsos rechazos.
- Condiciones de iluminación.
- Acabados superficiales.
- Velocidad y tiempo de exposición.
- Requisitos de trazabilidad.

Para muchas aplicaciones, el paso correcto no es producir un presupuesto completo, sino determinar si se necesita primero un **estudio de viabilidad con muestras**. El asistente puede clasificar y preparar ese estudio, pero no debería asumir que una cámara, óptica e iluminación determinadas resolverán el problema.

## 8. Integradores de automatización — 6,6

Es el caso paradójico: tienen probablemente el mayor dolor comercial, pero uno de los peores ajustes para la estimación.

Un integrador generalista recibe muchas consultas incompletas y consume muchas horas en preventa. Un asistente podría mejorar mucho:

- La recogida de requisitos.
- La clasificación.
- El no-bid temprano.
- La preparación de reuniones.
- La creación de oportunidades en CRM.

Pero una estimación presupuestaria fiable es difícil porque cambia el alcance de mecánica, electricidad, software, seguridad, visión, robótica e integración.

Para ellos podría existir un producto de **cualificación sin estimación**, pero sería una propuesta distinta de la planteada.

## 9. Equipos de montaje — 6,5

El ahorro potencial es alto porque las ofertas consumen mucha ingeniería. El problema es que las variables críticas suelen ser específicas:

- Tolerancias de componentes.
- Estrategia de alimentación.
- Fuerzas de inserción.
- Prensado.
- Atornillado.
- Soldadura.
- Control de proceso.
- Trazabilidad.
- Accesibilidad.
- Capacidad estadística.

Una estación aparentemente parecida puede requerir otra arquitectura debido a una pequeña diferencia en el producto. Sería un segmento posterior, una vez demostrado el sistema en familias más repetibles.

## 10. Máquinas de procesamiento — 6,5

La capacidad de pago es buena y existen fabricantes con catálogos consolidados, pero “procesamiento” es demasiado amplio. Temperatura, presión, viscosidad, humedad, tiempo de residencia, limpieza, desgaste, composición del producto y escalado pueden dominar la solución.

Solo sería atractivo cuando la empresa vende una plataforma muy madura con parámetros bien delimitados. No lo elegiría como primer mercado general.

---

# Los tres segmentos seleccionados

## 1. Fabricantes de equipos configurables

Debe utilizarse como **filtro transversal**. La mejor cuenta objetivo es, por ejemplo, un fabricante de final de línea configurable, no un fabricante configurable en abstracto.

Requisitos mínimos recomendados:

- Arquitectura común entre proyectos.
- Lista clara de módulos y opciones.
- Reglas de compatibilidad.
- Costes actuales por módulo.
- Horas de ingeniería parametrizables.
- Proyectos comparables.
- Capacidad para definir exclusiones.

## 2. Equipos de final de línea

Es el mejor equilibrio entre repetibilidad, importe de proyecto, tiempo de preventa y riesgo controlable.

Subfamilias prioritarias:

- Paletizado.
- Encajado.
- Formado y cerrado de cajas.
- Enfardado y envoltura.
- Etiquetado integrado.
- Combinaciones modulares de estos equipos.

## 3. Maquinaria de packaging

Priorizaría packaging secundario y fabricantes con plataformas configurables. No empezaría por llenado, dosificación o procesos críticos de producto.

## Candidato alternativo: transportadores

Los transportadores son la alternativa más fácil si el objetivo prioritario fuera demostrar técnicamente el motor de reglas. Antes de seleccionarlos habría que comprobar que el proceso de oferta actual consume suficiente trabajo como para generar retorno.

Si se excluye “fabricantes de equipos configurables” por ser un arquetipo horizontal y no una aplicación, los tres verticales son:

1. Final de línea.
2. Packaging.
3. Transportadores.

---

# Primer piloto recomendado

## Familia: células robotizadas de paletizado de cajas y bandejas cerradas

El piloto no debería cubrir todo tipo de paletizado. Debe empezar con un sobre técnico restringido.

### Alcance incluido

- Cajas de cartón o bandejas rígidas y cerradas.
- Producto con dimensiones y peso conocidos.
- Producción por lotes de un SKU.
- Patrones de paletizado predefinidos o seleccionables.
- Uno o dos puntos de recogida.
- Uno o dos puestos de palé.
- Entorno industrial seco.
- Palés EUR/EPAL u otros tamaños previamente aprobados.
- Cerramiento estándar o escáneres de seguridad según reglas existentes.
- PLC, HMI e interfaces de señal previamente definidas.
- Opciones modulares como dispensador de palés, almacén de separadores o transportadores.

### Exclusiones iniciales

- Paletizado mixto aleatorio.
- Sacos, productos blandos o deformables.
- Cargas abiertas o con contenido móvil.
- Productos extremadamente frágiles.
- Visión 3D o bin picking.
- ATEX.
- Cleanroom.
- Diseño higiénico o washdown.
- Aplicaciones farmacéuticas validadas.
- Varias líneas de alta velocidad sincronizadas.
- Proyectos que requieran simulación antes de seleccionar robot o arquitectura.
- Restricciones de espacio que obliguen a desarrollar una cinemática no estándar.

### Datos que debe recoger el wizard

1. Dimensiones, peso, fotografías y rigidez del embalaje.
2. Ritmo actual, objetivo y posible ampliación.
3. Número de formatos y frecuencia de cambio.
4. Tamaños de palé y altura máxima.
5. Patrones y orientación de las cajas.
6. Uso de separadores, bandejas o cantoneras.
7. Altura, dirección y velocidad de entrada.
8. Dirección de retirada del palé terminado.
9. Plano o medidas del espacio disponible.
10. Entorno, temperatura, polvo, humedad y requisitos de limpieza.
11. Estándar eléctrico, PLC e interfaces.
12. Requisitos de seguridad.
13. Alcance de instalación, FAT, SAT y formación.
14. País y lugar de instalación.
15. Plazo deseado.

### Modelo presupuestario

La estimación debería descomponerse de forma auditable:

`módulo base + clase de robot + gripper + alimentación + gestión de palés + seguridad + control + opciones + ingeniería + montaje/puesta en marcha + logística + reserva de riesgo aprobada`

Los históricos servirían para validar horas, factores y reservas, pero no deberían utilizarse copiando el precio final de un proyecto antiguo. Ese precio puede contener descuentos, condiciones de compra obsoletas, inflación, horas no registradas o pérdidas comerciales.

### Salida del asistente

- Requisitos estructurados.
- Configuración candidata.
- Módulos incluidos.
- Opciones alternativas.
- Supuestos.
- Información pendiente.
- Riesgos técnicos.
- Exclusiones.
- Banda presupuestaria no vinculante.
- Nivel de confianza.
- Motivos de escalado a ingeniería.
- Recomendación de siguiente paso.

Ningún resultado debería enviarse automáticamente al cliente sin revisión del comercial o ingeniero de ventas.

---

# Empresa objetivo

## Tamaño recomendado

El mercado amplio sigue siendo **20–250 empleados**, conforme al contexto definido. Para el primer piloto estrecharía el foco a:

### Sweet spot: 40–150 empleados

Normalmente ofrece el mejor equilibrio hipotético entre:

- Volumen suficiente de proyectos.
- Existencia de ingeniería de ventas.
- Datos y documentación acumulados.
- Capacidad presupuestaria.
- Acceso relativamente directo a dirección.
- Menor carga de compras, IT y compliance que una gran corporación.

### Empresas de 20–40 empleados

Solo serían prioritarias cuando:

- Tienen una familia muy estandarizada.
- El propietario participa directamente en ventas.
- Reciben bastantes consultas repetitivas.
- Una sola persona representa un cuello de botella claro.

### Empresas de 150–250 empleados

Pueden tener más volumen y capacidad de pago, pero también:

- IT y seguridad más formalizadas.
- ERP/CRM complejos.
- Varias divisiones y propietarios del proceso.
- Compras corporativas.
- Ciclos de decisión más largos.

En este rango conviene limitar el piloto a una unidad de negocio o familia de producto, no intentar transformar todo el proceso comercial.

El número de empleados es menos importante que cuatro variables: **consultas por familia, horas de preventa, modularidad y calidad de datos**.

---

# Cargos compradores

## Comprador económico

En empresas pequeñas:

- **Geschäftsführer**.
- **Geschäftsführender Gesellschafter**.
- **Inhaber**.

En empresas medianas:

- **Vertriebsleiter / Head of Sales**.
- **Leiter Geschäftsbereich**.
- **Commercial Director**.
- En algunos casos, **Technischer Geschäftsführer**.

Su interés principal será capacidad comercial, velocidad, coste de preventa y conversión, no la arquitectura técnica.

## Champion interno

El mejor promotor suele ser:

- **Leiter Vertriebstechnik**.
- **Head of Application Engineering**.
- **Leiter Projektierung**.
- **Teamleiter Kalkulation**.
- Ingeniero sénior de ventas que concentra conocimiento y revisa muchas consultas.

Esta persona sufre directamente el problema y puede proporcionar las reglas reales.

## Aprobadores técnicos

- **Technischer Leiter**.
- **Konstruktionsleiter**.
- **Leiter Automation/Elektrokonstruktion**.
- **Produktmanager**.
- Responsable de seguridad de máquinas, cuando proceda.

Deben aprobar límites, reglas, exclusiones y motivos de escalado.

## Gatekeepers

- IT.
- Datenschutz.
- Informationssicherheit.
- Responsable de CRM/ERP.
- Qualitätsmanagement, en sectores regulados.

No suelen ser el comprador inicial, pero pueden bloquear el proyecto si se introducen documentos de clientes, planos o datos de precios sin un modelo claro de permisos y almacenamiento.

---

# Señales de necesidad

Las siguientes cifras son **umbrales propuestos para prospección**, no datos observados del mercado.

| Señal | Interpretación |
|---|---|
| Al menos 5–10 consultas mensuales dentro de una misma familia | Existe volumen para amortizar la automatización |
| Más de 1–2 horas de trabajo técnico por consulta inicial | Hay ahorro material posible |
| Varios días para entregar una primera indicación | La velocidad tiene valor comercial |
| Clientes envían correos, PDF, fotos y planos incompletos | El asistente puede estructurar entradas |
| Los ingenieros repiten siempre las mismas preguntas | Es posible convertir conocimiento en un wizard |
| Cálculo actual mediante Excel, Word y experiencia personal | Existe un proceso automatizable, aunque antes deberá normalizarse |
| Hay módulos, opciones y configuraciones recurrentes | Hace posible una estimación basada en reglas |
| Existen al menos 20–30 ofertas comparables | Hay suficiente material para iniciar la codificación y validación |
| Una o dos personas concentran el conocimiento de presupuestación | Hay un cuello de botella visible |
| Las ofertas difieren según quién las prepara | Existe valor en consistencia y gobernanza |
| Se descartan tarde consultas poco viables | La cualificación temprana puede ahorrar ingeniería |
| Alto volumen de solicitudes internacionales o multilingües | La interpretación documental aporta valor adicional |
| Dirección quiere mejorar ventas sin contratar inmediatamente más ingenieros | Existe una motivación económica concreta |
| CRM recibe oportunidades poco estructuradas | La salida normalizada aporta valor operativo |

La señal más potente no es “utilizan IA”, sino esta combinación:

> Muchas consultas parecidas + demasiado trabajo técnico inicial + módulos conocidos + respuesta lenta.

---

# Señales de descarte

## Descarte fuerte

- Cada proyecto parte prácticamente de cero.
- Menos de la mitad del coste puede asociarse a módulos u horas parametrizables.
- La viabilidad depende siempre de pruebas, muestras, simulación o prototipo.
- No existen precios actuales, reglas ni históricos mínimamente fiables.
- Los históricos solo contienen precios de venta finales, sin alcance ni desglose.
- La empresa espera una oferta exacta y vinculante generada automáticamente.
- No acepta revisión humana.
- No puede definir qué casos deben bloquearse o escalarse.
- Quiere que la IA “deduzca” precios ausentes.
- El posible piloto mezcla varias familias de máquinas.
- El responsable técnico no tiene tiempo ni voluntad para codificar conocimiento.
- No existe propietario interno del proceso.

## Descarte económico

- Muy pocas consultas relevantes al mes.
- El cálculo actual ya tarda menos de treinta minutos.
- Las consultas se convierten casi siempre directamente en reuniones técnicas.
- El importe y margen de las operaciones no justifican mejorar la preventa.
- Ya existe un configurador que resuelve satisfactoriamente la cualificación y el presupuesto.
- El problema real no es la preparación de ofertas, sino la falta de demanda.

## Descarte temporal para el primer piloto

- Pharma validado.
- Alimentación aséptica.
- ATEX.
- Inspección de defectos desconocidos sin muestras.
- Procesos térmicos, químicos o fluidos sin modelos probados.
- Líneas de montaje con tolerancias y procesos nuevos.
- Integración brownfield compleja.
- Células robotizadas de propósito completamente general.

Estos casos no tienen que quedar excluidos para siempre; simplemente son malos candidatos para demostrar inicialmente que el modelo funciona.

---

# Decisión recomendada

El ICP inicial más preciso sería:

> **Fabricante alemán de 40–150 empleados, preferentemente en Baden-Württemberg, que venda una familia modular de equipos de final de línea o packaging secundario, reciba consultas repetitivas con documentación incompleta y dedique varias horas de ingeniería a producir una primera banda presupuestaria.**

El comprador económico sería el **Geschäftsführer o Vertriebsleiter**; el champion, el **Leiter Vertriebstechnik o Application Engineering**.

El primer piloto debería cubrir únicamente:

> **Células de paletizado robotizado de cajas o bandejas rígidas, con arquitectura, opciones y exclusiones previamente definidas.**

La promesa comercial no debería ser “un asistente de IA” ni “automatización con n8n”, sino:

> **Convertir consultas incompletas en requisitos revisables y una indicación presupuestaria consistente, basada exclusivamente en reglas y datos aprobados, sin sustituir la decisión del ingeniero de ventas.**

La validación debe comenzar entrevistando empresas de final de línea, packaging y transportadores y solicitando que reconstruyan contigo dos o tres ofertas reales anonimizadas. El criterio decisivo no será su entusiasmo por la idea, sino si pueden convertir su conocimiento de presupuestación en reglas estables y si el tiempo ahorrado tiene valor económico suficiente.
