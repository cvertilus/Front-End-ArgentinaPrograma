import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent {
  @Input() item?: any;
  @Input() id: any;
  @Input() title: any;
  @Input() guardar:boolean = false;
  @Output() datos = new EventEmitter<any>();
  Formulario: FormGroup;

  

  constructor(private _formbuilder:FormBuilder){
    this.Formulario = _formbuilder.group({
      imgProject : ['',Validators.required],
      titleProject: ['',Validators.required],
      lenProject :['',Validators.required],
      githubProject : ['',Validators.required]

    })
  }

  onEnviar(dato: any) {
    if(this.guardar) dato.id = this.item.id;
    this.datos.emit(dato);
  }

}
