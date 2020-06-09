import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HcAuthenticationService} from '../../services/auth/hc-authentication.service';
import {BasicAuthenticationService} from '../../services/auth/basic-authentication.service';
import {JwtAuthenticationService} from '../../services/auth/jwt-authentication.service';

export class UserData {
  constructor(
    public email: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: UserData = new UserData('', '');
  // email: string;
  // password: string;
  invalidCredMsg = 'Invalid Credentials';
  isInvalidCred = false;

  constructor(
    private router: Router,
    private hcAuthService: HcAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService,
    private jwtAuthService: JwtAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {

    if (this.hcAuthService.authenticate(this.userData.email, this.userData.password)) {
      console.log('Login Success');
      this.isInvalidCred = false;
      this.router.navigate(['home', this.userData.email]);
    } else {
      this.isInvalidCred = true;
      // this.router.navigate(['greeting', this.username]);
    }
  }

  handleBasicAuthLogin() {

    this.basicAuthenticationService.executeAuthenticationService(this.userData.email, this.userData.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['home', this.userData.email]);
          this.isInvalidCred = false;
        },
        error => {
          console.log(error);
          this.isInvalidCred = true;
        }
      );
  }

  handleJwtAuthLogin() {
    this.jwtAuthService.executeJWTAuthenticationService(this.userData.email, this.userData.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['home', this.userData.email]);
          this.isInvalidCred = false;
        },
        error => {
          console.log(error);
          this.isInvalidCred = true;
        }
      );
  }

}
