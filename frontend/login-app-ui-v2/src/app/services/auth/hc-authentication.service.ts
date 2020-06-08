import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HcAuthenticationService {

  constructor() { }

  authenticate(email, password) {
    if (email === 'azad@gmail.com' && password === '1234') {
      sessionStorage.setItem('authenticatedUser', email);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
