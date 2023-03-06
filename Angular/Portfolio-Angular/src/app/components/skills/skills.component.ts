import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skillService/skill.service';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillList!: Skill[];
  datoClick!: Skill ;
  constructor(private serviceSkill: SkillService) { }
  ngOnInit(): void {
    this.serviceSkill.obtenerDatos().subscribe(datos => {
      this.skillList = datos;
    })
  }
  
  public obtenerDatos(datos:Skill){
    this.datoClick = datos;
  }

  private actualizarDatos(dato:Skill){
    for (let item of this.skillList){
      if(item.id != dato.id) continue;
      item.lenguajeSkill = dato.lenguajeSkill
      item.porcentaje = dato.porcentaje
    }
  }

  public editarSkill(dato:Skill){
    this.actualizarDatos(dato);
    this.serviceSkill.updateSkill(dato).subscribe()
  }

  public eliminarSkill(dato:Skill){
    this.serviceSkill.eliminarSkill(dato).subscribe(item => {
      this.skillList = this.skillList.filter(skill => skill.id !== dato.id)

    })
  }

  public agregarSkill(dato:Skill){
    dato.id = this.skillList.length + 1;
    this.skillList = [...this.skillList, dato]
    this.serviceSkill.agregarSkill(dato).subscribe(item => {
      this.skillList = item})

  }

}




