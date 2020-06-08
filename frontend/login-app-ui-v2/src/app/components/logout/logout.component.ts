import { Component, OnInit } from '@angular/core';
import {HcAuthenticationService} from '../../services/auth/hc-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hcAuthService: HcAuthenticationService
  ) { }

  ngOnInit(): void {
    this.hcAuthService.logout();
  }

}
