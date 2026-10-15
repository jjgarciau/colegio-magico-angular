import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HechizoApiService } from '../../../core/services/hechizo-api.service';
import { mensajeDeError } from '../../../core/services/error-http';
import { Hechizo, TIPOS_MAGIA } from '../../../models/hechizo.model';
import { Alerta } from '../../../shared/components/alerta/alerta.component';

@Component({
  selector: 'app-hechizo-form',
  imports: [ReactiveFormsModule, RouterLink, Alerta],
  templateUrl: './hechizo-form.component.html',
})
export class HechizoForm {
  private readonly hechizoApi = inject(HechizoApiService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  tipos = TIPOS_MAGIA;
  error = signal('');

  // 6.1 Validaciones: nombre obligatorio; nivelPoder obligatorio entre 1 y 100.
  form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    tipoMagia: ['Fuego'],
    nivelPoder: [10, [Validators.required, Validators.min(1), Validators.max(100)]],
  });

  // 6.2 guardar(): lógica de validación, envío y navegación o manejo de error.
  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const hechizo: Hechizo = this.form.getRawValue();

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
//Reto 6 completado: HechizoForm con validaciones y manejo de errores.