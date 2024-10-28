import { Component } from '@angular/core';

@Component({
  selector: 'app-sensors',
  standalone: true,
  imports: [],
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