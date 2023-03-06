import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyectoService/proyecto.service';
import { Proyecto } from './proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  proyectoList: Proyecto[] = [];
  itemProyecto!: Proyecto;
  constructor (private servicePorject:ProyectoService){}
  ngOnInit(): void {
    this.servicePorject.obtenerDatos().subscribe(datos => {
      this.proyectoList = datos;
    })
    
  }
  public obtenerPoryecto(clikeado:Proyecto){
    this.itemProyecto = clikeado;
  }

  public agregarProyectos(dato: Proyecto) {
    dato.id = this.proyectoList.length + 1
    this.proyectoList = [...this.proyectoList,dato]
    this.servicePorject.agregarProyecto(dato).subscribe(data =>{
      this.proyectoList = data
    })
    
    
    }

}
