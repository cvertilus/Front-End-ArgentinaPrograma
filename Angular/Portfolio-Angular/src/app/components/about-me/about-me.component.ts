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

  editarAboutMe(text: string) {
    throw new Error('Method not implemented.');
  }

  eliminarAboutMe() {
    this.aboutMeDatos.aboutme = ".............";
    this.aboutService.updateAboutMe(this.aboutMeDatos).subscribe(datos => {
      this.aboutMeDatos = datos;
    })


  
  }

  test() {
    alert("funciono");
  }
  

}
