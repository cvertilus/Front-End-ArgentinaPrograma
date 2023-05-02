import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/service/habilidadService/habilidad.service';
import { Habilidad } from './habiliad';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit{
  HabilidadList: Habilidad[] = [];
  habilidadSelecionado!: Habilidad;
  habilidadBase: Habilidad = {
    id: 1,
    lenguajedeProgramacion: 'Java',
    porcentajeDeConocimiento: 80
  }

  constructor(private habilidadService: HabilidadService){}
  
  ngOnInit(): void {
    this.habilidadService.getHablidad().subscribe(datos =>{
      this.cargarDatos(datos)
    })
  }

  private cargarDatos(datos:Habilidad[]){
    if(datos.length == 0){
      this.habilidadService.postHabilidad(this.habilidadBase).subscribe(item =>{
        this.habilidadBase = item;
        this.HabilidadList.push(item)
      })
    }else{
      this.HabilidadList = datos
    }
  }


  public agregarHabilidad(habilidad: Habilidad) {
    this.habilidadService.postHabilidad(habilidad).subscribe(dato =>{
      this.HabilidadList = [...this.HabilidadList,dato]
    })
  }


  public editarHabilidad(habilidad: Habilidad) {
    habilidad.id = this.habilidadSelecionado.id
    for(let hab of this.HabilidadList){
      if(hab.id!= habilidad.id) continue;
      hab.lenguajedeProgramacion = habilidad.lenguajedeProgramacion
      hab.porcentajeDeConocimiento = habilidad.porcentajeDeConocimiento
    }
    this.habilidadService.putHabiliad(habilidad).subscribe()
  }
 
  public eliminarHabilidad(habiliad: Habilidad) {
    this.habilidadService.deleteHabilidad(habiliad).subscribe(dato =>{
      this.HabilidadList = this.HabilidadList.filter(item =>{
        item.id !== dato.id
      })
    })
  }


  public habilidadEditar(habiliad:Habilidad) {
    this.habilidadSelecionado = habiliad
    
  }
  

}
