import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Habilidad } from '../habiliad';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit{
  Formulario!: FormGroup;
  @Input() item?: Habilidad;
  @Input() id: any;
  @Input() title: any;

  @Output() datosIngresado = new EventEmitter<any>();

  constructor(private _formbuilder : FormBuilder){
    
  }
  ngOnInit(): void {
    this.Formulario = this._formbuilder.group({
      lenguajedeProgramacion: [this.item?.lenguajedeProgramacion,Validators.required],
      porcentajeDeConocimiento: [this.item?.porcentajeDeConocimiento,Validators.required]
    })
  }

  

  onEnviar(dato: Habilidad) {
    this.datosIngresado.emit(dato);
  }

}
