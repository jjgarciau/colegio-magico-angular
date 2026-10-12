import { Component, effect, inject, input, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { HechizoApiService } from '../../../core/services/hechizo-api.service';
import { mensajeDeError } from '../../../core/services/error-http';
import { Hechizo, TIPOS_MAGIA } from '../../../models/hechizo.model';
import { Alerta } from '../../../shared/components/alerta/alerta.component';

// 📖 RETO 5: El Grimorio Viviente
// Este componente muestra los hechizos de un tipo. El tipo llega desde la URL (?tipo=Fuego)
// como input(), igual que @QueryParam("tipo") en el backend.
// 👀 Ejemplo resuelto para guiarte: features/magos/mago-list
@Component({
  selector: 'app-hechizo-buscador',
  imports: [RouterLink, Alerta],
  templateUrl: './hechizo-buscador.component.html',
})
export class HechizoBuscador {
  private readonly hechizoApi = inject(HechizoApiService);
  private readonly router = inject(Router);

  tipo = input<string>();

  tipos = TIPOS_MAGIA.filter((t) => t !== 'Oscura');
  hechizos = signal<Hechizo[]>([]);
  error = signal('');
  buscando = signal(false);

 constructor() {
  effect(() => {
    const tipoActual = this.tipo();
    if (tipoActual) {
      this.buscar(tipoActual);
    }
  });
}


  // Al elegir un tipo en el <select> cambiamos la URL; el effect de arriba hace la búsqueda.
  seleccionar(tipo: string): void {
    this.router.navigate(['/hechizos'], { queryParams: { tipo } });
  }

  private buscar(tipo: string): void {
    this.buscando.set(true);
    this.error.set('');
    this.hechizoApi.buscarPorTipo(tipo).subscribe({
      next: (lista) => {
        this.hechizos.set(lista);
        this.buscando.set(false);
      },
      error: (err) => {
        this.error.set(mensajeDeError(err));
        this.buscando.set(false);
      }
    });
  }
}
