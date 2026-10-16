# 📝 Plantilla de Entrega: El Pensadero (Frontend)

Responde a las siguientes preguntas como parte de tu evaluación final. Guarda una copia de este archivo con tu nombre (ej: `JUAN_PEREZ.md`) dentro de `magos_graduados/`.

1.  **¿Usaste Inteligencia Artificial para resolver los retos (del 1 al 6)?**
    *Respuesta:* (Si, utilice inteligencia artificial para hacer todos los ejercicios)

2.  **¿Para qué específicamente te fue útil la IA? (Ej. para entender los Observables, para explicar errores de TypeScript, para que hiciera el código desde cero)**
    *Respuesta:* (Primeramente para entender la logica que estaba trabajando, comprender typescript desde cero, hacer los retos paso a paso corrigiendo errores y aprendiendo)

3.  **¿Qué fue lo que más se te dificultó al conectar Angular con la API de Spring Boot?**
    *Respuesta:* Lo que más se me dificultó fue entender cómo enviar el tipo de magia como parámetro en la petición GET desde Angular. También tuve que corregir un error porque faltaba importar HttpParams. Las pruebas me ayudaron a confirmar que la solicitud llegara correctamente.

4.  **Explica con tus palabras la diferencia entre un componente y un servicio en Angular.**
    *Respuesta:* Un componente se encarga de mostrar la pantalla y responder a las acciones del usuario. Un servicio contiene lógica que se puede reutilizar y, en este proyecto, se encarga de comunicarse con la API. El componente llama al servicio cuando necesita datos.

5.  **¿Por qué validamos en el formulario si el backend ya valida en el Manager?**
    *Respuesta:* Validamos en el formulario para avisarle rápido al usuario si falta un dato o está fuera del rango permitido, y así evitar enviar solicitudes que sabemos que son inválidas. El backend también debe validar porque no se puede confiar solo en el frontend: alguien podría saltarse el formulario y enviar datos directamente a la API.
