# 📝 Plantilla de Entrega: El Pensadero (Frontend)

Responde a las siguientes preguntas como parte de tu evaluación final. Guarda una copia de este archivo con tu nombre (ej: `JUAN_PEREZ.md`) dentro de `magos_graduados/`.

1.  **¿Usaste Inteligencia Artificial para resolver los retos (del 1 al 6)?**
    *Respuesta:* (si la utlize)

2.  **¿Para qué específicamente te fue útil la IA? (Ej. para entender los Observables, para explicar errores de TypeScript, para que hiciera el código desde cero)**
    *Respuesta:* (La utilize en dos ocaciones
    1. Cuando estaba haciendo la intehración de los repositorios y hize el comando mvn clean spring-boot:run, me salia un error -el puerto 8080 estaba ocupado por una aplicacion de VPN que tenia este computador-, gracias a la ia pude resolver el problema desde Windows PowerShell, pero sin la ia no hubiera podido resolver ese problema.
    2. Para corregir errores de sintaxis en TypeScript, por el import faltante de HttpParams, y cuando estaba muy quedadito le pedia un empujoncito)
 
3.  **¿Qué fue lo que más se te dificultó al conectar Angular con la API de Spring Boot?**
    *Respuesta:* (lo mas dificil fue que el backend no arrancaba porque el puerto 8080 lo ocupaba un servicio de vpn, y varias veces ejecuté comandos en la carpeta equivocada porque el backend y el frontend son dos repositorios distintos)

4.  **Explica con tus palabras la diferencia entre un componente y un servicio en Angular.**
    *Respuesta:* (un componente se encarga de mostrar la información en la pantalla y manejar lo que hace el usuario y un servicio se encarga de la logica y de conectarse con el backend para obtener o guardar datos)

5.  **¿Por qué validamos en el formulario si el backend ya valida en el Manager?**
    *Respuesta:* (hay que validar en el formulario para avisar de los errores antes de enviar los datos. el backend también valida porque sus reglas son las definitivas. por eso se prueba la magia "Oscura", para ver cómo responde el manager con un error 400)
