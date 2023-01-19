import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/header/login/login.component';
import { SocialMediaComponent } from "./components/header/social-media/social-media.component";
import { NavLinkComponent } from './components/header/nav-link/nav-link.component';
import * as Aos from 'aos';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeSectionComponent,
        AboutMeComponent,
        ExperienciasComponent,
        SkillsComponent,
        ProyectosComponent,
        LoginComponent,
        SocialMediaComponent,
        NavLinkComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        
    ]
})
export class AppModule { }
