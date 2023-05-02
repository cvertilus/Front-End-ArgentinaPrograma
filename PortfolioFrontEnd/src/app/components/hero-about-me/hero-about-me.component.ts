import { Component, OnInit } from '@angular/core';
import { HeroAboutMeServiceService } from 'src/app/service/heroService/hero-about-me-service.service';
import { HeroAboutMe } from './heroAboutMe';

@Component({
  selector: 'app-hero-about-me',
  templateUrl: './hero-about-me.component.html',
  styleUrls: ['./hero-about-me.component.css']
})
export class HeroAboutMeComponent implements OnInit {


  public hero: HeroAboutMe = {
    apellido: "Vertilus",
    about_me: 'Soy un programador altamente motivado y apasionado/a por el desarrollo de software. Cuento con habilidades sólidas en varios lenguajes de programación, como Java, Python y JavaScript, así como en el uso de diferentes herramientas de desarrollo y entornos de trabajo. Durante mi carrera he participado en diversos proyectos, tanto individuales como en equipo, y he logrado superar varios desafíos técnicos y estratégicos en diferentes etapas del ciclo de desarrollo. Me considero una persona dinámica, proactiva y orientada a resultados, lo que me ha permitido destacarme en mi trayectoria profesional. Además, me gusta aprender constantemente y trabajar en equipo, ya que creo que estas son habilidades fundamentales para el éxito en la industria del software.',
    img_src: '/assets/img/homePageImg.jpg',
    nombre: 'Colby',
    id: 1
  };


  public title: string = "About me";


  constructor(private heroService: HeroAboutMeServiceService) { }


  ngOnInit(): void {
    this.heroService.obtenerDatos().subscribe(datos => {
      this.cargarDatos(datos);
    })

  }

  private cargarDatos(lista: HeroAboutMe[]) {
    if (lista.length != 0) {
      this.hero = lista[0]
    } else {
      this.heroService.cargarDatos(this.hero).subscribe(dato => {
        this.hero = dato
      })
    }
    console.log(this.hero)

  }
 

  public editarFotoHero(dato: any) {
    if (dato.foto_perfil.length < 10) return;
   
    this.hero.img_src = dato.foto_perfil;
    this.heroService.editarDatos(this.hero).subscribe(item => {
      console.log(item)
      this.hero = item
    })

  }

  public editarAboutMeHero(dato: any) {
    if (dato.length < 10) return;
    this.hero.about_me = dato.about_me;
    this.heroService.editarDatos(this.hero).subscribe(item => {
      this.hero = item
    })

  }

  public eliminarFoto() {
    alert("Por favor debe haber una foto !");
  }

  public eliminarAboutMe(){
    this.hero.about_me = 'Esta vacio , contanos algo de ti!!';
  }


}
