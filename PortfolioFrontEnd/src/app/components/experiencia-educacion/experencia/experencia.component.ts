import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experienciaService/experiencia.service';
import { Experiencia } from './experiencia';

@Component({
  selector: 'app-experencia',
  templateUrl: './experencia.component.html',
  styleUrls: ['./experencia.component.css']
})
export class ExperenciaComponent implements OnInit{
  experienciaEditar!: Experiencia;
  title: String = 'Experiencia';
  experienciaList: Experiencia[] = [];
  experienciaBase :Experiencia = {
    id: 1,
    nombreEstablecimiento: 'Linkeados Fibre',
    puestoTrabajo: 'Soporte Tecnico',
    fechaInicio: new Date('2022-10-10'),
    fechaFinal:new Date('2022-10-10'),
    direccion: 'Buenos aires , calle A numero 25'
  }


  constructor(private experienciaSerice:ExperienciaService){}


  ngOnInit(): void {
    this.experienciaSerice.getExperiencia().subscribe( datos =>{
      this.cargarDatos(datos)
    })
  }

  private cargarDatos(datos:Experiencia[]) {
    if(datos.length ==0){
      this.experienciaSerice.postExperiencia(this.experienciaBase).subscribe(item =>{
        this.experienciaBase = item
        this.experienciaList.push(item)

      })
    }else{
      this.experienciaList = datos
    }

    
  }

  public editarExperiencia(experiencia: Experiencia) {
    experiencia.id = this.experienciaEditar.id
    for (let exp of this.experienciaList){
      if(exp.id != experiencia.id) continue;
     
      exp.direccion = experiencia.direccion
      exp.fechaFinal = experiencia.fechaFinal
      exp.fechaInicio = experiencia.fechaInicio
      exp.nombreEstablecimiento = experiencia.nombreEstablecimiento
      exp.puestoTrabajo = experiencia.puestoTrabajo
    }
    this.experienciaSerice.putExperiencia(experiencia).subscribe()

  }

  public agregarExperiencia(event: Experiencia) {
    this.experienciaSerice.postExperiencia(event).subscribe(dato =>{
      this.experienciaList = [...this.experienciaList,dato]
    })
  }

  public eliminarExperiencia(experiencia:Experiencia) {
    this.experienciaList = this.experienciaList.filter(item => item.id !== experiencia.id)
    this.experienciaSerice.deleteExperiencia(experiencia).subscribe() 
  }

  public editarExperienciaSelectionada(experencia:Experiencia) {
    this.experienciaEditar = experencia

  }

}
