import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PondsComponent } from './components/ponds/ponds.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SensorsComponent } from './components/sensors/sensors.component';
import { AnalysisVisualisationComponent } from './components/analysis-visualisation/analysis-visualisation.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { PondListComponent } from './components/pond-list/pond-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'ponds', component: PondsComponent },
  {path:'landing',component:LandingPageComponent},
  {path:'sensor', component:SensorsComponent},
  {path:'analysis', component:AnalysisVisualisationComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'admin',component:AdminComponent},
  {path:'pond-list',component:PondListComponent}
];

