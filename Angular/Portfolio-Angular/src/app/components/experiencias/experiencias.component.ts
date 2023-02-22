import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacionService/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencias/experiencia.service';
import { Educacion } from './educacion';
import { Experiencia } from './experiencias';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {


  experienciasList!: Experiencia[];
  educacionList!: Educacion[];
  experianciasTitle: string = 'Experiencias';
  educacionTitle: string = 'Educacion';
  title: string = 'Experiencias y Educacion';
  modificarEducacion!: Educacion
  modificarExperiencia!:Experiencia


  constructor(private _experienciaService: ExperienciaService, private _educacionService: EducacionService) { }

  ngOnInit(): void {
    this._experienciaService.obtenerDatos().subscribe(datos => {
      this.experienciasList = datos;
    })

    this._educacionService.obtenerDatos().subscribe(datos => {
      this.educacionList = datos;
    })
  }

  public obtenerDatosEducacion(dato: Educacion) {
    this.modificarEducacion = dato
  }

  private agregarEducacionLista(educacion: Educacion) {
    educacion.id = this.educacionList.length + 1
    this.educacionList = [... this.educacionList, educacion]
  }

  public agregarEducacion(nuevoEducacion: Educacion) {
    this.agregarEducacionLista(nuevoEducacion)
    this._educacionService.agregarEducacion(nuevoEducacion).subscribe(data => {
      this.educacionList = data
    })
  }

  public actualizarEducacion(actual: Educacion) {
    for (let datos of this.educacionList) {
      if (datos.id != actual.id) continue;
      datos.sitioWeb = actual.sitioWeb
      datos.carrera = actual.carrera
      datos.establecimiento = actual.establecimiento
      datos.logo = actual.logo
    }
  }

  public editarEduacion(actual: Educacion) {
    this.actualizarEducacion(actual)
    this._educacionService.updateEduacion(actual).subscribe()
  }

  public onDelete(educacion: Educacion) {
    this._educacionService.deleteEducacion(educacion).subscribe(data => {
      this.educacionList = this.educacionList.filter(item => item.id !== educacion.id)
    })
  }

  public obtenerDatosExperiencias(dato: Experiencia) {
    this.modificarExperiencia = dato;
  }

  public  EditarExperiencia(datos: Experiencia) {
    this._editarExperiencia(datos)
    this._experienciaService.actualizarExperiencia(datos).subscribe()
  }

  private _editarExperiencia(datos:Experiencia){
    for(let item of this.experienciasList){
      if(item.id != datos.id) continue;
      item.adress = datos.adress
      item.desde = datos.desde
      item.empresa = datos.empresa
      item.hasta = datos.hasta
      item.id = datos.id
      item.puesto = datos.puesto
      item.sitioWeb = datos.sitioWeb
    }

  }

  private _agregarExperienciaLista(nuevaExp:Experiencia){
    nuevaExp.id = this.experienciasList.length + 1
    this.experienciasList = [...this.experienciasList,nuevaExp]
  }

  public agregarExperiencia(nuevaExp:Experiencia){
    this._agregarExperienciaLista(nuevaExp);
    this._experienciaService.agregarExperiencia(nuevaExp).subscribe(data =>{
      this.experienciasList = data
    })


  }

  public eliminarExperiencia(eliminarExp:Experiencia){
    this._experienciaService.eliminarExperiencia(eliminarExp).subscribe(data =>{
      this.experienciasList = this.experienciasList.filter(item => item.id !== eliminarExp.id)})

  }
}
