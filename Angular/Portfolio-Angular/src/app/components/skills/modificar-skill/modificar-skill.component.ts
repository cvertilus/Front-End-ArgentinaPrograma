import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  constructor(private _formbuilder : FormBuilder){
    this.Formulario = this._formbuilder.group({

    })

  }


  onEnviar(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
