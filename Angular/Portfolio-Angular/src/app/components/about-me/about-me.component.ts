import { Component, OnInit } from '@angular/core';
import { AboutServiceService } from 'src/app/service/about/about-service.service';
import { Aboutme } from './about';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{

  aboutMeDatos!: Aboutme;


  constructor (private aboutService:AboutServiceService){
  }
  
  ngOnInit(): void {
    this.aboutService.obtenerDatos().subscribe(datos => {
      this.aboutMeDatos = datos;
    })
  }

  updateServer(){
    this.aboutService.updateAboutMe(this.aboutMeDatos).subscribe(datos => {
      this.aboutMeDatos = datos;
    })

  }

  editarAboutMe(text: string) {
    this.aboutMeDatos.aboutme = text;
    this.updateServer()
  }

  eliminarAboutMe() {
    this.aboutMeDatos.aboutme = ".............";
    this.updateServer()
  
  }

  editarFoto(link: string) {
    this.aboutMeDatos.img = link
    this.updateServer()

    }

  test() {
    alert("funciono");
  }
  

}
