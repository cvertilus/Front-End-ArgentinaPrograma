import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroAboutMeComponent } from './components/hero-about-me/hero-about-me.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExperienciaEducacionComponent } from './components/experiencia-educacion/experiencia-educacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ExperenciaComponent } from './components/experiencia-educacion/experencia/experencia.component';
import { EducacionComponent } from './components/experiencia-educacion/educacion/educacion.component';
import { HomeComponent } from './components/home/home.component';
import { HeroAboutMeServiceService } from './service/heroService/hero-about-me-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonEditarComponent } from './components/button-editar/button-editar.component';
import { EditarEduacionComponent } from './components/experiencia-educacion/educacion/editar-educacion/editar-eduacion.component';
import { EditarExperienciaComponent } from './components/experiencia-educacion/experencia/editar-experiencia/editar-experiencia.component';
import { EditarHeroAboutMeComponent } from './components/hero-about-me/editar-hero-about-me/editar-hero-about-me.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ButtonEliminarComponent } from './components/button-eliminar/button-eliminar.component';
import { ButtonAgregarComponent } from './components/button-agregar/button-agregar.component';
import { EducacionService } from './service/educacionService/educacion.service';
import { EditarHabilidadComponent } from './components/habilidad/editar-habilidad/editar-habilidad.component';
import { EditarProyectoComponent } from './components/proyecto/editar-proyecto/editar-proyecto.component';
import { HabilidadService } from './service/habilidadService/habilidad.service';
import { ProyectoService } from './service/proyectoService/proyecto.service';
import { ExperienciaService } from './service/experienciaService/experiencia.service';
import { EmailService } from './service/emailService/email.service';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { AuthService } from './service/authService/auth.service';
import { TokenService } from './service/tokenService/token.service';
import { PortfolioGuardService } from './service/Guards/portfolio-guard.service';
import { PortfolioInterceptorService, interceptorProvider } from './service/interceptor/portfolio-interceptor.service';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroAboutMeComponent,
    ProyectoComponent,
    HabilidadComponent,
    LoginComponent,
    NavBarComponent,
    ExperienciaEducacionComponent,
    ContactoComponent,
    ExperenciaComponent,
    EducacionComponent,
    HomeComponent,
    ButtonEditarComponent,
    EditarEduacionComponent,
    EditarExperienciaComponent,
    EditarHeroAboutMeComponent,
    ButtonEliminarComponent,
    ButtonAgregarComponent,
    EditarHabilidadComponent,
    EditarProyectoComponent,
    RegistroComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
   
  ],
  providers: [
    HeroAboutMeServiceService,
    EducacionService,
    HabilidadService,
    ProyectoService,
    ExperienciaService,
    EmailService,
    AuthService,
    TokenService,
    PortfolioGuardService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
