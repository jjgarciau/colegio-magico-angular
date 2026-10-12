import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hechizo } from '../../models/hechizo.model';

// Servicio de acceso a /api/hechizos (los endpoints del Reto 4 del backend).
// 👀 Usa MagoApiService (mago-api.service.ts) como ejemplo: está resuelto y comentado.
@Injectable({ providedIn: 'root' })
export class HechizoApiService {
  private readonly http = inject(HttpClient);
  private readonly url = '/api/hechizos';

  // 🔍 RETO 2: El Ojo que Todo lo Busca
  // Consume:  GET /api/hechizos?tipo=Fuego   (en el backend: @GET + @QueryParam("tipo"))
  // Debe devolver el Observable de this.http.get<Hechizo[]>(...) enviando el parámetro "tipo".
  // PISTA: crea new HttpParams().set('tipo', tipo) y pásalo en las opciones del get: { params }.
  buscarPorTipo(tipo: string): Observable<Hechizo[]> {
    const params = new HttpParams().set('tipo', tipo);// Escribe tu código aquí y borra la línea de abajo:
    return this.http.get<Hechizo[]>('/api/hechizos', { params } ); 
  }

  // ✍️ RETO 3: El Escriba del Grimorio
  // Consume:  POST /api/hechizos   (en el backend: @POST, responde 201 o 400)
  // ⚠️ El backend responde TEXTO ("Hechizo creado correctamente"), no JSON.
  // PISTA: mira cómo lo resuelve MagoApiService.crear() con responseType.
  crear(hechizo: Hechizo): Observable<string> {
    // Escribe tu código aquí y borra la línea de abajo:
    return this.http.post('/api/hechizos', hechizo, { responseType: 'text'});
  }
}
