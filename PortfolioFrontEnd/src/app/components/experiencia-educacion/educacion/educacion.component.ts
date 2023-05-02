import { Component, OnInit } from '@angular/core';
import { Educacion } from './educacion';
import { DatePipe, formatDate } from '@angular/common';
import { EducacionService } from 'src/app/service/educacionService/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  title:string= "Educacion"
  educacionList:Educacion[]= [];
  educacionBase:Educacion = {
    id: 1,
    fechaFinalizacion:new Date('2022-10-11'),
    fechaInicio: new Date ('2022-10-10'),
    institucionUrl: 'ubar.com.ar',
    nivelEstudio: 'Analista de Sistema',
    nombreInstitucion:'Universidad de Buenos Aires'
  }
  educacionEditar!:Educacion

  constructor(private educacionService:EducacionService){}

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(datos =>{
      this.cargarDatos(datos)
    })
  }

  private cargarDatos(datos:Educacion[]){
    if(datos.length == 0){
      this.educacionService.postEducacion(this.educacionBase).subscribe(item =>{
        this.educacionBase = item;
        this.educacionList.push(item) 
      })

    }else{
      this.educacionList = datos
    }

  }

  public agregarEducacion(event:Educacion){
    console.log(event)
    this.educacionService.postEducacion(event).subscribe(dato =>{
      this.educacionList = [...this.educacionList,dato]

    })
  }

  public eliminarEducacion(educacion:Educacion){
    this.educacionList = this.educacionList.filter(items => items.id !== educacion.id)
    this.educacionService.deleteEducacion(educacion).subscribe()
  }

  public editarEducacionSelectionada(educacion:Educacion){
    console.log(educacion)
    this.educacionEditar = educacion

  }

  public editarEducacion(educacion:Educacion){
    educacion.id = this.educacionEditar.id;
  
    for (let ed of this.educacionList){
      if(ed.id != educacion.id) continue;
      
      ed.fechaFinalizacion = educacion.fechaFinalizacion
      ed.fechaInicio = educacion.fechaInicio
      ed.institucionUrl = educacion.institucionUrl
      ed.nivelEstudio = educacion.nivelEstudio
      ed.nombreInstitucion = educacion.nombreInstitucion
    }
    

    this.educacionService.putEducacion(educacion).subscribe();

  }
  
  

}
