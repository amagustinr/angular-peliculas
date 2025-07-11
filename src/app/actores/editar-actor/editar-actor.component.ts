import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTD, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  id!:number;

  actor: ActorDTO = {id:1, nombre: 'Tom Holland', fechaNacimiento: new Date(1994,0,16), foto :'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tom_Holland_at_KCA_2022.jpg/250px-Tom_Holland_at_KCA_2022.jpg'}

  guardarCambios(actor: ActorCreacionDTD){
    console.log('editando el actor', actor);
  }
}
