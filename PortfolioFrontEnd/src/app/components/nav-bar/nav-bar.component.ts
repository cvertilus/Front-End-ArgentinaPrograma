import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/tokenService/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  implements OnInit{
isLogged=false;

 constructor(private token:TokenService,private route :Router){}
  
  ngOnInit(): void {
    if(this.token.getToken()) this.isLogged = true

    
  }

  public onLogOut(){
    this.token.logOut()
    this.route.navigate(['/login']);
  
  }


}
