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
  constructor(private serviceSkill: SkillService) { }
  ngOnInit(): void {
    this.serviceSkill.obtenerDatos().subscribe(datos => {
      this.skillList = datos;
    })
  }

  
}




