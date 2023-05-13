import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroAboutMeComponent } from './components/hero-about-me/hero-about-me.component';
import { ExperienciaEducacionComponent } from './components/experiencia-educacion/experiencia-educacion.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { EditarHeroAboutMeComponent } from './components/hero-about-me/editar-hero-about-me/editar-hero-about-me.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { PortfolioGuardService } from './service/Guards/portfolio-guard.service';



const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'hero', component:HeroAboutMeComponent,canActivate:[PortfolioGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'experienciaEducacion',component:ExperienciaEducacionComponent,canActivate:[PortfolioGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'habilidad',component:HabilidadComponent,canActivate:[PortfolioGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'proyecto',component:ProyectoComponent,canActivate:[PortfolioGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'contact',component:ContactoComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
