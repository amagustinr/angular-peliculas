import { Component, Input, numberAttribute, OnInit, inject } from '@angular/core';
import { ActorCreacionDTD, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent, MostrarErroresComponent, CargandoComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit {

  ngOnInit(): void {
    this.actoresService.obtenerPorId(this.id).subscribe(actor =>{
      this.actor = actor;
    })
  }

  @Input({transform: numberAttribute})
  id!:number;
  actor?: ActorDTO;
  actoresService = inject(ActoresService);
  route = inject(Router);
  errores: string[] = [];

  guardarCambios(actor: ActorCreacionDTD){
    this.actoresService.actualizar(this.id, actor).subscribe({
      next: () => {
        this.route.navigate(['/actores']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    })
  }
}
