import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencias/experiencia.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experienciasList:any;
  educacionList:any;
  constructor(private experiencias:ExperienciaService){}
  ngOnInit(): void {
    this.experiencias.obtenerDatos().subscribe(datos => {
      this.experienciasList = datos.Experiencias;
      this.educacionList = datos.Educacion;
    })
  }

  

  experianciasTitle: string = 'Experiencias';
  educacionTitle: string = 'Educacion';
  title:string = 'Experiencias y Educacion';

  

}
