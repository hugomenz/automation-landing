# Modelo de valor y retorno

> Fuente original convertida a Markdown. Utilizar como contexto, no como copy público sin revisión.

# Modelo económico propuesto

He preparado un Excel editable con cinco hojas: **Resumen**, **Entradas**, **Cálculo**, **Umbrales** y **Preguntas**.

> Nota del paquete: el Excel mencionado en la fuente original no forma parte de este ZIP.

El modelo es prospectivo. Los escenarios son ejemplos matemáticos, no benchmarks ni resultados reales. Esto es especialmente importante porque el punto de partida todavía no incluye clientes, testimonios o casos de automatización, y el primer piloto debería limitarse a una familia de máquinas relativamente repetible. fileciteturn0file0

## 1. Principio del modelo

La unidad económica no debe ser el número total de contactos de la empresa, sino las **solicitudes efectivamente procesables dentro de la familia piloto**:

\[
N=N_{total}\times s_{piloto}\times a_{uso}
\]

Donde:

- \(N_{total}\): solicitudes únicas recibidas al año.
- \(s_{piloto}\): porcentaje perteneciente a la familia piloto.
- \(a_{uso}\): porcentaje de solicitudes elegibles que realmente pasa por el sistema.
- \(N\): volumen efectivo anual utilizado en todas las fórmulas.

También conviene distinguir entre horas físicamente liberadas y valor económico:

\[
Valor\ de\ horas=Horas\ ahorradas\times Coste\ horario\ cargado\times f_{real}
\]

El factor \(f_{real}\) representa qué parte de las horas liberadas produce valor económico real. Por ejemplo, porque evita horas extra, contratación, retrasos o permite atender más proyectos. Ahorrar una hora no equivale automáticamente a ahorrar una hora de salario.

## 2. Clasificación de las fuentes de valor

| Fuente de valor | Clasificación inicial | Tratamiento económico |
|---|---|---|
| Horas de comercial ahorradas | Demostrable | Tiempo antes/después × coste cargado × realización |
| Horas de ingeniería de ventas ahorradas | Demostrable | Tiempo antes/después en casos comparables |
| Reuniones o visitas improductivas evitadas | Demostrable | Horas-persona + gastos directos evitados |
| Filtrado de solicitudes sin presupuesto | Demostrable | Solo trabajo posterior que ya no se realiza |
| Menos retrabajo de ofertas | Demostrable | Rondas evitadas × horas por ronda |
| Mejor transferencia a ingeniería | Probable hasta medir | Puede pasar a demostrable con registros de proyecto |
| Mayor conversión de solicitudes adecuadas | Probable | Pedidos incrementales × margen de contribución |
| Mayor velocidad de primera respuesta | Conductor de conversión | No monetizar por separado si ya se usa mejora de conversión |
| Mejor seguimiento | Conductor de conversión | No monetizar por separado si ya se usa mejora de conversión |
| Mejor calidad de requisitos | Conductor operativo | Su valor aparece en menos ingeniería, retrabajo y handoff |
| Reputación, percepción profesional y mejor información de gestión | Difícil de atribuir | Mantener fuera del ROI base |

La regla más importante es evitar sumar tres veces el mismo efecto. La respuesta rápida, el seguimiento y la calidad de requisitos pueden explicar una mejora de conversión, pero no deben convertirse en tres incrementos de ventas independientes.

## 3. Variables que debe preguntar al cliente

### Alcance y volumen

| Código | Pregunta | Unidad |
|---|---|---|
| \(N_{total}\) | ¿Cuántas solicitudes únicas recibió la empresa en los últimos 12 meses? | solicitudes/año |
| \(s_{piloto}\) | ¿Qué porcentaje corresponde a la familia de máquinas del piloto? | % |
| \(a_{uso}\) | ¿Qué porcentaje de solicitudes elegibles usaría realmente el sistema? | % |
| \(ramp\) | ¿Qué parte del primer año estará el sistema operativo y estabilizado? | % |

Hay que eliminar duplicados, spam, contactos de proveedores y solicitudes que nunca habrían entrado en el proceso comercial.

### Funnel comercial

