import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL} from '../../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

export class AuthenticationBean{
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeJWTAuthenticationService(email, password) {

    return this.httpClient.post<any>(
      `${API_URL}/authenticate`, {
        email,
        password
      }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, email);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  executeAuthenticationService(userid, password) {

    const token = 'Basic ' + window.btoa(userid + ':' + password);

    const headers = new HttpHeaders({
      Authorization: token
    });

    return this.httpClient.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, userid);
          sessionStorage.setItem(TOKEN, token);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
