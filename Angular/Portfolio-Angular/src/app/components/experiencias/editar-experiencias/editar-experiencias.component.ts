import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from '../experiencias';

@Component({
  selector: 'app-editar-experiencias',
  templateUrl: './editar-experiencias.component.html',
  styleUrls: ['./editar-experiencias.component.css']
})
export class EditarExperienciasComponent {
  @Input() item?: any;
  @Input() guardar: Boolean = false;
  @Input() id: any;
  @Input() title: any;
  @Output() editar = new EventEmitter<Experiencia>();

  
  editarForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.editarForm = this._builder.group({
      empresa: ["",Validators.required],
      puesto:["",Validators.required],
      desde: ["",Validators.required],
      hasta: ["",Validators.required],
      adress:["",Validators.required],
      sitioWeb: ["",Validators.required]
    });

  }

  public onGuardar(value: Experiencia) {
    if(this.guardar) value.id = this.item.id;
    this.editar.emit(value);


  }
}




