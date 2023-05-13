import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/tokenService/token.service';

@Component({
  selector: 'app-button-agregar',
  templateUrl: './button-agregar.component.html',
  styleUrls: ['./button-agregar.component.css']
})
export class ButtonAgregarComponent implements OnInit{
  isAdmin= false
  constructor(private token:TokenService){
  }
  ngOnInit(): void {
    const roles = this.token.getAuthorities()
    roles.forEach(rol =>{
      if(rol === "ADMIN") this.isAdmin = true
    })
  }

}
