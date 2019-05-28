import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import {  SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const appRoutes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard' , component:DashboardComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

