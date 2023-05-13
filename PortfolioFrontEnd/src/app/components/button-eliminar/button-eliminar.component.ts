import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/tokenService/token.service';

@Component({
  selector: 'app-button-eliminar',
  templateUrl: './button-eliminar.component.html',
  styleUrls: ['./button-eliminar.component.css']
})
export class ButtonEliminarComponent implements OnInit{
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
