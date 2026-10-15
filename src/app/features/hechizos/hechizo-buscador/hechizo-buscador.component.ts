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
    // 5.1 effect() que llama a buscar() cada vez que cambia tipo()
    effect(() => {
      const currentTipo = this.tipo();
      if (currentTipo) {
        this.buscar(currentTipo);
      }
    }, { allowSignalWrites: true });
  }

  seleccionar(tipo: string): void {
    this.router.navigate(['/hechizos'], { queryParams: { tipo } });
  }

  // 5.2 Implementar buscar() con subscribe({ next, error })
  private buscar(tipo: string): void {
    this.buscando.set(true);
    this.error.set('');

    this.hechizoApi.buscarPorTipo(tipo).subscribe({
      next: (data) => {
        this.hechizos.set(data);
        this.buscando.set(false);
      },
      error: (err: HttpErrorResponse) => {
        this.error.set(mensajeDeError(err));
        this.buscando.set(false);
      },
    });
  }
}