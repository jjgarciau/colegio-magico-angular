import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HechizoApiService } from '../../../core/services/hechizo-api.service';
import { mensajeDeError } from '../../../core/services/error-http';
import { Hechizo, TIPOS_MAGIA } from '../../../models/hechizo.model';
import { Alerta } from '../../../shared/components/alerta/alerta.component';

// 🕯️ RETO 6: El Ritual de Registro
// Formulario para registrar un hechizo con POST /api/hechizos.
// 👀 Ejemplo resuelto para guiarte: features/magos/mago-form
@Component({
  selector: 'app-hechizo-form',
  imports: [ReactiveFormsModule, RouterLink, Alerta],
  templateUrl: './hechizo-form.component.html',
})
export class HechizoForm {
  private readonly hechizoApi = inject(HechizoApiService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  // Incluimos "Oscura" a propósito: el FRONT no la bloquea para que veamos
  // cómo el BACKEND (HechizoManagerImpl) responde 400 "Magia prohibida en el colegio".
  tipos = TIPOS_MAGIA;
  error = signal('');

  // RETO 6.1: Agrega las validaciones (segundo elemento de cada arreglo):
  //   - nombre:     obligatorio                       → Validators.required
  //   - nivelPoder: obligatorio, mínimo 1, máximo 100 → Validators.required, Validators.min(1), Validators.max(100)
  form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    tipoMagia: ['Fuego'],
    nivelPoder: [10, [Validators.required, Validators.min(1), Validators.max(100)]],
  });

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const hechizo: Hechizo = this.form.getRawValue();

    this.error.set('');

    this.hechizoApi.crear(hechizo).subscribe({
      next: () => {
        this.router.navigate(['/hechizos'], { queryParams: { tipo: hechizo.tipoMagia } });
      },
      error: (err: HttpErrorResponse) => {
        this.error.set(mensajeDeError(err));
      },
    });
  }
}
