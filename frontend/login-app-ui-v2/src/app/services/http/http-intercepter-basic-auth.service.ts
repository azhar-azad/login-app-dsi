import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BasicAuthenticationService} from '../auth/basic-authentication.service';
import {JwtAuthenticationService} from '../auth/jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    // private basicAuthService: BasicAuthenticationService
    private jwtAuthService: JwtAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // const userid = 'azad@gmail.com';
    // const password = '1234';
    // const basicAuthHeaderString = 'Basic ' + window.btoa(userid + ':' + password);

    const token = this.jwtAuthService.getAuthenticatedToken();
    const userid = this.jwtAuthService.getAuthenticatedUser();

    if (token && userid) {
      req = req.clone({
        setHeaders : {
          Authorization : token
        }
      });
    }
    return next.handle(req);

  }
}
