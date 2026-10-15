cat << 'EOF' > magos_graduados/HASLY_GIRALDO.md
# 📝 Plantilla de Entrega: El Pensadero (Frontend)

Responde a las siguientes preguntas como parte de tu evaluación final. Guarda una copia de este archivo con tu nombre (ej: `JUAN_PEREZ.md`) dentro de `magos_graduados/`.

1.  **¿Usaste Inteligencia Artificial para resolver los retos (del 1 al 6)?**
    *Respuesta:* Sí, utilicé la Inteligencia Artificial como apoyo durante el proceso, aunque intenté resolver la mayor parte de la lógica por mi cuenta y consultando documentación.

2.  **¿Para qué específicamente te fue útil la IA? (Ej. para entender los Observables, para explicar errores de TypeScript, para que hiciera el código desde cero)**
    *Respuesta:* Me fue muy útil principalmente para entender y corregir errores específicos de TypeScript y de compilación en las pruebas unitarias (como los fallos en las especificaciones del grimorio y la sintaxis de las señales), así como para guiarme en la estructura correcta de los bloques de control `@for` y `@empty` en las plantillas HTML.

3.  **¿Qué fue lo que más se te dificultó al conectar Angular con la API de Spring Boot?**
    *Respuesta:* Lo que más se me dificultó fue gestionar la reactividad asíncrona y los estados de carga o error al momento de consumir los servicios HTTP, asegurándome de que las señales (`signals`) y los efectos (`effects`) reaccionaran de forma fluida a los cambios del usuario sin generar bucles o errores de sincronización con el backend.

4.  **Explica con tus palabras la diferencia entre un componente y un servicio en Angular.**
    *Respuesta:* Un componente se encarga de la parte visual e interactiva de la aplicación (la interfaz gráfica, el HTML y los estilos que ve el usuario), mientras que un servicio maneja la lógica de negocio y la comunicación externa (como conectarse a la API mediante HttpClient para traer o enviar datos), manteniendo el código ordenado y reutilizable.

5.  **¿Por qué validamos en el formulario si el backend ya valida en el Manager?**
    *Respuesta:* Validar en el formulario (frontend) es importante para mejorar la experiencia del usuario, ya que le avisa de manera inmediata si le falta un campo o si hay un error antes de enviar los datos, evitando peticiones innecesarias al servidor. La validación en el backend (Manager) es una capa de seguridad indispensable para garantizar la integridad de los datos por si alguien intenta saltarse las restricciones del cliente.