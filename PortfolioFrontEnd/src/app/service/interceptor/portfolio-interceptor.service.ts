import { Injectable } from '@angular/core';
import { TokenService } from '../tokenService/token.service';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioInterceptorService {

  constructor(private token: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token_ = this.token.getToken();
    if (token_ != null) {
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token_)});
    }
    return next.handle(intReq);
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: PortfolioInterceptorService, multi: true}];