| Código | Pregunta | Unidad |
|---|---|---|
| \(p_{apta}\) | ¿Qué porcentaje es técnica y comercialmente adecuado? | % |
| \(p_{sinpres}\) | ¿Qué porcentaje no tiene presupuesto realista? | % |
| \(p_{oferta}\) | ¿Qué porcentaje recibe una oferta formal? | % |
| \(p_{cierre}\) | ¿Qué porcentaje de las solicitudes aptas termina en pedido? | % |
| \(\Delta p_{cierre}\) | ¿Qué mejora absoluta de conversión se espera u observa? | puntos porcentuales |
| \(MC\) | ¿Cuál es el margen de contribución medio por pedido? | €/pedido |
| \(w_{prob}\) | ¿Qué parte del impacto probable se considera atribuible y realizable? | % |

Debe utilizarse margen de contribución, no facturación. Un pedido de 500.000 euros no genera 500.000 euros de valor incremental.

### Tiempo y costes laborales

| Código | Pregunta | Unidad |
|---|---|---|
| \(h_{com,0},h_{com,1}\) | Tiempo comercial por solicitud antes y después | horas/solicitud |
| \(h_{iv,0},h_{iv,1}\) | Tiempo de ingeniería de ventas antes y después | horas/caso |
| \(c_{com}\) | Coste horario cargado de comercial | €/hora |
| \(c_{iv}\) | Coste horario cargado de ingeniería de ventas | €/hora |
| \(c_{ing}\) | Coste horario cargado de ingeniería o project management | €/hora |
| \(f_{real}\) | Parte de las horas liberadas que se convierte en valor económico | % |

En los tiempos de comercial deben incluirse revisión inicial, entrada en CRM, búsqueda de información y petición de datos faltantes, pero excluir reuniones, preparación de ofertas y handoff si se calculan por separado.

### Reuniones y visitas

| Código | Pregunta | Unidad |
|---|---|---|
| \(m_0,m_1\) | Reuniones o visitas improductivas por solicitud antes/después | eventos/solicitud |
| \(h_{reu}\) | Horas-persona internas por evento | horas/evento |
| \(c_{reu}\) | Coste medio cargado de los participantes | €/hora |
| \(g_{viaje}\) | Gastos directos de viaje por evento | €/evento |

Una reunión no debe considerarse improductiva solo porque no se haya ganado el pedido. Debe tratarse de una reunión que podría haberse evitado detectando antes una incompatibilidad evidente de aplicación, plazo o presupuesto.

### Solicitudes sin presupuesto

| Código | Pregunta | Unidad |
|---|---|---|
| \(q_{sin,0},q_{sin,1}\) | Probabilidad de que una solicitud sin presupuesto llegue a trabajo posterior antes/después | % |
| \(h_{sin}\) | Trabajo no solapado consumido por esos casos | horas/caso |
| \(c_{sin}\) | Coste cargado medio de ese trabajo | €/hora |

El tiempo introducido aquí debe excluir triage inicial, reuniones y retrabajo de oferta si ya aparecen en otras líneas.

### Ofertas y requisitos

| Código | Pregunta | Unidad |
|---|---|---|
| \(r_0,r_1\) | Rondas de corrección por oferta antes/después | ciclos/oferta |
| \(h_{ciclo}\) | Tiempo comercial e ingeniería por ronda | horas/ciclo |
| \(c_{oferta}\) | Coste medio cargado de la ronda | €/hora |
| \(Q_0,Q_1\) | Porcentaje de requisitos críticos completos antes/después | % |

No deben contarse como retrabajo los cambios genuinos de alcance solicitados posteriormente por el cliente.

### Transferencia a ingeniería

| Código | Pregunta | Unidad |
|---|---|---|
| \(\Delta h_{handoff}\) | Horas de aclaración o reconstrucción de requisitos evitadas por proyecto ganado | horas/proyecto |
| \(c_{ing}\) | Coste cargado del equipo que realiza estas aclaraciones | €/hora |

### Costes y riesgos del sistema

| Código | Pregunta | Unidad |
|---|---|---|
| \(I\) | Inversión única de implantación | € |
| \(F_{run}\) | Hosting, soporte, mantenimiento de reglas y responsable interno | €/año |
| \(c_{var}\) | IA, documentos, almacenamiento, OCR u otras APIs | €/solicitud |
| \(c_{riesgo}\) | Coste esperado de falsos descartes, abandono o errores | €/solicitud |
| \(T\) | Horizonte económico | años |
| \(d\) | Tasa de descuento | % |

## 4. Fórmulas de valor

### Horas de comercial

\[
V_{com}
=
N\times(h_{com,0}-h_{com,1})
\times c_{com}\times f_{real}
\]

En el ejemplo se introduce directamente \(h_{com,ahorradas}\).

### Ingeniería de ventas

