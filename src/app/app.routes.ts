import { Routes } from '@angular/router';
import { Inicio } from './features/inicio/inicio.component';
import { MagoList } from './features/magos/mago-list/mago-list.component';
import { MagoDetail } from './features/magos/mago-detail/mago-detail.component';
import { MagoForm } from './features/magos/mago-form/mago-form.component';
import { HechizoBuscador } from './features/hechizos/hechizo-buscador/hechizo-buscador.component';
import { HechizoForm } from './features/hechizos/hechizo-form/hechizo-form.component';

// RUTAS DEL FRONTEND (pantallas). Comparación con el backend:
//   backend  @Path("/magos")  +  @Path("/{id}")      → endpoint que devuelve JSON
//   frontend path 'magos'     +  path 'magos/:id'    → pantalla que muestra HTML
// El orden importa: 'magos/nuevo' va ANTES de 'magos/:id' para que "nuevo" no se tome como id.
export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'magos', component: MagoList },
  { path: 'magos/nuevo', component: MagoForm },
  { path: 'magos/:id', component: MagoDetail },
  { path: 'magos/:id/editar', component: MagoForm },

  // 🏰 RETO 4: Los Pasillos del Castillo
  { path: 'hechizos', component: HechizoBuscador },
  { path: 'hechizos/nuevo', component: HechizoForm },

  { path: '**', redirectTo: '' },
];