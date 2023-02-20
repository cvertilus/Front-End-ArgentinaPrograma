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
  constructor(private experiencias: ExperienciaService, private educacion: EducacionService) { }

  ngOnInit(): void {
    this.experiencias.obtenerDatos().subscribe(datos => {
      this.experienciasList = datos;
    })

    this.educacion.obtenerDatos().subscribe(datos => {
      this.educacionList = datos;
    })
  }



  experianciasTitle: string = 'Experiencias';
  educacionTitle: string = 'Educacion';
  title: string = 'Experiencias y Educacion';



}
