import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/tokenService/token.service';

@Component({
  selector: 'app-button-editar',
  templateUrl: './button-editar.component.html',
  styleUrls: ['./button-editar.component.css']
})
export class ButtonEditarComponent implements OnInit {
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
