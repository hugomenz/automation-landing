# Investigación de competidores y alternativas

> Fuente original convertida a Markdown. Utilizar como contexto, no como copy público sin revisión.

# Investigación de mercado: CPQ industrial, automatización de RFQ y estimación de maquinaria

**Actualizada al 11 de julio de 2026.**

El análisis está orientado al caso concreto de un consultor independiente en Stuttgart, con experiencia combinada en maquinaria especial, ingeniería mecánica, desarrollo web y automatización, que busca vender inicialmente a fabricantes e integradores alemanes de entre 20 y 250 empleados. La hipótesis es un asistente de cualificación técnica y estimación presupuestaria, no un sistema que emita ofertas vinculantes de forma autónoma. fileciteturn0file0

## Conclusión ejecutiva

**Sí existe un hueco, pero no es un mercado vacío ni un “CPQ industrial barato”.**

El mercado ya está muy cubierto en sus extremos:

- En la parte superior hay plataformas CPQ industriales maduras —Tacton, camos, encoway, Configit, SAE, ORISA, Siemens— capaces de gestionar reglas, variantes, precios, documentación, CAD, BOM, ERP y portales.
- En la parte inferior hay formularios, CRM, Excel y automatizaciones genéricas.
- También están surgiendo competidores directos de AI-RFQ, como Booma, Graip, Kleio o Synera.

El hueco más defendible está **entre esos tres grupos**:

> **Transformar solicitudes técnicas incompletas, correos, documentos y fotografías en una ficha de requisitos revisable, formular preguntas pendientes y calcular un rango presupuestario mediante reglas y datos aprobados, sin exigir inicialmente una implantación CPQ empresarial.**

Este hueco es especialmente relevante para fabricantes pequeños y medianos que:

1. Tienen una familia de equipos parcialmente repetible.
2. Pierden tiempo aclarando solicitudes incompletas.
3. Todavía no tienen un modelo CPQ formal.
4. Pueden expresar al menos parte de su conocimiento mediante módulos, factores de coste, rangos, exclusiones y reglas.
5. Quieren conservar la aprobación de un comercial o ingeniero de ventas.

La oportunidad es, por tanto, **más sólida como servicio especializado de consultoría e implementación que como SaaS horizontal desde el primer día**.

---

## 1. Cómo está dividido actualmente el mercado

| Capa de mercado | Qué automatiza bien | Qué suele exigir |
|---|---|---|
| **CPQ industrial completo** | Configuración válida, pricing, ofertas, BOM, visualización, CAD y transferencia a ERP | Catálogo modular, restricciones, reglas, precios y procesos formalizados |
| **CPQ de CRM** | Oportunidades, productos, descuentos, aprobaciones, documentos, contratos y revenue lifecycle | Productos y reglas comerciales razonablemente estructurados |
| **AI-RFQ / AI quotation** | Lectura de correos, PDF, Excel, especificaciones y extracción de campos | Un ERP, catálogo, material master o lógica de precios al que mapear la información |
| **Cost engineering** | Costes bottom-up a partir de CAD, BOM, procesos o modelos de fabricación | Geometría, BOM o parámetros de proceso estructurados |
| **Formularios y automatización genérica** | Captura, notificaciones, sincronización y creación de oportunidades | La lógica técnica tiene que programarse o ejecutarse manualmente |
| **Comercial o ingeniero humano** | Ambigüedad, excepciones, negociación, confianza y juicio técnico | Tiempo, experiencia individual y disponibilidad |

