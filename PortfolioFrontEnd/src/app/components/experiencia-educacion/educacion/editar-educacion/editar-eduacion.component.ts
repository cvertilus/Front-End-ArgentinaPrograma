import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Educacion} from '../educacion'

@Component({
  selector: 'app-editar-eduacion',
  templateUrl: './editar-eduacion.component.html',
  styleUrls: ['./editar-eduacion.component.css']
})
export class EditarEduacionComponent  implements OnInit {
  
  @Input() title:any
  @Input() item?:Educacion
  @Output() datosIngresados = new EventEmitter<Educacion>()
  @Input() id:any

  formulario!:FormGroup;
  constructor (private form:FormBuilder){}

  ngOnInit(): void {
    this.formulario = this.form.group({
    fechaFinalizacion:[this.item?.fechaFinalizacion,Validators.required],
    fechaInicio:[this.item?.fechaInicio,Validators.required],
    institucionUrl:[this.item?.institucionUrl,Validators.required],
    nivelEstudio:[this.item?.nivelEstudio,Validators.required],
    nombreInstitucion:[this.item?.nombreInstitucion,Validators.required],
      
    })
  }

  public onEnviar(event:Educacion){
    this.datosIngresados.emit(event)
  }

}
