import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BasicAuthenticationService} from '../auth/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // const userid = 'azad@gmail.com';
    // const password = '1234';
    // const basicAuthHeaderString = 'Basic ' + window.btoa(userid + ':' + password);

    const token = this.basicAuthService.getAuthenticatedToken();
    const userid = this.basicAuthService.getAuthenticatedUser();

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
