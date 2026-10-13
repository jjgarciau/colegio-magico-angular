# 📝 Plantilla de Entrega: El Pensadero (Frontend)

Responde a las siguientes preguntas como parte de tu evaluación final. Guarda una copia de este archivo con tu nombre (ej: `JUAN_PEREZ.md`) dentro de `magos_graduados/`.

1.  **¿Usaste Inteligencia Artificial para resolver los retos (del 1 al 6)?**
    *Respuesta:* En cierta parte sí y no. Hay que ser sinceros y es que en la clase entendí mas o menos.

2.  **¿Para qué específicamente te fue útil la IA? (Ej. para entender los Observables, para explicar errores de TypeScript, para que hiciera el código desde cero)**
    *Respuesta:* Al no haber tenido muy claro varios fundamentos vistos en clases o que no se profundizaron completamente, le pedí a la IA que me hiciera una guia de estudio respecto a lo que vimos en clase y sobre lo que se estaba evaluando en esta actividad y fui aprendiendo con esta misma conforme iba resolviendo los retos.

3.  **¿Qué fue lo que más se te dificultó al conectar Angular con la API de Spring Boot?**
    *Respuesta:* Lo que más me costó fue entender que el frontend y el backend hablan por JSON pero cada uno lo ve de distinta manera, en Spring son entidades y en Angular son Interfaces, que si un nombre no coincide tal cual, todo falla.

4.  **Explica con tus palabras la diferencia entre un componente y un servicio en Angular.**
    *Respuesta:* El componente es lo que se ve y con lo que el usuario interactúa: la pantalla, el formulario, la tabla. El servicio es el que hace el trabajo por detrás, como hablar con el backend. El componente le pide los datos al servicio y el servicio le responde, así el componente no se ensucia con el código de las peticiones.

5.  **¿Por qué validamos en el formulario si el backend ya valida en el Manager?**
    *Respuesta:* Porque validar en el formulario le avisa al usuario de una vez, sin tener que esperar a que el backend responda. Pero igual hay que validar en el backend porque es el que manda de verdad. Y esto tiene que ser así para que no entren datos malos.
