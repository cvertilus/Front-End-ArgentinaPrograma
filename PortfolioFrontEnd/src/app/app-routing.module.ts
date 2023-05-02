import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroAboutMeComponent } from './components/hero-about-me/hero-about-me.component';
import { ExperienciaEducacionComponent } from './components/experiencia-educacion/experiencia-educacion.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { EditarHeroAboutMeComponent } from './components/hero-about-me/editar-hero-about-me/editar-hero-about-me.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'hero', component:HeroAboutMeComponent},
  {path:'experienciaEducacion',component:ExperienciaEducacionComponent},
  {path:'habilidad',component:HabilidadComponent},
  {path:'proyecto',component:ProyectoComponent},
  {path:'contact',component:ContactoComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
