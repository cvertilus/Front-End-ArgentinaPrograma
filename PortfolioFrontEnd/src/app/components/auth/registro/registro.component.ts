import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/authService/auth.service';
import { TokenService } from 'src/app/service/tokenService/token.service';
import { NuevoUsuario } from '../../Model/nuevo-usuario';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  implements OnInit{
  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  errMsj!: string;
  isLogged = false;
  isSucces = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
   
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        alert("cuenta creada!!")
        this.router.navigate(['/login']);
        this.isSucces = true;
      },
      err => {
        this.errMsj = err.error.mensaje;
        alert(this.errMsj)
      }
    );
  }

}
