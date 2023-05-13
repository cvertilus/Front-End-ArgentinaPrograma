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
  @Input() editar: Boolean = false;
  @Input() item?: Experiencia
  @Output() datosIngresados = new EventEmitter<Experiencia>()
  @Input() id: any

  formulario!: FormGroup;
  constructor(private form: FormBuilder) { }


  ngOnInit(): void {
    if (!this.editar) {
      this.formulario = this.form.group({

        nombreEstablecimiento: ['', Validators.required],
        puestoTrabajo: ['', Validators.required],
        fechaInicio: ['', Validators.required],
        fechaFinal: ['', Validators.required],
        direccion: ['', Validators.required]

      })

    } else {
      this.formulario = this.form.group({

        nombreEstablecimiento: [this.item?.nombreEstablecimiento],
        puestoTrabajo: [this.item?.puestoTrabajo],
        fechaInicio: [this.item?.fechaInicio],
        fechaFinal: [this.item?.fechaFinal],
        direccion: [this.item?.direccion]
      })

    }

  }


  public onEnviar(experiencia: Experiencia) {
    this.datosIngresados.emit(experiencia)
  }


}
