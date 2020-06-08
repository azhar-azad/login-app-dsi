import { Component, OnInit } from '@angular/core';
import {HcAuthenticationService} from '../../services/auth/hc-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(
    public hcAuthService: HcAuthenticationService
  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.hcAuthService.isUserLoggedIn();
  }

}