\[
V_{iv}
=
N\times p_{apta}
\times(h_{iv,0}-h_{iv,1})
\times c_{iv}\times f_{real}
\]

Se aplica a solicitudes aptas que continúan en el proceso. El trabajo evitado en solicitudes sin presupuesto se calcula por separado.

### Reuniones y visitas improductivas

\[
V_{reu}
=
N\times(m_0-m_1)
\times
\left[
h_{reu}\times c_{reu}\times f_{real}
+
g_{viaje}
\right]
\]

Los gastos de viaje no necesitan el factor de realización porque son ahorro directo de caja.

### Filtrado de solicitudes sin presupuesto

\[
V_{sinpres}
=
N\times p_{sinpres}
\times(q_{sin,0}-q_{sin,1})
\times h_{sin}\times c_{sin}\times f_{real}
\]

### Menos retrabajo de ofertas

\[
V_{oferta}
=
N\times p_{oferta}
\times(r_0-r_1)
\times h_{ciclo}\times c_{oferta}\times f_{real}
\]

### Ahorro demostrable total

\[
V_{dem}
=
V_{com}+V_{iv}+V_{reu}+V_{sinpres}+V_{oferta}
\]

### Mejor transferencia a ingeniería

\[
V_{handoff}
=
N\times p_{apta}\times p_{cierre}
\times\Delta h_{handoff}
\times c_{ing}\times f_{real}
\]

En una primera propuesta conviene tratarlo como probable. Puede pasar a demostrable después de registrar aclaraciones, reuniones y correcciones por proyecto.

### Mayor conversión

\[
V_{conv}
=
N\times p_{apta}
\times\Delta p_{cierre}
\times MC
\]

\(\Delta p_{cierre}\) es una mejora absoluta. Por ejemplo, pasar del 20 % al 20,75 % equivale a \(0,0075\), no a un crecimiento relativo del 0,75 %.

### Impacto probable ajustado

\[
V_{prob,aj}
=
(V_{handoff}+V_{conv})\times w_{prob}
\]

Sería preferible utilizar factores distintos para handoff y conversión cuando haya suficiente información.

### Valor anual del caso base

\[
V_{base}=V_{dem}+V_{prob,aj}
\]

El impacto difícil de atribuir se establece en cero.

### Beneficio anual neto

\[
B_{neto}
=
\left[
V_{base}
-
N(c_{var}+c_{riesgo})
\right]\times ramp
-
F_{run}
\]

### ROI y payback

\[
ROI_{año1}
=
\frac{B_{neto}-I}{I}
\]

\[
Payback_{meses}
=
\frac{12I}{B_{neto}}
\]

El payback solo tiene sentido si \(B_{neto}>0\).

### Valor presente neto

Para un flujo anual constante:

\[
VPN
=
-I+
B_{neto}
\times
\frac{1-(1+d)^{-T}}{d}
\]

## 5. Tres escenarios ilustrativos

Los siguientes supuestos no describen empresas reales.

| Supuesto principal | Pequeña | Mediana | Grande |
|---|---:|---:|---:|
| Solicitudes totales/año | 200 | 600 | 1.500 |
| Familia piloto | 60 % | 60 % | 60 % |
| Solicitudes efectivas \(N\) | 120 | 360 | 900 |
| Realización económica de horas | 60 % | 70 % | 80 % |
| Solicitudes aptas | 45 % | 50 % | 55 % |
| Horas comerciales ahorradas/solicitud | 0,50 | 0,65 | 0,80 |
| Reducción de ingeniería de ventas/caso apto | 0,50 h | 0,75 h | 1,00 h |
| Reuniones evitadas/solicitud | 0,04 | 0,05 | 0,06 |
| Reducción de ciclos de retrabajo/oferta | 0,50 | 0,60 | 0,70 |
| Mejora absoluta de cierre | 0,50 p.p. | 0,75 p.p. | 1,00 p.p. |
| Margen de contribución/pedido | 25.000 € | 40.000 € | 60.000 € |
| Factor de confianza probable | 50 % | 50 % | 50 % |

### Resultado anual ilustrativo

| Resultado | Pequeña | Mediana | Grande |
|---|---:|---:|---:|
| Ahorro demostrable | 5.093 € | 31.638 € | 143.669 € |
| Impacto probable ajustado | 3.703 € | 29.142 € | 158.846 € |
| Valor anual del caso base | 8.796 € | 60.780 € | 302.514 € |
| Inversión ilustrativa | 8.000 € | 15.000 € | 30.000 € |
| Resultado neto año 1 antes de costes operativos | 796 € | 45.780 € | 272.514 € |
| ROI año 1 antes de costes operativos | 9,9 % | 305,2 % | 908,4 % |

