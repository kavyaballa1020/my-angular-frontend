import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports:[CommonModule,FormsModule,RouterModule]
})
export class LandingPageComponent {
  title = 'Fish Pond Monitoring Application';
  subtitle = 'Monitor and maintain optimal conditions for your fish.';
  sensorData = [
    { name: 'pH Level', value: '7.5', unit: 'pH' },
    { name: 'Temperature', value: '25', unit: '°C' },
    { name: 'Water Level', value: '80', unit: '%' },
    { name: 'Rainfall', value: '10', unit: 'mm' },
    { name: 'Oxygen Level', value: '6', unit: 'mg/L' },
  ];
  benefits = [
    'Ensure optimal living conditions for your fish.',
    'Monitor environmental changes in real-time.',
    'Receive alerts for any critical parameter deviations.',
    'Make informed decisions for better fish health.',
  ];

  features = [
    'Real-time data monitoring with sensors.',
    'User-friendly interface for easy navigation.',
    'Detailed analytics for long-term trends.',
    'Mobile access for on-the-go monitoring.',
  ];

  managementTips = [
    'If the temperature rises above optimal levels, consider adding cool water or aerating the pond.',
    'Should the pH level be high, use pH decreaser solutions to balance it.',
    'Regularly monitor oxygen levels and ensure proper aeration to maintain fish health.',
    'Be aware of rainfall and adjust water levels as necessary to prevent overflow.',
  ];
}