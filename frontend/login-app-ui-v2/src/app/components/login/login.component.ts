import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HcAuthenticationService} from '../../services/auth/hc-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'azad@gmail.com';
  password = '';
  invalidCredMsg = 'Invalid Credentials';
  isInvalidCred = false;

  constructor(
    private router: Router,
    private hcAuthService: HcAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {

    if (this.hcAuthService.authenticate(this.email, this.password)) {
      console.log('Login Success');
      this.isInvalidCred = false;
      this.router.navigate(['home', this.email]);
    } else {
      this.isInvalidCred = true;
      // this.router.navigate(['greeting', this.username]);
    }
  }

}
