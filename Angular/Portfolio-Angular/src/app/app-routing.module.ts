import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { LoginComponent } from './components/header/login/login.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:'loginModal',component:LoginComponent},
  {path:'acerca-de-mi',component:AboutMeComponent},
  {path:'experiencias',component:ExperienciasComponent},
  {path:'skills',component:SkillsComponent},
  {path:'Proyectos',component:ProyectosComponent},
  {path:'home',component:HomeSectionComponent},
  {path:'',component:HomeSectionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
