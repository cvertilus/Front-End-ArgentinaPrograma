import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from '../experiencia';
import { FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  @Input() title: any
  @Input() item?: Experiencia
  @Output() datosIngresados = new EventEmitter<Experiencia>()
  @Input() id: any

  formulario!: FormGroup;
  constructor(private form: FormBuilder) { }


  ngOnInit(): void {
    this.formulario = this.form.group({
  
      nombreEstablecimiento:[this.item?.nombreEstablecimiento,Validators.required],
      puestoTrabajo:[this.item?.puestoTrabajo,Validators.required],
      fechaInicio: [this.item?.fechaInicio,Validators.required] ,
      fechaFinal: [this.item?.fechaFinal,Validators.required] ,
      direccion:[this.item?.direccion,Validators.required]

    })
  }

  public onEnviar(experiencia:Experiencia){
    this.datosIngresados.emit(experiencia)
  }


}
