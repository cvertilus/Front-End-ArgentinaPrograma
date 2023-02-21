import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from '../educacion';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent {


  @Input() item?: any;
  editarForm: FormGroup
  @Input() title!: string;
  @Input() id: any;
  @Output() editar = new EventEmitter<Educacion>();
  

  @Input() guardar: boolean = false;




  constructor(private _builder: FormBuilder) {

    this.editarForm = this._builder.group({

      establecimiento: ['', Validators.required],
      logo: ['', Validators.required],
      carrera: ['', Validators.required],
      sitioweb: ['', Validators.required]
    })
  }

  onGuardar(datos: Educacion) {
    if(this.guardar) datos.id = this.item.id
    this.editar.emit(datos);
  }



}
