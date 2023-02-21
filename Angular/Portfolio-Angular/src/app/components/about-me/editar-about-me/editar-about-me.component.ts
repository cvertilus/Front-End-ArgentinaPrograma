import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-about-me',
  templateUrl: './editar-about-me.component.html',
  styleUrls: ['./editar-about-me.component.css']
})
export class EditarAboutMeComponent {

  @Input() title!: string;
  @Input() id!:string;
  @Output() enviar = new EventEmitter<string>();
 
  editarFormulario !: FormGroup;

  constructor(
    private _builder: FormBuilder
  ) {
    this.editarFormulario = this._builder.group
      ({
        entrada: ['', Validators.required]

      })
  }
  onEnviar(values: any) {
    this.enviar.emit(values.entrada)

  }



}