Una investigación de VDMA y Strategy& publicada en 2025 analizó 45 casos de uso de IA generativa y encuestó a 247 empresas de maquinaria en la región DACH. Solo el 29 % había implantado al menos un proyecto de IA generativa. El estudio estima potencial económico relevante en procesos centrales, incluidos ventas y marketing, pero también describe una adopción todavía oportunista. Esto indica interés y espacio de mejora, aunque **no demuestra por sí solo disposición a pagar por esta solución concreta**. ([vdma.eu](https://www.vdma.eu/documents/34570/4888559/Studie_GenAI-Implications_Web_DE.pdf))

Fraunhofer ITWM señala además que los configuradores de maquinaria compleja pueden contener conjuntos extensos de reglas y restricciones que requieren validación formal y técnicas de constraint solving. En otras palabras: la IA puede interpretar una solicitud desordenada, pero no elimina la necesidad de formalizar la lógica que determina qué configuración es técnicamente válida. ([itwm.fraunhofer.de](https://www.itwm.fraunhofer.de/de/abteilungen/optimierung/produktionsplanung-steuerung-operations-research/produkte-konfigurieren.html))

### Escala utilizada en las tablas

- **Estandarización alta:** requiere módulos, reglas, restricciones y datos maestros formales.
- **Media:** admite entradas desestructuradas, pero necesita procesos repetibles y una lógica aprobada para producir un resultado fiable.
- **Baja:** puede capturar o extraer información con poca estructura, aunque no puede calcular por sí sola una configuración o precio fiable.

“Precio no público” significa que **no encontré una cifra numérica en las páginas oficiales revisadas**. No significa que el proveedor no facilite una oferta privada.

---

# 2. Plataformas CPQ y configuradores industriales

## 2.1 Proveedores alemanes y europeos especializados

| Proveedor | Qué resuelve, mercado, posicionamiento, integraciones y precio | Fortalezas, limitaciones y diferencia frente a una solución personalizada |
|---|---|---|
| **Tacton** — Suecia/global | CPQ industrial para fabricantes de productos complejos: guided selling, configuración basada en restricciones, pricing, propuestas, visualización, autoservicio y automatización de diseño. Vende principalmente a fabricantes globales de maquinaria, vehículos y equipos configurables. Integra SAP, Salesforce, Microsoft Dynamics, Oracle, HubSpot, PIM, ERP y otras aplicaciones mediante APIs y su capa de integración. **Estandarización: alta. Precio: por contacto; sin cifra pública.** ([global.tacton.com](https://global.tacton.com/solutions/industrial-manufacturing/)) | **Fortalezas:** motor industrial maduro, validación de configuraciones, canales de venta y escalabilidad internacional. **Limitaciones:** proyecto importante de modelado, integración y gobierno de producto. **Frente a n8n personalizado:** Tacton gana claramente en reglas, administración, auditoría y escala; una solución ligera puede ganar en velocidad, entrada documental desestructurada y ajuste a una sola familia. |
| **Configit** — Dinamarca/global | Configit Ace gestiona variantes y reglas a lo largo del ciclo de vida; Configit Quote cubre el proceso comercial. Se posiciona como una fuente única y consistente de verdad de configuración para productos extremadamente complejos. Ofrece APIs e integración con PLM, ERP, CAD y CPQ, incluidos ecosistemas SAP, Salesforce, Oracle, Microsoft y PTC. Ace Prompt emplea IA para transformar hojas, capturas y documentos en modelos iniciales de configuración. **Estandarización: alta. Precio: no público.** ([configit.com](https://configit.com/configit-ace/)) | **Fortalezas:** coherencia de variantes entre ventas, ingeniería y producción; validación de modelos complejos. **Limitaciones:** orientado a programas de gestión de configuración, no solo a captar solicitudes web. **Frente a una implementación ligera:** la personalización evita implantar una capa completa de lifecycle configuration, pero no ofrece el mismo gobierno ni validación global. |
| **camos** — Stuttgart, Alemania | CPQ para maquinaria, instalaciones y bienes de equipo: selección, configuración, guided selling, pricing, cálculo de costes, documentos, visualización y autoservicio. Su módulo de cálculo contempla costes de materiales, fabricación, ingeniería y proyectos ETO. Arquitectura abierta con XML, SQL, SOA y servicios web; integración con SAP, Salesforce, Microsoft Dynamics, CRM, PLM, CAD y ERP. Ofrece también una variante “CPQ Compact” para empresas medianas. **Estandarización: alta. Precio: no público.** ([camos.de](https://www.camos.de/en/cpq-solution/camos-cpq/configure-product-configuration-with-camos-cpq-365)) | **Fortalezas:** gran proximidad al caso de maquinaria especial, conocimiento industrial alemán y funciones de costing. **Limitaciones:** sigue siendo un proyecto CPQ formal, con preparación de datos y reglas. **Frente a una solución personalizada:** camos es un competidor muy serio cuando el cliente quiere CPQ sostenible a largo plazo; la opción ligera encaja mejor como pre-CPQ o piloto limitado. |
| **encoway** — Bremen, Alemania | CPQ industrial, guided selling, configuradores web, 3D, generación de ofertas y portales para clientes o distribuidores. Orientado a bienes de equipo y productos con gran diversidad de variantes. Puede operar de forma independiente o integrado con SAP, Salesforce y Microsoft Dynamics; también ofrece conexiones con PLM, CAD y EPLAN. **Estandarización: alta. Precio: no público.** ([encoway.de](https://www.encoway.de/)) | **Fortalezas:** ecosistema industrial alemán, canales indirectos y configuradores públicos maduros. **Limitaciones:** el cliente debe transformar conocimiento técnico en un modelo mantenible. **Frente a n8n:** encoway domina en configuración de variantes y portales industriales; una solución a medida puede atacar solo la cualificación inicial, sin sustituir el catálogo o ERP. |
| **SAE Applications / Xait** — Alemania/internacional | CPQ y gestión de variantes para maquinaria y bienes de equipo: configuración basada en reglas, guided selling, visualización 3D, pricing, documentos y procesos de aprobación. Integra SAP R/3 y S/4HANA, proALPHA, PSIpenta, Dynamics, Salesforce, SAP C4C, Teamcenter, EPLAN, NX, SolidWorks, Creo y otros sistemas. SAE pasó a formar parte de Xait en mayo de 2026. **Estandarización: alta. Precio: no público.** ([sae-portal.de](https://www.sae-portal.de/en)) | **Fortalezas:** cobertura muy completa entre venta, variantes, documentación y sistemas de ingeniería. **Limitaciones:** complejidad de implantación y dependencia de un modelo formal de producto. **Frente a una implementación ligera:** SAE/Xait resulta superior para industrialización completa; la solución personalizada puede entrar antes, sobre datos incompletos y con alcance reducido. |
| **CAS Merlin CPQ** — Karlsruhe, Alemania | CPQ modular con guided selling, configuración, precios, ofertas y asistentes de “augmented intelligence”. Cubre modelos ETO, CTO y ATO y vende a fabricantes de productos complejos. Integra CRM, ERP y PLM, con conectores para Salesforce, SAP y Microsoft. **Estandarización: media-alta. Precio: no público.** ([cas-merlin.de](https://www.cas-merlin.de/)) | **Fortalezas:** proximidad regional, enfoque modular y comunicación centrada en asistencia al usuario, no solo automatización. **Limitaciones:** aun así necesita conocimiento de producto estructurado. **Frente a una solución personalizada:** compite directamente en clientes que prefieren una plataforma mantenible; el desarrollo a medida puede ofrecer un flujo y una interfaz mucho más estrechos. |
| **ORISA CREALIS** — Alemania | Configuración multinivel, listas de materiales, pricing, documentos de oferta y gestión de conocimiento de producto. Está especialmente orientado a maquinaria, instalaciones y automatización. Integra SAP VC/IPC, Salesforce, SAP CRM, Microsoft Dynamics, ERP, PIM, PDM y CAD. CREALIS Cloud dispone de niveles Basic, Advanced y Enterprise, sin cifras públicas. **Estandarización: alta.** ([orisa.de](https://www.orisa.de/en)) | **Fortalezas:** experiencia en reglas, conocimiento de producto, SAP y alojamiento alemán. **Limitaciones:** su propia documentación subraya la importancia de una base PDM o de producto bien organizada. **Frente a una solución personalizada:** CREALIS es más sólido como sistema central; n8n y una UI ligera pueden evitar esa transformación inicial, pero trasladan el mantenimiento a código y servicios propios. |
| **4PACE 3PQ** — Alemania | Combina configuración de producto, elaboración de ofertas, visualización 3D, cálculos de dimensionamiento y comercio electrónico. Permite colaboración entre cliente y equipo comercial. Se conecta con ERP, CRM, PIM, CAD y PLM mediante interfaces estandarizadas y puede usar su propio motor de pricing o el ERP. **Estandarización: alta. Precio: no público.** ([4pace.com](https://4pace.com/en/solutions/cpq-configuration/product-configuration/)) | **Fortalezas:** especialmente interesante cuando el cálculo técnico y la selección dimensional son parte central de la venta. **Limitaciones:** creación y mantenimiento de modelos, cálculos y activos 3D. **Frente a una solución personalizada:** 4PACE es mejor para una experiencia configuradora rica; el enfoque ligero puede priorizar extracción documental y presupuesto sin modelado 3D. |
| **Elfsquad** — Países Bajos | CPQ low-code y gestionable por usuarios de negocio para fabricantes customer-specific. Cubre configuración de producto y proyecto, guided selling, portales y visualización. Se posiciona como una alternativa más accesible a CPQ empresariales tradicionales. Es API-first e integra Dynamics 365, Business Central, Salesforce, Odoo, Exact, Ridder iQ, PLM y Power Automate. Comercializa un único plan, pero no publica la cifra. **Estandarización: media-alta.** ([elfsquad.io](https://www.elfsquad.io/cpq-software/)) | **Fortalezas:** uno de los competidores más cercanos para empresas medianas; administración low-code y buena capacidad de integración. **Limitaciones:** sigue necesitando un modelo de configuración; no se centra principalmente en interpretar fotos y especificaciones ambiguas. **Frente a una solución personalizada:** Elfsquad gana cuando el cliente necesita mantener el configurador internamente; el desarrollo propio gana cuando el flujo documental o las excepciones son muy particulares. |
| **DriveWorks** — Reino Unido | Automatización de diseño y CPQ estrechamente ligados a SOLIDWORKS. Genera configuraciones, precios, dibujos, modelos CAD, listas de materiales y datos de fabricación para productos “same but different”. Integra SQL, ODBC, APIs, servicios web, Salesforce, SYSPRO y SOLIDWORKS PDM. DriveWorksXpress está incluido gratuitamente con SOLIDWORKS; Solo ofrece prueba y Pro se cotiza por contacto. **Estandarización: alta, especialmente geométrica.** ([driveworks.co.uk](https://www.driveworks.co.uk/)) | **Fortalezas:** automatiza directamente entregables de ingeniería, no solo la oferta. **Limitaciones:** fuerte dependencia de SOLIDWORKS y de geometrías parametrizables. **Frente a n8n:** DriveWorks es superior cuando el resultado debe incluir CAD y BOM; la solución ligera sirve mejor cuando el problema prioritario es decidir qué información falta antes de diseñar. |
| **Siemens Teamcenter Rulestream** — Alemania/global | Automatización de sales engineering y order engineering para entornos ETO. Captura reglas de ingeniería y genera paquetes de licitación, modelos 3D, planos, BOM, rutas y documentación de fabricación. Integración estrecha con Teamcenter y herramientas CAD, además de interfaces abiertas hacia ERP y CRM. **Estandarización: alta, aunque soporte productos ETO. Precio: no público.** ([siemens.com](https://www.siemens.com/en-us/products/teamcenter/solutions/product-configuration-management/)) | **Fortalezas:** probablemente la cobertura más profunda de ingeniería de pedido entre las soluciones revisadas. **Limitaciones:** escala, inversión y complejidad propias de un entorno PLM empresarial. **Frente a una solución personalizada:** no compiten realmente por el mismo primer proyecto; Rulestream es destino de transformación, mientras que el asistente ligero puede ser una solución departamental o un paso previo. |

---

## 2.2 CPQ empresarial integrado en CRM o ERP

| Proveedor | Qué resuelve, comprador, integraciones y precio | Fortalezas, limitaciones y diferencia frente a una solución personalizada |
|---|---|---|
| **SAP CPQ** | Configuración, pricing, propuestas, guided selling y procesos quote-to-order para organizaciones que ya utilizan SAP. Se integra con SAP S/4HANA, CRM, Commerce, ERP, DocuSign y Adobe, entre otros. **Estandarización: alta. Precio: no se publicó una cifra numérica en las páginas revisadas.** ([sap.com](https://www.sap.com/products/financial-management/cpq.html)) | **Fortalezas:** coherencia con datos, precios y procesos SAP. **Limitaciones:** paisaje SAP, consultoría e integración; no está diseñado principalmente para entender una solicitud técnica libre. **Diferencia:** una solución ligera puede convivir como front-end de precualificación y entregar datos estructurados a SAP. |
| **Salesforce Revenue Cloud** | CPQ y gestión integral del ciclo de ingresos dentro de Salesforce: configuración, ofertas, contratos, pedidos, suscripciones y billing según edición. Los precios publicados consultados son aproximadamente **150 €/usuario/mes para Growth y 200 €/usuario/mes para Advanced**, con facturación anual; la implantación y otros productos pueden añadir coste. **Estandarización: media-alta.** ([salesforce.com](https://www.salesforce.com/eu/sales/revenue-lifecycle-management/product-configurator-software/)) | **Fortalezas:** experiencia CRM unificada, automatización comercial y ecosistema amplio. **Limitaciones:** reglas de maquinaria, viabilidad técnica y cálculo de ingeniería deben modelarse adicionalmente. **Diferencia:** una app estrecha puede generar el dossier técnico y dejar que Salesforce gestione oportunidad, aprobaciones y seguimiento. |
| **Oracle CPQ** | Selección, configuración, pricing, cotización, aprobaciones y pedidos para ventas empresariales. Dispone de conectividad con Oracle ERP, JD Edwards, SAP, Infor LN, Microsoft y otros ERP, además de APIs REST. **Estandarización: alta. Precio: no público.** ([oracle.com](https://www.oracle.com/webfolder/technetwork/tutorials/tutorial/cloud/cpq/releases/23C/23C-cpq-nfs.htm)) | **Fortalezas:** quote-to-order empresarial y cobertura multicanal. **Limitaciones:** generalista y orientado a organizaciones grandes. **Diferencia:** el desarrollo ligero puede especializarse en la fase de descubrimiento técnico; Oracle gana en operaciones, gobierno y escala. |
| **Epicor CPQ** | CPQ visual para productos complejos, con 2D, 3D, AR/VR, generación de CAD, BOM y documentos. Puede funcionar con Epicor ERP o de forma independiente e integra Salesforce, Teamcenter, Magento y otros sistemas mediante REST. **Estandarización: alta. Precio: no público.** Epicor publicó su versión 2026.1 en junio de 2026. ([epicor.com](https://www.epicor.com/en/products/digital-commerce/cpq/)) | **Fortalezas:** visualización y automatización CAD/BOM dentro de una plataforma comercial. **Limitaciones:** esfuerzo de creación de modelos y activos. **Diferencia:** el enfoque personalizado evita construir una experiencia 3D completa, pero tampoco proporciona un configurador visual reutilizable. |
| **Cincom CPQ** | Configuración, pricing, guided selling, BOM, documentos y visualización para productos industriales complejos, incluidas bombas, válvulas, equipos y maquinaria. Integra Salesforce, Microsoft Dynamics, Oracle, SAP, CAD, ERP, PLM y comercio electrónico. **Estandarización: alta. Precio: por contacto.** ([cincom.com](https://www.cincom.com/cpq/)) | **Fortalezas:** amplitud funcional y larga experiencia en fabricación compleja. **Limitaciones:** solución empresarial generalista; posible sobredimensionamiento para una pyme y una familia de máquinas. **Diferencia:** la personalización compite en foco y coste inicial, no en amplitud. |
| **Zilliant CPQ / In Mind Cloud** | CPQ especializado en fabricación y combinado con optimización de precios. In Mind Cloud fue adquirido por Zilliant en 2023. Cubre guided selling, visualización, estimación dinámica de costes y autoservicio, con integración SAP y Salesforce. **Estandarización: alta. Precio: no público.** ([zilliant.com](https://zilliant.com/press-releases/zilliant-acquires-in-mind-cloud-to-deliver-full-pricing-lifecycle-capabilities-with-cpq-purpose-built-for-manufacturing)) | **Fortalezas:** une CPQ industrial con disciplina de pricing. **Limitaciones:** necesita datos de costes, precios y productos suficientemente maduros. **Diferencia:** un piloto personalizado puede funcionar con tablas sencillas y rangos aprobados; Zilliant es superior cuando se busca optimización de precios a escala. |
| **Experlogix CPQ** | CPQ no-code integrado especialmente con Dynamics 365 y Salesforce: guided selling, reglas, pricing, documentos, firma y portales; puede generar BOM y rutas para fabricación. También dispone de integración con Power Platform. **Estandarización: alta. Precio: no público.** ([marketplace.microsoft.com](https://marketplace.microsoft.com/en-us/product/dynamics-365/experlogix.a0edac83-bac4-4847-a68f-3301cbe32503?tab=overview)) | **Fortalezas:** muy buen encaje en organizaciones Microsoft o Salesforce. **Limitaciones:** semántica de maquinaria y extracción de documentación deben añadirse. **Diferencia:** una solución a medida puede usar Dynamics solo como destino, manteniendo fuera la lógica técnica especializada. |

### Lectura de este bloque

Las suites de CRM no son malos competidores: muchas pueden gestionar perfectamente la oportunidad y el documento comercial. El problema es que **“crear una oferta” y “entender si una máquina propuesta es viable” son actividades diferentes**. La oportunidad para la solución ligera está en producir información técnica suficientemente buena para que el CRM pueda continuar el proceso.

---

# 3. AI-RFQ, extracción de requisitos y AI quotation

Este bloque es el más importante porque contiene los competidores conceptualmente más cercanos.

| Proveedor | Qué resuelve, comprador, integraciones, estandarización y precio | Fortalezas, limitaciones y diferencia frente a una solución personalizada |
|---|---|---|
| **Booma AI** — Alemania | Analiza RFP, RFQ y especificaciones en PDF, Word y Excel; atomiza requisitos, crea matrices de cumplimiento, compara versiones y reutiliza conocimiento. Vende a organizaciones que responden a licitaciones y documentación técnica compleja. Ofrece exportación a Excel, SSO, nube privada e integraciones personalizadas según nivel. Publica niveles Starter, Professional y Enterprise, pero no importes; declara alojamiento alemán y opciones privadas. **Estandarización: baja para extraer, alta o no cubierta para calcular precios.** ([booma.ai](https://www.booma.ai/pricing)) | **Fortalezas:** documentos desestructurados, trazabilidad, requisitos y cumplimiento. **Limitaciones:** no es por sí mismo un motor de configuración o cálculo presupuestario de maquinaria. **Diferencia:** una solución personalizada puede combinar extracción con reglas concretas de una familia de máquinas; Booma ofrece un producto documental más horizontal y maduro. |
| **Graip.AI** — Europa | Automatiza RFQ, pedidos y documentos recibidos por correo, PDF o Excel. Extrae campos, mapea referencias de cliente contra material master, valida configuración, precios y disponibilidad y transfiere el resultado al ERP o CPQ, con gestión humana de excepciones. Integra SAP S/4HANA, ECC, Business One, SAP CPQ, AVC, LO-VC y otros entornos como Oracle, Dynamics y Salesforce; en 2026 también documentó integración con n8n. Precio flexible o por volumen, sin cifra pública. **Estandarización: media-alta.** ([graip.ai](https://graip.ai/de/diskrete-fertigung)) | **Fortalezas:** flujo empresarial RFQ-to-order, SAP y procesamiento de volúmenes elevados. **Limitaciones:** encaja mejor cuando ya existen material master, configurador o ERP que puedan validar la solicitud. **Diferencia:** el enfoque personalizado puede trabajar antes de que existan números de artículo o una configuración definida; Graip es superior para automatizar transacciones repetitivas sobre datos maestros maduros. |
| **Kleio.ai** | Plataforma emergente que combina captura conversacional de requisitos técnicos, knowledge engine, recomendación de configuración, pricing, RFQ, ofertas y seguimiento. Integra ERP como SAP, Oracle, Dynamics e Infor, además de PIM y CRM. No publica precio. **Estandarización: media-alta.** ([kleio.ai](https://www.kleio.ai/industry/manufacturing-and-industrial)) | **Fortalezas:** es uno de los competidores más próximos a la idea completa: cualificación, conocimiento técnico y oferta. **Limitaciones:** la evidencia pública sobre implantaciones concretas en maquinaria es limitada; la propia página indica que ciertas referencias están bajo confidencialidad. Las cifras de mejora publicadas deben tratarse como afirmaciones comerciales. **Diferencia:** un consultor local puede ofrecer transparencia del flujo, propiedad del código y un piloto mucho más específico; Kleio ofrece una plataforma ya productizada. |
| **Synera** — Alemania | Plataforma de automatización de ingeniería con agentes de IA y workflows deterministas. Presenta agentes para supervisión y evaluación de RFQ, concepto, producto y costing, conectados a herramientas CAx y PLM. Ofrece más de 75 integraciones de ingeniería, elección de modelos y despliegues que protegen la propiedad intelectual. Precio por contacto. **Estandarización: media-alta.** ([synera.io](https://www.synera.io/)) | **Fortalezas:** combina IA con automatización real de ingeniería y herramientas existentes. **Limitaciones:** plataforma de transformación de ingeniería, no simplemente un wizard de ventas; mayor complejidad y dependencia de entornos CAx. **Diferencia:** el desarrollo ligero cubre la primera fase comercial sin automatizar todo el engineering workflow. |
| **DigiFabster** | Cotización instantánea para mecanizado CNC, chapa, impresión 3D y talleres. Su agente puede recibir un RFQ por correo, extraer material, cantidades, CAD y plazo, aplicar tarifas y procesos del taller y dejar la oferta para aprobación humana. Dispone de API, webhooks, CRM, pagos y e-commerce. Ofrece prueba; en páginas revisadas aparecen add-ons y comisiones de procesamiento, aunque el precio base completo no quedó expuesto de forma consistente. **Estandarización: media dentro de procesos soportados.** ([digifabster.com](https://digifabster.com/products/ai-quote-agent/)) | **Fortalezas:** demuestra que el flujo “correo y CAD → cálculo → revisión humana” funciona como producto en un vertical bien delimitado. **Limitaciones:** está orientado a fabricar piezas, no a seleccionar y presupuestar sistemas de maquinaria. **Diferencia:** es una referencia estratégica para verticalizar, no un sustituto directo. |
| **Paperless Parts** — Estados Unidos | Cotización de piezas y trabajos de fabricación: análisis geométrico, setup, costing, pricing, colaboración y workflow para CNC, chapa, fabricación aditiva y conjuntos. Integra distintos ERP de taller, HubSpot, Salesforce y QuickBooks. Precio personalizado y no por usuario. En la página revisada, su disponibilidad comercial se limita a Norteamérica, Australia y Nueva Zelanda. **Estandarización: media y altamente vertical.** ([paperlessparts.com](https://www.paperlessparts.com/facts/)) | **Fortalezas:** producto maduro para ventas técnicas en fabricación de piezas. **Limitaciones:** no está disponible actualmente como solución estándar para Alemania y no resuelve maquinaria completa. **Diferencia:** valida que la especialización sectorial crea más valor que un “AI quotation” genérico. |
| **Luminovo** — Múnich, Alemania | Vertical RFQ/CPQ para EMS y electrónica: importación y limpieza de BOM, sourcing, precios de proveedores, cálculo de costes, colaboración, oferta final y portal. Integra prácticamente cualquier ERP mediante API o CSV y conecta con decenas de distribuidores y proveedores de PCB. Precio no público. **Estandarización: media-alta, basada en BOM.** ([luminovo.com](https://luminovo.com/platform/quoting-intelligence)) | **Fortalezas:** excelente ejemplo europeo de producto vertical que une datos técnicos y oferta. **Limitaciones:** específico de electrónica, donde BOM y componentes están más estructurados que en una solicitud de máquina especial. **Diferencia:** enseña que la oportunidad no está en una plataforma genérica, sino en codificar profundamente un dominio. |
| **aPriori** | Plataforma de cost engineering que calcula costes y manufacturabilidad a partir de CAD 3D, procesos y modelos de fábrica digital. Cubre mecanizado, fundición, chapa, moldeo, forja, aditiva y electrónica; integra PLM como Windchill y Teamcenter. Tiene niveles comerciales, sin importes publicados. **Estandarización: alta en CAD y procesos.** ([apriori.com](https://www.apriori.com/pricing/)) | **Fortalezas:** costing bottom-up mucho más riguroso que una estimación basada en LLM. **Limitaciones:** no resuelve la conversación inicial con el comprador ni el coste de un sistema completo a partir de requisitos ambiguos. **Diferencia:** una implementación ligera puede producir un presupuesto top-down; aPriori es más apropiado para validar costes de componentes y fabricación. |
| **FACTON EPC** — Alemania | Enterprise Product Costing para quotation costing, design costing, should-costing y costes estándar. Integra Excel, ERP, CAD, PLM/PDM, Windchill y Power BI. Precio no público. **Estandarización: alta.** ([facton.com](https://www.facton.com/)) | **Fortalezas:** gobierno del coste, comparabilidad y disciplina financiera industrial. **Limitaciones:** no es un portal de captación ni un guided-selling assistant. **Diferencia:** FACTON puede ser fuente de datos de coste para un front-end personalizado; el front-end no reemplaza su gobierno de costes. |

## Conclusión específica sobre “AI quotation”

Actualmente existen al menos cuatro categorías distintas bajo la misma etiqueta:

1. **IA para leer RFQ y especificaciones:** Booma, Graip.
2. **IA conversacional para selección y venta:** Kleio.
3. **Agentes y workflows de ingeniería:** Synera.
4. **Cotización automática vertical basada en CAD o BOM:** DigiFabster, Paperless Parts, Luminovo y aPriori.

Por tanto, “AI quotation” es un posicionamiento demasiado genérico. Una oferta nueva tendría que especificar:

- para qué familia de maquinaria;
- qué tipo de archivos interpreta;
- qué decisiones puede tomar;
- de dónde sale el precio;
- qué información considera desconocida;
- cuándo escala a un ingeniero;
- y qué entrega exactamente al CRM o ERP.

---

# 4. Agencias, consultoras e integradores

| Empresa | Posicionamiento e integraciones | Fortalezas, limitaciones y diferencia para un independiente |
|---|---|---|
| **Dr. Wüpping Consulting** — Alemania | Consultoría neutral en modularización, gestión de variantes, configuración de producto, complejidad y procesos CPQ. Trabaja desde la arquitectura modular hasta la selección e implantación de sistemas. Precio no público. ([wuepping.com](https://wuepping.com/en/en-about-us/)) | **Fortaleza:** método industrial y experiencia en transformar conocimiento de producto. **Limitación:** programas de consultoría más amplios que un pequeño asistente. **Para un independiente:** competidor en diagnóstico y estrategia; diferenciación posible mediante prototipo funcional rápido e integración directa. |
| **valantic** — Alemania/DACH | Gran integrador de SAP CPQ y procesos end-to-end. Implementa guided selling, precios procedentes de ERP, documentos, aprobaciones y firma mediante servicios como DocuSign. Precio de consultoría no público. ([valantic.com](https://www.valantic.com/de/cx/technologien/sap-customer-experience/sap-cpq/)) | **Fortaleza:** capacidad SAP, escala y soporte empresarial. **Limitación:** coste y complejidad poco adecuados para un primer piloto pequeño. **Para un independiente:** no competir por una transformación SAP completa; entrar donde el cliente aún no justifica ese proyecto. |
| **msg** — Alemania/DACH | Consultoría e implantación de SAP LO-VC, AVC, SAP CPQ y CRM a lo largo del ciclo de variantes. Ofrece evaluación, arquitectura, diseño, implementación y soporte. Precio no público. ([msg.group](https://www.msg.group/en/industries/manufacturing/variant-configuration-with-sap/)) | **Fortaleza:** conocimiento profundo del ecosistema SAP y de variant management. **Limitación:** enfoque empresarial. **Para un independiente:** posible complementariedad como capa de captación previa; competencia directa solo si se promete sustituir SAP CPQ. |
| **CPQ.se / Sirocco** — Suecia/Europa | Especialista e integrador de Tacton para empresas pequeñas, medianas y grandes, con formación, soporte y paquetes de trabajo. Publica un taller de análisis con precio de referencia de **9.000 €**, y en la página consultada una modalidad online promocionada a **4.500 €**, incluida una prueba limitada. Los importes pueden cambiar. ([cpq.se](https://www.cpq.se/tacton-cpq-consultants)) | **Fortaleza:** especialización CPQ y capacidad de llevar al cliente hacia una plataforma industrial probada. **Limitación:** ligado principalmente al ecosistema Tacton. **Para un independiente:** este precio sirve como indicio de que existe mercado para diagnósticos CPQ pagados, pero no confirma el presupuesto de las pymes objetivo. |
| **Socios n8n como cimt y dotSource** — Alemania | El directorio oficial de n8n incluye socios de servicios. Empresas como cimt y dotSource ofrecen automatización e integración con ERP, CRM, e-commerce y otras aplicaciones. Precios no públicos. ([experts.n8n.io](https://experts.n8n.io/)) | **Fortaleza:** integración, cloud, datos y capacidad de entrega. **Limitación:** normalmente no se posicionan alrededor del conocimiento concreto de sales engineering de maquinaria. **Para un independiente:** la ventaja no puede ser “sé usar n8n”; debe ser entender solicitudes de máquinas, supuestos, riesgos, módulos y estimación. |

### Consecuencia competitiva

Un consultor independiente se encuentra entre dos grupos:

- **Especialistas CPQ**, que saben modelar productos y procesos pero suelen vender proyectos mayores.
- **Agencias de automatización e IA**, que saben conectar aplicaciones pero no necesariamente entienden el contenido técnico.

La combinación de experiencia en ingeniería industrial y capacidad de implementación es una diferenciación real, pero solo se convierte en ventaja comercial cuando se expresa mediante un caso de uso estrecho y entregables concretos.

---

# 5. Comparación con alternativas simples

| Alternativa | Qué hace bien | Qué no resuelve | Precio público o coste |
|---|---|---|---|
| **Formulario web convencional** | Captura campos, consentimientos y solicitudes; puede adjuntar archivos y enviar correos. Muy barato y fácil de entender. | Preguntas adaptativas complejas, extracción documental, detección de contradicciones, reglas técnicas, presupuesto y revisión estructurada. | Hosting y desarrollo; sin precio estándar. |
| **Microsoft Forms** | Adecuado para cuestionarios internos, checklist y recogida de información dentro de Microsoft 365. Permite hasta diez archivos por pregunta y distintos límites de tamaño. | La carga de archivos está restringida a formularios cuyos respondedores pertenecen a la organización o a personas concretas; esto limita su utilidad como RFQ público con documentación externa. No ofrece un motor técnico o de pricing. ([support.microsoft.com](https://support.microsoft.com/de-de/forms/add-questions-that-allow-for-file-uploads-in-microsoft-forms)) | Normalmente incluido en planes Microsoft 365 elegibles; no suele comprarse como plataforma CPQ separada. |
| **Typeform** | Buena UX, lógica condicional, webhooks, integración y formularios públicos. En las páginas consultadas: Basic alrededor de **39 US$/mes**, o equivalente a **28 US$/mes** con pago anual; Plus 79/56 y Business 129/91, con límites de respuestas y usuarios. ([typeform.com](https://www.typeform.com/pricing)) | No interpreta técnicamente archivos, no valida una máquina y no calcula un precio salvo que se programe una lógica externa. El mantenimiento de árboles largos de preguntas puede hacerse difícil. | Bajo para formularios; la automatización y el back-end se pagan aparte. |
| **HubSpot** | CRM, formularios, archivos, oportunidades, automatización, line items, ofertas y seguimiento. Los formularios admiten carga de varios archivos, con un total indicado de 100 MB. HubSpot también ofrece capacidades CPQ en niveles profesionales de su plataforma de revenue. ([knowledge.hubspot.com](https://knowledge.hubspot.com/quotes/create-and-send-quotes)) | No aporta por sí mismo reglas de ingeniería, restricciones mecánicas o cálculo presupuestario de una máquina. | Como referencia, Sales Hub mostraba Starter desde **7 US$/usuario/mes** con pago anual, Professional alrededor de **90 US$/usuario/mes** más onboarding obligatorio de **1.500 US$**, y Enterprise alrededor de **150 US$/usuario/mes**. El paquete necesario para CPQ y otros módulos puede ser distinto. ([hubspot.com](https://www.hubspot.com/pricing/sales)) |
| **Excel** | Fórmulas deterministas, transparencia, sensibilidad, tablas de módulos y rápida adaptación. Suele estar ya disponible y los ingenieros confían en él. | Captación pública, control de versiones robusto, preguntas dinámicas, permisos, trazabilidad entre archivos, seguimiento y experiencia del cliente. Es vulnerable a fórmulas ocultas, copias divergentes y dependencia de una persona. | Licencia existente o Microsoft 365; el coste principal es el mantenimiento y riesgo operativo. |
| **Comercial o ingeniero humano** | Comprende ambigüedad, contexto y excepciones; genera confianza, negocia y detecta riesgos no documentados. | Disponibilidad continua, velocidad, consistencia, escalabilidad y transferencia de conocimiento. La calidad depende de la persona y de su carga de trabajo. | Salario y coste de oportunidad; no existe tarifa universal. |
| **n8n + APIs + interfaz ligera** | Puede unir wizard, correo, almacenamiento, modelos de IA, reglas, documentos, aprobaciones y CRM sin sustituir todo el stack. Los precios publicados de n8n Cloud comienzan aproximadamente en **20 €/mes** para Starter y **50 €/mes** para Pro con pago anual; Business self-hosted se mostraba en **667 €/mes**, y existe Community Edition. ([n8n.io](https://n8n.io/pricing/)) | n8n no es un CPQ, un motor de restricciones ni un modelo de producto. Hay que construir seguridad, autenticación, carga de archivos, reglas, pruebas, versionado, observabilidad, gestión de errores, auditoría, UI y soporte. | La licencia puede ser pequeña; el coste dominante es análisis, implementación, validación y mantenimiento. |

## Qué alternativa simple es realmente el competidor principal

Para muchas pymes, el competidor inicial no es Tacton. Es:

> **Formulario o correo + Excel de cálculo + experiencia del ingeniero + copia manual al CRM.**

Ese proceso puede ser completamente racional cuando:

- llegan pocas solicitudes;
- cada proyecto es esencialmente único;
- la estimación exige siempre una visita;
- el experto tarda poco en evaluar cada RFQ;
- o la empresa no tiene datos suficientes para automatizar.

Una solución personalizada solo aporta valor si reduce una fricción medible que ese proceso simple no resuelve.

---

# 6. ¿Necesita la solución productos muy estandarizados?

## Respuesta matizada

**No necesita productos completamente estandarizados para extraer y organizar requisitos.**

Sí necesita cierta estandarización para:

- recomendar una configuración;
- identificar incompatibilidades;
- estimar costes;
- calcular un presupuesto;
- y automatizar decisiones de forma defendible.

Incluso una máquina especial necesita alguna combinación de:

1. **Esquema de requisitos:** dimensiones, material, rendimiento, calidad, interfaces, espacio, seguridad, plazo.
2. **Factores de coste:** ejes, estaciones, potencia, longitud, robot, visión, tooling, instalaciones, software, validación.
3. **Módulos o bloques recurrentes:** bastidor, alimentación, transporte, proceso, manipulación, control, seguridad.
4. **Reglas de decisión:** qué combinaciones son posibles, incompatibles o requieren revisión.
5. **Datos aprobados:** tarifas, rangos de coste, históricos comparables, fórmulas y contingencias.
6. **Reglas de exclusión:** situaciones en las que no se debe emitir ni siquiera un rango.
7. **Gobierno:** propietario de cada regla, versión, fecha de validez y proceso de aprobación.

El principio fundamental sería:

> **La entrada puede ser desestructurada; la lógica que produce el presupuesto no debe serlo.**

El LLM puede:

- clasificar;
- extraer;
- resumir;
- comparar;
- proponer preguntas;
- mapear expresiones del cliente contra conceptos aprobados.

El LLM no debería:

- inventar un módulo;
- completar silenciosamente una dimensión ausente;
- decidir un precio sin fuente;
- afirmar viabilidad técnica;
- ni enviar una oferta vinculante.

Esto coincide con la hipótesis definida en el contexto: la IA interpreta texto, documentación y fotografías, pero el precio procede exclusivamente de reglas, tablas, módulos, históricos o fórmulas aprobadas y queda sujeto a revisión humana. fileciteturn0file0

---

# 7. Diferencia estructural entre CPQ completo y solución personalizada

| Dimensión | CPQ industrial completo | AI-RFQ horizontal | n8n, APIs e interfaz ligera |
|---|---|---|---|
| Entrada desestructurada | Variable; normalmente secundaria | Buena | Puede ser excelente si se diseña para el caso |
| Motor de restricciones | Maduro | Generalmente limitado | Debe desarrollarse o conectarse |
| Gestión de variantes | Muy fuerte | Débil | Limitada al alcance programado |
| Pricing y costing | Fuerte cuando existen datos estructurados | Normalmente depende de otro sistema | Flexible, pero el cliente debe aprobar toda la lógica |
| CAD, BOM y order engineering | Disponible en plataformas concretas | Normalmente no | No recomendable en un primer piloto |
| Gobierno y versionado | Producto estándar y administrable | Depende del proveedor | Debe construirse expresamente |
| Adaptación a un flujo particular | Puede requerir consultoría | Media | Muy alta |
| Tiempo y alcance inicial | Normalmente mayor | Medio | Bajo o medio si se limita a una familia |
| Dependencia del proveedor | Plataforma | Plataforma | Consultor, código y servicios seleccionados |
| Capacidad de escalar a muchas familias | Alta tras el modelado | Variable | Baja si la arquitectura inicial no se diseña bien |
| Riesgo de sobredimensionamiento | Alto para una pyme pequeña | Medio | Bajo al principio, pero puede aparecer deuda técnica |
| Seguridad y soporte empresarial | Normalmente disponibles | Según proveedor | Responsabilidad directa del implementador y del cliente |

## La diferencia no es simplemente precio

Una implementación personalizada puede ser más barata al principio porque evita funciones que el cliente no necesita. Pero también puede resultar más cara a medio plazo si:

- cada cambio exige programación;
- las reglas no tienen una interfaz de administración;
- una única persona conoce la arquitectura;
- no existen pruebas automatizadas;
- no se registra qué versión de precios produjo cada cálculo;
- o el prototipo acaba convirtiéndose accidentalmente en un CPQ artesanal.

Por eso el diseño debería separar desde el comienzo:

- **extracción mediante IA;**
- **modelo canónico de requisitos;**
- **reglas deterministas;**
- **tablas de precios versionadas;**
- **workflow de aprobación;**
- **integraciones;**
- **presentación al usuario.**

n8n debería orquestar estos componentes, no contener toda la lógica empresarial en nodos dispersos.

---

# 8. ¿Existe un hueco real para un consultor independiente?

## Hechos observados

1. Hay numerosos CPQ industriales capaces de resolver configuración y oferta.
2. Hay consultoras alemanas especializadas en variantes, SAP CPQ y arquitectura modular.
3. Están apareciendo productos de IA para extracción y procesamiento de RFQ.
4. Las soluciones verticales de piezas, electrónica y fabricación demuestran que la automatización funciona mejor cuando el dominio está acotado.
5. La adopción de IA generativa en maquinaria DACH sigue siendo limitada y muchos proyectos permanecen en fases iniciales. ([vdma.eu](https://www.vdma.eu/documents/34570/4888559/Studie_GenAI-Implications_Web_DE.pdf))

## Inferencia de mercado

**Existe un hueco funcional**, porque ninguna de las categorías encaja de forma perfecta con esta combinación:

- pyme de maquinaria;
- solicitud externa y desestructurada;
- una sola familia de equipos;
- preguntas técnicas adaptativas;
- estimación no vinculante;
- datos y reglas aprobados;
- revisión del ingeniero;
- integración con el sistema existente;
- implantación menor que un programa CPQ.

Sin embargo, **no está demostrada todavía la magnitud económica del hueco**. La investigación competitiva prueba que existe una separación entre herramientas, pero no prueba:

- cuántas empresas de Baden-Württemberg sufren suficientemente el problema;
- cuánto tiempo pierden;
- qué volumen de solicitudes tienen;
- qué porcentaje de sus máquinas es repetible;
- ni cuánto pagarían por resolverlo.

En el caso personal descrito, tampoco existen aún clientes, testimonios o casos reales de automatización que reduzcan el riesgo percibido por el comprador. No debería presentarse ningún resultado hipotético como referencia comercial. fileciteturn0file0

## Veredicto por modelo de negocio

| Modelo | Valoración |
|---|---|
| **SaaS horizontal de “AI quotation para industria”** | Poco defendible inicialmente. Demasiado amplio y ya hay competidores con financiación, producto y ecosistema. |
| **CPQ completo hecho a medida** | Riesgo alto. Se acabaría reconstruyendo reglas, administración, auditoría y gobierno que los CPQ existentes ya ofrecen. |
| **Consultoría genérica de n8n/IA** | Mercado concurrido y escasa diferenciación industrial. |
| **Integración de un CPQ existente** | Posible, pero exige especialización y alianzas concretas con proveedores. |
| **Precualificación técnica pre-CPQ para una familia de máquinas** | Mejor oportunidad: alcance comprensible, retorno potencial medible y diferencia clara frente a formularios y CPQ empresarial. |
| **Servicio de “CPQ readiness” más piloto** | Muy adecuado para un independiente: diagnosticar repetibilidad, datos, reglas y proceso antes de prometer automatización. |

### El hueco es real bajo cinco condiciones

1. El cliente recibe solicitudes similares con suficiente frecuencia.
2. Las aclaraciones consumen tiempo medible de ventas o ingeniería.
3. Existe una familia o arquitectura parcialmente repetible.
4. La empresa puede aprobar fuentes de coste, rangos y reglas.
5. Un ingeniero mantiene la responsabilidad final.

### No hay buen encaje cuando

- cada proyecto empieza realmente desde cero;
- no puede darse ningún presupuesto sin visitar la planta;
- las principales variables solo se descubren durante ingeniería detallada;
- el volumen de solicitudes es bajo;
- no existe ninguna disciplina de precios o costes;
- el cliente ya dispone de un CPQ maduro;
- o espera que la IA sustituya el juicio del ingeniero y asuma responsabilidad contractual.

---

# 9. Posicionamiento recomendado

## Posicionamientos que evitaría

- “CPQ con inteligencia artificial”.
- “Automatizamos ofertas industriales”.
- “Cotizaciones instantáneas para cualquier máquina”.
- “Sustituimos al ingeniero de ventas”.
- “n8n para fabricantes”.
- “Chatbot técnico para la web”.

Todos son demasiado amplios, poco diferenciados o generan expectativas peligrosas.

## Posicionamiento más defendible

> **Asistente de precualificación técnica y presupuesto orientativo para una familia de maquinaria: convierte solicitudes, especificaciones y archivos incompletos en una ficha revisable, identifica información pendiente y calcula un rango mediante reglas aprobadas antes de la validación del ingeniero de ventas.**

Una formulación adecuada para el mercado alemán podría ser:

> **Aus unvollständigen Anfragen wird eine prüfbare technische Anforderungsakte mit freigegebenem Budgetrahmen — vor der Freigabe durch den Vertriebsingenieur.**

La promesa no es “tener IA”, sino:

- menos búsquedas y reescritura;
- requisitos más completos;
- supuestos visibles;
- respuesta preliminar consistente;
- conocimiento comercial y técnico menos dependiente de una persona;
- y mejor traspaso al CRM y a ingeniería.

Estos beneficios deben presentarse como objetivos del piloto, no como resultados ya demostrados.

---

# 10. Alcance adecuado del primer piloto

## Incluido

1. Una familia de máquinas o soluciones.
2. Wizard público o interno.
3. Carga segura de documentos e imágenes.
4. Extracción con referencia al archivo y página de origen.
5. Campos “desconocido”, “no confirmado” y nivel de confianza.
6. Preguntas adicionales según información faltante.
7. Ficha estructurada de requisitos.
8. Posibles configuraciones o clases de solución, cuando las reglas lo permitan.
9. Supuestos, exclusiones y riesgos.
10. Presupuesto en rango, basado en fuentes aprobadas.
11. Pantalla de revisión y modificación para el ingeniero.
12. Registro de la versión de reglas y precios utilizada.
13. Exportación a PDF o plantilla interna.
14. Creación de oportunidad y adjuntos en el CRM.
15. Auditoría básica del proceso.

## Excluido inicialmente

- oferta contractual automática;
- precio inventado o generado directamente por el LLM;
- CAD automático;
- BOM de producción;
- planificación de capacidad;
- cálculo fino de tiempos de ingeniería;
- configuración de todas las familias;
- envío autónomo sin aprobación;
- sustitución del ERP, PLM o CPQ;
- entrenamiento de un modelo propio sin necesidad demostrada.

## Métricas que deberían medirse

- tiempo transcurrido hasta obtener una solicitud cualificada;
- minutos de comercial e ingeniería por solicitud;
- porcentaje de campos técnicos completos;
- cantidad de preguntas posteriores;
- correcciones introducidas por el revisor;
- solicitudes en las que no pudo calcularse un rango;
- desviación entre presupuesto preliminar y cálculo posterior;
- tiempo hasta la primera respuesta útil al cliente;
- porcentaje de solicitudes que llegan a oportunidad;
- errores o supuestos detectados antes de enviar información.

No conviene prometer reducción de tiempo, aumento de conversión o precisión hasta haberlo medido en un piloto real.

---

# 11. Estrategia adecuada para un consultor independiente

El servicio puede estructurarse en tres ofertas consecutivas:

### 1. Diagnóstico de preparación

- mapa del proceso RFQ actual;
- análisis de formularios, correos, hojas y plantillas;
- identificación de familias repetibles;
- factores de coste;
- fuentes de verdad;
- riesgos de datos y seguridad;
- decisión explícita de automatizar, implantar CPQ o continuar manualmente.

El diagnóstico debe poder concluir honestamente que **no existe suficiente repetibilidad para construir el asistente**.

### 2. Piloto de una familia

- alcance fijo;
- flujo real;
- reglas versionadas;
- un CRM;
- un grupo reducido de revisores;
- documentos de salida acordados;
- medición contra el proceso manual.

### 3. Industrialización o traspaso

Después del piloto hay tres posibles destinos:

- mantener la solución ligera;
- ampliar cuidadosamente a otras familias;
- o migrar la lógica validada a una plataforma CPQ como camos, encoway, Elfsquad, Tacton o SAP.

Este último punto es importante: el consultor no necesita posicionarse siempre contra los CPQ. Puede vender el piloto como una forma de **descubrir y formalizar el conocimiento que posteriormente alimentará un CPQ**.

---

# Veredicto final

**Hay una oportunidad real, pero es una cuña de servicio vertical, no un océano azul de software.**

La oportunidad más creíble es:

- en Alemania y especialmente en el Mittelstand industrial;
- para fabricantes que no están listos para un CPQ empresarial;
- sobre una familia de maquinaria repetible;
- en la fase previa a la oferta;
- combinando extracción de requisitos con reglas deterministas;
- preservando la revisión humana;
- e integrándose con CRM, correo, documentos y hojas ya existentes.

La mayor fortaleza del consultor independiente sería la combinación de **comprensión de maquinaria y capacidad de implementación**. La mayor debilidad inicial es la ausencia de referencias y evidencia de mercado. fileciteturn0file0

Por ello, la tesis correcta no es:

> “Existe una nueva categoría de software sin competidores.”

Sino:

> **“Existe un grupo de fabricantes demasiado complejo para resolver el problema con un formulario, pero todavía demasiado pequeño, desestructurado o inmaduro para justificar un CPQ completo. Un consultor especializado puede cerrar esa distancia con un piloto limitado y verificable.”**
