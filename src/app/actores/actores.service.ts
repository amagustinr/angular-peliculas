import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ActorCreacionDTD } from './actores';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor() {}
  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/actores';

  public crear(actor: ActorCreacionDTD){
    const formData = this.construirFormData(actor);
    return this.http.post(this.urlBase, formData);
  }
    
  private construirFormData(actor: ActorCreacionDTD): FormData{
    const formData = new FormData();

    formData.append('nombre', actor.nombre);

    formData.append('fechaNacimiento', actor.fechaNacimiento.toISOString().split('T')[0]);

    if (actor.foto){
      formData.append('foto', actor.foto);
    }
    return formData;
  }
   
}
