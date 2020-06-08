import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {LogoutComponent} from './components/logout/logout.component';
import {RouteGuardService} from './services/guard/route-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [RouteGuardService] },
  { path: 'home/:id', component: HomeComponent, canActivate: [RouteGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
