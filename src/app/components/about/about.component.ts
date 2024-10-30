import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  projectDescription = `
    The "IoT-Based Web Application for Smart Pond Monitoring" is designed to provide real-time monitoring and management of pond environments using advanced IoT sensors.
    The application enables users to monitor crucial parameters such as temperature, pH levels, water level, rainfall, and oxygen levels, helping to maintain a balanced and healthy ecosystem.
  `;

  sensors = [
    'Temperature Sensor',
    'pH Sensor',
    'Water Level Sensor',
    'Rainfall Sensor',
    'Oxygen Sensor',
  ];

  teamMembers = [
    {
      name: 'BALLA KAVYA',
      role: 'Database Management and Optimization',
      image: '/Kavya.JPG',
    },
    {
      name: 'KOLA BHARGAV',
      role: 'Email Notification System & Hardware Connection',
      image: '/bhargav.png',
    },
    {
      name: 'KUNCHALA CHAITANYA',
      role: 'Historical Data Analysis and Reporting',
      image: '/CHAITU2.jpg',
    },
    {
      name: 'BATTULA MOUNIKA',
      role: 'Data Visualization Module',
      image: '/mounika.jpg',
    },
    {
      name: 'KONCHADA PRANATHI',
      role: 'Login and Authentication Module',
      image: '/pranathi.jpg',
    },
    {
      name: 'GURUGUBELLI SRAVANTHI',
      role: 'User Interface for Pond Details',
      image: '/sravanthi.jpg',
    },
    {
      name: 'KOTLA HARSHITHA',
      role: 'Pond Management Module',
      image: '/Harsi.jpg',
    },
    {
      name: 'GOLLA NIHARIKA',
      role: 'Sensor Management Module',
      image: '/Niharika.jpg',
    },
    {
      name: 'KOTA MINNU MADAN',
      role: 'Arduino Integration, Data Handling & System Integration',
      image: '/minnukota381.JPG',
    },
  ];

  projectGuides = [
    {
      name: 'Debendra Maharana',
      role: 'Complete Project Guide',
      image: '/Deb.png',
    },
    {
      name: 'Rajesh Kumar Mishra',
      role: 'IoT Integration',
      image: '/Rajesh.png',
    },
  ];
}
