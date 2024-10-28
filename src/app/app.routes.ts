import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PondsComponent } from './components/ponds/ponds.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SensorsComponent } from './components/sensors/sensors.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'ponds', component: PondsComponent },
  {path:'landing',component:LandingPageComponent},
  {path:'sensor', component:SensorsComponent}
];

