import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modificar-skill',
  templateUrl: './modificar-skill.component.html',
  styleUrls: ['./modificar-skill.component.css']
})
export class ModificarSkillComponent {
  Formulario: FormGroup;
  @Input() item: any;
  @Input() id: any;
  @Input() title: any;
  @Input() guardar: boolean = false;

  @Output() datos = new EventEmitter<any>();

  constructor(private _formbuilder : FormBuilder){
    this.Formulario = this._formbuilder.group({
      lenguajeSkill: ["",Validators.required],
      porcentaje: ["",Validators.required]
    })
  }

  onEnviar(dato: any) {
    if(this.guardar) dato.id = this.item.id
   
    this.datos.emit(dato);
  }

}
