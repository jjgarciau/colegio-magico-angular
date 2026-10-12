
import { Component, effect, inject, input, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { HechizoApiService } from '../../../core/services/hechizo-api.service';
import { mensajeDeError } from '../../../core/services/error-http';
import { Hechizo, TIPOS_MAGIA } from '../../../models/hechizo.model';
import { Alerta } from '../../../shared/components/alerta/alerta.component';

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
    // RETO 5.1: Buscar cuando cambie el tipo de la URL
    effect(() => {
      const tipoActual = this.tipo();

      if (tipoActual) {
        this.buscar(tipoActual);
      } else {
        this.hechizos.set([]);
        this.error.set('');
      }
    });
  }

  // Cambiar el tipo seleccionado actualiza la URL
  seleccionar(tipo: string): void {
    this.router.navigate(['/hechizos'], {
      queryParams: { tipo },
    });
  }

  private buscar(tipo: string): void {
    // RETO 5.2: Consultar el backend
    this.buscando.set(true);
    this.error.set('');

    this.hechizoApi.buscarPorTipo(tipo).subscribe({
      next: (hechizos) => {
        this.hechizos.set(hechizos);
        this.buscando.set(false);
      },
      error: (err: HttpErrorResponse) => {
        this.error.set(mensajeDeError(err));
        this.buscando.set(false);
      },
    });
  }
}
