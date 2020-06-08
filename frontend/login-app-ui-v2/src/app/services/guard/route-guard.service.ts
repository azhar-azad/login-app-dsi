import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HcAuthenticationService} from '../auth/hc-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private router: Router,
    private hcAuthService: HcAuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hcAuthService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);

    return false;
  }
}
