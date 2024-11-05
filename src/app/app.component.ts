import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { SensorsComponent } from "./components/sensors/sensors.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AdminComponent } from "./components/admin/admin.component";
import { PondListComponent } from "./components/pond-list/pond-list.component";
import { UserPondsComponent } from "./components/user-ponds/user-ponds.component";
import { SensorDataChartComponent } from "./components/sensor-data-chart/sensor-data-chart.component";
import { SensorDataTableComponent } from "./components/sensor-data-table/sensor-data-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ForgotPasswordComponent, LoginComponent, RegisterComponent, RouterModule, LandingPageComponent, SensorsComponent, NavbarComponent, FooterComponent, AdminComponent, PondListComponent, UserPondsComponent, SensorDataChartComponent, SensorDataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management';
}