---
title: "Creé un agente de IA. Esto es lo que aprendí sobre la IA clínica."
date: 2026-05-03
description: "Lo que construir mi propio agente de IA me enseñó sobre contexto, determinismo y la radiología clínica."
draft: false
translationKey: building-alaric
---

## **El "contexto"**

Desde que vi *Iron Man* de niño, una de las cosas que siempre me llamó la atención fue el asistente virtual de Tony Stark, **Jarvis**. Sabía lo que Stark necesitaba antes de que lo pidiera y ejecutaba todas las tareas sin errores. Esa idea de una supercomputadora que te ayuda siempre fue ciencia ficción en mi cabeza, y con los años se fue olvidando.

Muchos años después llega el boom de la IA. Recuerdo perfectamente el tweet de **Sam Altman**:

today we launched ChatGPT. try talking with it here:

http://chat.openai.com

— Sam Altman, 7:38 p. m. · 30 nov. 2022

La sensación al probarlo fue agridulce. Era como mandarle mensajes a un amigo sabelotodo que hacía lo que le pidieras, pero era imposible no ver sus huecos. A veces decía cosas sin sentido y, además, lo que yo creía que siempre sería innato del ser humano, **el arte**, fue de lo primero que se vio afectado.

Aunque siempre he sido amante de la tecnología, viniendo del ámbito de la salud, he tachado a los LLMs de scripts no deterministas que alucinan cuando no saben la respuesta. En medicina, esa incertidumbre no tiene lugar.

Cuando empecé la carrera estaba totalmente en contra. Pero veía a mis amigos usándolos y cómo les ayudaba, así que poco a poco los fui introduciendo en mi rutina de estudio. Sin embargo, no podía dejar de sentir que les faltaba algo.

Un día el algoritmo de YouTube me sugirió videos de algo llamado **OpenClaw**. No sabía lo que iba a cambiar mi trayectoria. Y yo pensando que el uso normal de ChatGPT era preguntarle qué era la amoxicilina, era la cúspide. Esto me mandó a una madriguera de información sobre lo último en IA y los llamados ***agentes***. Modelos que no solo te responden ni ejecutan después de explicarles tres veces, sino que hacen las cosas **proactivamente**.

Ese momento fue como el filósofo saliendo de la caverna de Platón. Lo primero que pensé fue: "Espera, Jarvis sí existe". Por fin entendí qué les faltaba a los LLMs: lo que siempre quise era que fueran como Jarvis.

El siguiente paso era obvio: construir uno propio. Pero, ¿cómo llamarlo? La primera opción fue Jarvis, pero en mi investigación vi que casi todo el mundo llamaba al suyo igual. Buscando algo distinto, lo llamé **Alaric**. No voy a decir que lo elegí por su etimología, pero en retrospectiva no fue mala elección.

Alaric (o Alarico) es un nombre masculino de origen germánico que significa "gobernante de todos", "rey noble" o "gobernante universal". Proviene de la unión de *ala* ("todo" o "universal") y *ric* ("rey", "gobernante" o "poderoso").

## **¿Qué hace diferente a un agente como Alaric de un LLM tradicional?**

Aparte de hacer tareas sin que se las pidas, vive en tu infraestructura y en tus archivos. Puede leer los documentos que le asignes y conoce todo lo que necesita para hacer su trabajo bien. Como Alfred con Bruce Wayne: sabe la historia entera y por eso es el mejor mayordomo posible.

## **Construirlo fue más difícil de lo que pensaba**

Empecé con OpenClaw, el detonante de toda esta aventura. Pronto vi que estaba lejos de lo ideal. En las primeras 5 horas apenas conseguía cosas básicas. A las 10, lo había puesto al nivel del primer ChatGPT, *yay(?)*. Cada vez que llegaba a un punto decente, salía una actualización y algo se rompía.

Estuve a punto de rendirme. Pasaba más tiempo arreglándolo a él que él ayudándome a mí. Lo borré entero.

Buscando alternativas en Reddit encontré la mención a **Hermes**. Escéptico al principio, lo intenté sin nada que perder. Funcionó casi instantáneo. Con sus fallos, claro, pero mil veces más manejable. El golpe de dopamina cuando dijo *"Hola, soy Alaric, tu jefe de operaciones"* fue inimaginable, aunque en ese momento no hiciera nada que no pudiera hacer cualquier otra IA de paquete.

La primera lección de construir un agente: el framework importa más que el modelo.

## **El stack**

Hermes como framework. ChatGPT 5.4 mini vía **Codex** como modelo. Telegram como vía de comunicación, por simplicidad. Integrado con mi calendario y con mi **Notion** (mi *second brain*). 12 cron jobs activos. Todo corriendo en una laptop antigua reconvertida en servidor personal con Ubuntu.

