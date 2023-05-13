import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from '../proyecto';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  @Input() title:any;
  @Input() item?:Proyecto;
  @Input() id:any;
  @Output() datosIngresado= new EventEmitter<any>();

  formulario!:FormGroup
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
  
      this.formulario = this.fb.group({
        nombre:[this.item?.nombre,Validators.required],
        github_url:[this.item?.github_url,Validators.required],
        lenguajeDeProgramaciion:[this.item?.lenguajeDeProgramaciion,Validators.required],
        img_src:[this.item?.img_src,Validators.required],
        descripcion:[this.item?.descripcion,Validators.required],

      })
  }

  public onEnviar(proyecto:Proyecto){
    this.datosIngresado.emit(proyecto)
  }


}
