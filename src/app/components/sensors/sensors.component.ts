import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sensors',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.css'
})
export class SensorsComponent {
  sensorData = {
    ph: 7.5,
    temperature: 25, // in Celsius
    waterLevel: 80, // in percentage
    rain: 10, // in mm
    oxygen: 6.5 // in mg/L
  };
}