Estos ROI no deben presentarse como pronóstico. En los tres escenarios, buena parte del valor probable procede de la conversión. Si no se puede demostrar una mejora causal, debe utilizarse el ahorro demostrable como criterio principal.

La lectura crítica sería:

- **Empresa pequeña:** el ahorro demostrable no justifica por sí solo un proyecto de 8.000 euros en doce meses. El caso base apenas lo supera y desaparecería al introducir soporte, rampa o riesgo.
- **Empresa mediana:** el proyecto puede justificarse principalmente por capacidad operativa, incluso sin depender enteramente de conversión, siempre que el volumen y los tiempos se confirmen.
- **Empresa grande:** el volumen hace que pequeñas mejoras unitarias produzcan un valor alto, pero exige comprobar que las 900 solicitudes pertenecen realmente al alcance repetible del piloto.

## 6. Volumen mínimo para justificar 8.000, 15.000 y 30.000 euros

La fórmula utilizada es:

\[
N_{min}
=
\left\lceil
\frac{I+F_{run}}
{v-c_{var}-c_{riesgo}}
\right\rceil
\]

Donde \(v\) es el valor por solicitud según el criterio elegido.

### Criterio conservador: solo ahorro demostrable

| Coste de proyecto | Pequeña | Mediana | Grande |
|---:|---:|---:|---:|
| 8.000 € | 189 solicitudes/año | 92 | 51 |
| 15.000 € | 354 | 171 | 94 |
| 30.000 € | 707 | 342 | 188 |

### Caso base: demostrable más impacto probable ajustado

| Coste de proyecto | Pequeña | Mediana | Grande |
|---:|---:|---:|---:|
| 8.000 € | 110 solicitudes/año | 48 | 24 |
| 15.000 € | 205 | 89 | 45 |
| 30.000 € | 410 | 178 | 90 |

Son **solicitudes efectivas dentro de la familia piloto**, no solicitudes totales de la empresa.

Los umbrales anteriores dejan los costes operativos, variables y de riesgo en cero. Por cada 1.000 euros adicionales de coste fijo anual, el volumen necesario aumenta aproximadamente en:

| Base de cálculo | Pequeña | Mediana | Grande |
|---|---:|---:|---:|
| Solo demostrable | 24 solicitudes | 12 | 7 |
| Caso base | 14 solicitudes | 6 | 3 |

## 7. Riesgos que deben restarse

El modelo incluye un coste esperado de riesgo por solicitud. Puede desarrollarse así:

\[
c_{falso\ negativo}
=
p_{FN}
\times p_{cierre,descartada}
\times MC
\]

\[
c_{abandono}
=
\Delta p_{abandono}
\times p_{apta,abandono}
\times p_{cierre}
\times MC
\]

\[
c_{riesgo}
=
c_{falso\ negativo}
+
c_{abandono}
+
c_{error\ material}
\]

Los principales riesgos son:

- El wizard reduce la tasa de envío porque exige demasiado esfuerzo.
- Una solicitud válida se descarta por no declarar inicialmente un presupuesto.
- Una estimación temprana crea expectativas comerciales equivocadas.
- El equipo sigue realizando el proceso antiguo en paralelo.
- Mantener módulos, reglas y tablas consume más tiempo del previsto.
- El tiempo liberado no se convierte en capacidad productiva ni ahorro de caja.

## 8. Medición mínima para que el ROI sea defendible

Antes del piloto deberían obtenerse doce meses de datos de funnel y una muestra de tiempos de cuatro a ocho semanas. Durante el piloto, cada solicitud debería registrar:

- Familia de máquina y criterio apta/no apta.
- Fecha de entrada y primera respuesta útil.
- Campos críticos completos y preguntas adicionales.
- Minutos de revisión y corrección humana.
- Participación de ingeniería de ventas.
- Reuniones, visitas y motivo del resultado.
- Número de versiones o correcciones de la oferta.
- Pedido, margen y motivo de pérdida.
- Aclaraciones posteriores en el handoff.
- Falsos positivos, falsos negativos y abandonos.

La inversión no debería justificarse únicamente con “una respuesta más rápida” o “una imagen más moderna”. Para un primer caso sin referencias, la defensa más sólida es demostrar tiempo, reuniones, ofertas y aclaraciones evitadas; la conversión debe presentarse inicialmente como upside ajustado, no como ahorro garantizado.
