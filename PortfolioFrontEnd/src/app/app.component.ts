import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TokenService } from './service/tokenService/token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit{
  
  title = 'PortfolioFrontEnd';
  user:string = "colby"
  isLogged=false;
  constructor(private token:TokenService){}

  ngOnInit(): void {
    alert("Hola soy Colby , queria recordarte que puede tardar un poco en cargar los datos \ndebido que tengo la base de datos en una nube gratuita \n muchas gracias por la visita");
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
   
  }

  
}
