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
  constructor(private experiencias: ExperienciaService, private _educacionService: EducacionService) { }

  ngOnInit(): void {
    this.experiencias.obtenerDatos().subscribe(datos => {
      this.experienciasList = datos;
    })

    this._educacionService.obtenerDatos().subscribe(datos => {
      this.educacionList = datos;
    })
  }



  experianciasTitle: string = 'Experiencias';
  educacionTitle: string = 'Educacion';
  title: string = 'Experiencias y Educacion';
  modificarEduacion!: Educacion

  public obtenerDatos(dato: Educacion) {
    this.modificarEduacion = dato
  }

  private agregarEducacionLista(educacion:Educacion){
    educacion.id = this.educacionList.length + 1
    this.educacionList = [... this.educacionList,educacion]
    console.log(this.educacionList)

  }

  public agregarEducacion(nuevoEducacion: Educacion) {
    this.agregarEducacionLista(nuevoEducacion)
    this._educacionService.agregarEducacion(nuevoEducacion).subscribe(data => {
      this.educacionList = data
    })
  }


  public editarEduacion(actual: Educacion) {
    throw new Error('Method not implemented.');
  }



}