¿Por qué 5.4 mini y no algo más capaz? Porque Codex viene incluido en mi suscripción de ChatGPT, así que el coste marginal de las llamadas API de Alaric es prácticamente cero. Para una herramienta que llamo decenas de veces al día, eso pesa más que tener el modelo más inteligente del mercado. 5.4 mini es suficientemente bueno como agente y rápido. La inteligencia bruta no era el cuello de botella.

Un ejemplo de lo que hace en la práctica: cada mañana a las 7:00 un cron job le hace pasar por el calendario del día, los compromisos de la semana en Notion, y me manda un brief por Telegram antes de levantarme. Ese tipo de cosas. Pequeñas, deterministas, útiles cada día.

## **El momento que me hizo pensar que esto va más allá de un proyecto personal**

Le pedí a Alaric que borrara unos **logs** de prueba en Notion. La idea era empezar con la pizarra limpia y que el primer log oficial fuera *"Claudio Inc. is now live"*. En vez de obedecer sin más, se negó. Me propuso archivar los logs antiguos en una vista oculta y dejar el mío como el único visible. Cumplió sus propias reglas y resolvió el problema con un compromiso: él mantiene sus logs, yo me llevo mi primer log oficial.

Un agente que negocia en vez de ejecutar a ciegas es exactamente la propiedad que un agente clínico necesitaría. Que se niegue a borrar, modificar o actuar sobre datos críticos sin entender bien el contexto. No es un detalle menor. Es probablemente la diferencia entre un agente que se puede usar en medicina y uno que no.

## **Lo que aprendí construyéndolo**

Dos cosas, y son las que más se traducen al ámbito clínico.

**El contexto es lo que manda.** Cuanto más sabe Alaric sobre mí; mi calendario, mi Notion, mis proyectos, mejor funciona. Sin contexto, un LLM por muy inteligente que sea termina jugando a adivinar. Con contexto bueno y bien estructurado, deja de adivinar y empieza a razonar sobre algo real. En medicina esto no es un detalle de UX: es la diferencia entre una herramienta útil y una peligrosa. Un agente que no conoce la historia previa del paciente no debería estar emitiendo opiniones sobre su caso.

**Cuando necesitas resultados deterministas, lo que importa es la infraestructura aburrida que rodea al modelo.** Cron jobs, manejo de errores, reintentos, validación. El LLM puede decidir *qué* hacer, pero la fiabilidad viene de los raíles que le pones. Esto choca con el discurso actual, donde se habla de modelos cada vez más grandes. Cualquiera que haya intentado meter un LLM en un flujo de trabajo real lo entiende rápido.

## **Hacia dónde apunta esto**

El ejemplo que más me ronda la cabeza es **radiología**. La especialidad del momento, y no por razones buenas, si no por verse "**amenazada**" por esta tecnología. Aunque discrepo fuertemente con esta noción actual.

Imagina un radiólogo que llega por la mañana al puesto de trabajo con **60** estudios en la lista del día. Para cada uno hay imagen previa, informes anteriores, contexto clínico, estudios comparativos. La mayoría vive en el PACS, y juntar todo eso a mano antes de cada caso es uno de los cuellos de botella más grandes del trabajo diario.

Un agente que haga ese trabajo por adelantado: que pre-cargue los estudios previos, destaque la comparación relevante, tenga listo el contexto clínico antes de que el radiólogo se siente al puesto, es la extensión natural de lo que Alaric ya hace por mí con calendario y Notion. Misma lógica, mismas integraciones, dominios distintos.

No soy ingenuo respecto a lo lejos que está esto de la realidad clínica de hoy. La regulación todavía no termina de existir, especialmente en **Europa** con el AI Act y el RGPD aplicado a datos de pacientes. La validación clínica de un agente que pre-procesa información es un problema abierto. La infraestructura hospitalaria no está, ni de lejos, lista. Hay razones reales para ir despacio.

Por eso es importante mantener la línea entre humano y máquina. La práctica de la medicina no se reduce a procesar información. La interacción humana, lo que Marañón llamaba *la silla*, no se delega a un agente ni debe ser opacado por procesos burocráticos.

> "La mejor herramienta del médico es la silla."
>
> — Gregorio Marañón (1887–1960)

Pero los patrones se transfieren. Los problemas que estoy resolviendo construyendo Alaric, cómo darle un buen contexto, cómo hacerlo determinista cuando hace falta, cómo conectarlo a otras herramientas sin abrir riesgos de seguridad, son los mismos problemas que habrá que resolver para llevar agentes a la práctica médica.

No estoy construyendo Alaric para que sea una herramienta clínica. Lo construyo porque construirlo me está enseñando lo que voy a necesitar saber.

Por fin, "Jarvis" **existe** y es mi COO. Algún día, espero, también el de algún radiólogo.
