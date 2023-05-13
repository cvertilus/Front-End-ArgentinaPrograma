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
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
   
  }

  
}
