import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../tokenService/token.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioGuardService implements CanActivate {

  realRol: string | undefined;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data['expectedRol'];
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';
    roles.forEach(rol => {
      if (rol === 'ADMIN') {
        this.realRol = 'admin';
      }
    });
    if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
