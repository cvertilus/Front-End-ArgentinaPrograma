import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/authService/auth.service';
import { TokenService } from 'src/app/service/tokenService/token.service';
import { LoginUsuario } from '../../Model/login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  islogged= false;
  isloginFail= false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!:string;
  password!:string;
  roles:string[] = [];
  errMsj! :string;
  

  constructor(private authservice: AuthService,private tokenservice:TokenService,private router:Router){}


  ngOnInit(): void {
   if(this.tokenservice.getToken()){
    this.islogged = false;
    this.isloginFail= false;
    this.roles = this.tokenservice.getAuthorities();
   }
  }

  public onLogin(){
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password)
    this.authservice.login(this.loginUsuario).subscribe(data =>{
      this.islogged= true;
      this.isloginFail = false;

      this.tokenservice.setToken(data.token)
      this.tokenservice.setUsername(data.nombreUsuario)
      this.tokenservice.setAuthorities(data.authorities)
      this.roles = data.authorities
      this.router.navigate(['/home'])
    
    
    },
    err =>{
      this.islogged=false;
      this.isloginFail= true
  
    }
    )

  }

}
