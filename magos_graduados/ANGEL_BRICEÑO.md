# 📝 Plantilla de Entrega: El Pensadero (Frontend)

Responde a las siguientes preguntas como parte de tu evaluación final. Guarda una copia de este archivo con tu nombre (ej: `JUAN_PEREZ.md`) dentro de `magos_graduados/`.

1.  **¿Usaste Inteligencia Artificial para resolver los retos (del 1 al 6)?**
    *Respuesta:* Sí, la utilicé como una herramienta de apoyo y consulta durante el desarrollo de los retos.

2.  **¿Para qué específicamente te fue útil la IA? (Ej. para entender los Observables, para explicar errores de TypeScript, para que hiciera el código desde cero)**
    *Respuesta:* Me sirvió principalmente para entender y corregir errores de sintaxis en TypeScript, verificar el uso correcto de las señales (signals) y efectos (effects), y repasar cómo estructurar correctamente las peticiones HTTP con parámetros y tipos de respuesta (responseType: 'text').

3.  **¿Qué fue lo que más se te dificultó al conectar Angular con la API de Spring Boot?**
    *Respuesta:* Al principio, coordinar los tipos de datos y asegurarme de que los nombres de los atributos en las interfaces de TypeScript coincidieran exactamente con los campos enviados por los controladores y entidades de Java (Jackson) para evitar desajustes o errores 400 inesperados.

4.  **Explica con tus palabras la diferencia entre un componente y un servicio en Angular.**
    *Respuesta:* El componente se encarga de la parte visual e interactiva de la aplicación (la pantalla, el HTML y la lógica de presentación que ve el usuario), mientras que el servicio maneja la lógica de negocio y la comunicación externa, como conectarse a la API mediante HttpClient para traer o enviar los datos sin depender de la interfaz gráfica.

5.  **¿Por qué validamos en el formulario si el backend ya valida en el Manager?**
    *Respuesta:* Porque la validación en el frontend mejora la experiencia de usuario al darle un feedback inmediato antes de hacer una petición innecesaria al servidor. Sin embargo, la validación del backend sigue siendo indispensable por seguridad y consistencia de los datos, ya que no se puede confiar únicamente en lo que envía la interfaz.
