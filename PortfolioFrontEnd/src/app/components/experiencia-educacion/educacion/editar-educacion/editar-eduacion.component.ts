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
  @Input() editar:Boolean = false;
  @Input() item?:Educacion
  @Output() datosIngresados = new EventEmitter<Educacion>()
  @Input() id:any

  formulario!:FormGroup;
  constructor (private form:FormBuilder){}

  ngOnInit(): void {
    if(this.editar){
      this.formulario = this.form.group({
        fechaFinalizacion:[this.item?.fechaFinalizacion],
        fechaInicio:[this.item?.fechaInicio],
        institucionUrl:[this.item?.institucionUrl],
        nivelEstudio:[this.item?.nivelEstudio],
        nombreInstitucion:[this.item?.nombreInstitucion],
          
        })
    }else{
      this.formulario = this.form.group({
        fechaFinalizacion:['',Validators.required],
        fechaInicio:['',Validators.required],
        institucionUrl:['',Validators.required],
        nivelEstudio:['',Validators.required],
        nombreInstitucion:['',Validators.required],
          
        })
      
    }
   
  }

  public onEnviar(event:Educacion){
    this.datosIngresados.emit(event)
  }

}
