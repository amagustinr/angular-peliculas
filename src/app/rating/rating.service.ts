import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor() { }
  
  private urlBase = environment.apiURL + '/rating';

  private http = inject(HttpClient);

  puntuar(peliculaId: number, puntuacion: number){
    return this.http.post(this.urlBase, {peliculaId, puntuacion});
  }
}
