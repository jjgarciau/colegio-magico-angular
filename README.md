# 🏰 Colegio Mágico - Magia Avanzada (Frontend)

¡Bienvenido a la segunda parte de tu formación! Ya construiste la API del *Registro de Hechizos* con Spring Boot.
Ahora el Ministerio de Magia necesita el **Portal del Colegio**: una aplicación **Angular** que consuma esa API.

La sección de **Magos** ya está construida y comentada (es el ejemplo de la clase). Tu misión es construir la
sección de **Hechizos** (el *Grimorio*), completando 6 retos que el **Tribunal Mágico** (GitHub Actions) calificará automáticamente.

## 📜 Instrucciones para Empezar

1. **Haz un Fork** de este repositorio hacia tu cuenta personal.
2. **Crea tu entorno mágico:** abre un Codespace (**Code → Codespaces → Create codespace on main**) o clónalo en tu equipo (Node.js 20.19+).
3. Activa la "Magia del Tribunal" en la pestaña **Actions** de tu repositorio.
4. Instala los ingredientes: `npm install`//esto ya lo hice
5. **Levanta el backend** del Colegio Mágico (`mvn spring-boot:run` en el repo del backend, puerto 8080).
   ¿No tienes el backend a mano? `npm run mock` levanta uno simulado con las mismas rutas.
6. Levanta el portal: `npm start` y abre http://localhost:4200
7. Completa los retos siguiendo las pistas `RETO X.Y` en el código.
8. Valida en local antes de subir:
   - `npm run retos` → evalúa todos los retos
   - `npm run retos -- 3` → evalúa solo el reto 3
9. Haz `git add`, `git commit` y `git push`. ¡El Tribunal abrirá un Issue con tu reto actual y te calificará!

> ⚠️ **Reglas de oro:** no modifiques los archivos de `src/retos/` (son las pruebas del Tribunal) ni la carpeta `.github/`.
> Cada fallo que el Tribunal detecte en un reto resta 2 puntos de ese reto (mínimo 2/10).  

---

## 🔮 Los Retos Mágicos

### 📖 Reto 0: El Conocimiento Ancestral (Lectura de Código)
Lee la sección de **Magos**, que está resuelta y comentada:
`models/mago.model.ts` → `core/services/mago-api.service.ts` → `features/magos/*` → `app.routes.ts`.
Todo lo que necesitas para los retos está ahí.

### 📜 Reto 1: El Pergamino del Hechizo (Modelo)
**Archivo:** `src/app/models/hechizo.model.ts`
* Completa la interfaz `Hechizo` con `nombre` (string), `tipoMagia` (string) y `nivelPoder` (number).
* Llena `TIPOS_MAGIA` con `Fuego`, `Agua`, `Tierra`, `Aire`, `Oscura`.

### 🔍 Reto 2: El Ojo que Todo lo Busca (GET)
**Archivo:** `src/app/core/services/hechizo-api.service.ts`
* Implementa `buscarPorTipo(tipo)` → `GET /api/hechizos?tipo=<tipo>` usando `HttpParams`.

### ✍️ Reto 3: El Escriba del Grimorio (POST)
**Archivo:** `src/app/core/services/hechizo-api.service.ts`
* Implementa `crear(hechizo)` → `POST /api/hechizos`.
* El backend responde **texto**: usa `responseType: 'text'`.

### 🏰 Reto 4: Los Pasillos del Castillo (Rutas)
**Archivo:** `src/app/app.routes.ts`
* Agrega `'hechizos'` → `HechizoBuscador` y `'hechizos/nuevo'` → `HechizoForm`, antes del comodín `'**'`.

### 📖 Reto 5: El Grimorio Viviente (Componente)
**Carpeta:** `src/app/features/hechizos/hechizo-buscador/`
* 5.1 `effect()` que llame a `buscar()` cada vez que cambie `tipo()`.
* 5.2 Implementa `buscar()` con `subscribe({ next, error })`.
* 5.3 En el HTML, una `<tr>` por hechizo con `@for`, y `@empty` con el texto `No hay hechizos de {{ tipo() }}.`

### 🕯️ Reto 6: El Ritual de Registro (Formulario)
**Archivo:** `src/app/features/hechizos/hechizo-form/hechizo-form.component.ts`
* 6.1 Validaciones: `nombre` obligatorio; `nivelPoder` obligatorio entre 1 y 100.
* 6.2 `guardar()`: no llama a la API si el formulario es inválido; si `crear()` tiene éxito navega a
  `/hechizos?tipo=<tipo>`; si falla muestra el mensaje del backend (prueba con magia **Oscura**).

### 🎓 Reto 7: Graduación Frontend
Cuando superes el Reto 6, el Tribunal te abrirá el Issue de graduación con tu nota y las instrucciones del Pull Request
(usa `PLANTILLA_ENTREGA.md`).

---

## 🗺️ Mapa del proyecto

```
src/app/
├── app.config.ts          → configuración global (HttpClient, Router)  ~ @Configuration
├── app.routes.ts          → rutas de las PANTALLAS                     ~ @Path        ⚔️ Reto 4
├── models/                → interfaces Mago, Hechizo                   ~ Entities     ⚔️ Reto 1
├── core/services/         → acceso a la API con HttpClient            ~ DAO          ⚔️ Retos 2 y 3
├── shared/components/     → componentes de presentación reutilizables
└── features/
    ├── magos/             → ✅ ejemplo resuelto (CRUD completo)
    └── hechizos/          → ⚔️ Retos 5 y 6
src/retos/                 → 🔒 pruebas del Tribunal (no modificar)
```

| Backend | Frontend Angular |
|---|---|
| `models/HechizoEntity` | `models/hechizo.model.ts` |
| `dao/HechizoDaoImpl` | `core/services/hechizo-api.service.ts` |
| `manager/HechizoManagerImpl` | Validaciones del formulario (UX); la regla real sigue en el Manager |
| `services/HechizoService` (`@Path`, `@GET`, `@POST`) | `app.routes.ts` + componentes de `features/` |
| `@Autowired` | `inject()` |
| `@QueryParam("tipo")` | `tipo = input()` leído desde `?tipo=` |

⚠️ En el backend, la carpeta `services` contiene los **endpoints** (el equivalente a un Controller).
En Angular, un *service* es una clase `@Injectable` con lógica o acceso a datos.

## 🧪 ¿Por qué no hay problema de CORS?

Los servicios llaman rutas **relativas** (`/api/hechizos`) y `proxy.conf.json` las reenvía al backend:
`Navegador → localhost:4200/api/... → (proxy) → localhost:8080/api/...`
