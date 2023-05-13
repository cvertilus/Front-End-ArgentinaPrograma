import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyectoService/proyecto.service';
import { Proyecto } from './proyecto';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  title: string = "Proyectos"

  proyectoBase: Proyecto = {
    id: 1,
    nombre: 'Tetris',
    github_url: 'https://github.com/cvertilus/Tetris',
    lenguajeDeProgramaciion: 'Python',
    img_src: 'assets/img/tetris.png',
    descripcion: 'El famaso Juego tetris de los anos 90'
  }
  proyectoList: Proyecto[] = [];
  proyectoSelectionado!: Proyecto;

  constructor(private proyectoService: ProyectoService) { 
    
  }


  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(items => {
      this.cargaritems(items);

    })
  }

  private cargaritems(items: Proyecto[]) {
    if (items.length === 0) {
      this.proyectoService.postProyecto(this.proyectoBase).subscribe(item => {
        this.proyectoBase = item
        this.proyectoList.push(item)
      })
    } else {
      this.proyectoList = items
    }
  }

  public agregarProyecto(proyecto: Proyecto) {
    this.proyectoService.postProyecto(proyecto).subscribe(item => {
      this.proyectoList = [...this.proyectoList, item]
    })
  }

  public cargarDatoSectionado(proyecto: Proyecto) {
    this.proyectoSelectionado = proyecto
   
  }

  public eliminarProyecto(proyecto: Proyecto) {
    this.proyectoList = this.proyectoList.filter(item => item.id !== proyecto.id)
    this.proyectoService.deleteProyecto(proyecto).subscribe()
  }

  public editarProyecto(proyecto: Proyecto) {
    
    proyecto.id = this.proyectoSelectionado.id
    for (let pro of this.proyectoList) {
      if (pro.id != proyecto.id) continue
      pro.descripcion = proyecto.descripcion
      pro.github_url = proyecto.descripcion
      pro.img_src = pro.img_src
      pro.lenguajeDeProgramaciion = proyecto.lenguajeDeProgramaciion
      pro.nombre = proyecto.nombre
    }

    this.proyectoService.putProyecto(proyecto).subscribe()
  }

}
