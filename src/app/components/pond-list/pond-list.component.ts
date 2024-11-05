import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { PondService } from '../../services/pond.service';
import { Pond, Sensor } from '../../models/pond.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pond-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pond-list.component.html',
  styleUrls: ['./pond-list.component.css'],
})
export class PondListComponent implements OnInit {
  ponds: Pond[] = [];
  sensors: Sensor[] = [];
  selectedPondId: string = '';
  newPond: Pond = { id: '', name: '', location: '', sensors: [] };
  newSensor: Sensor = { type: '', value: '' };
  showAddPondForm: boolean = false;
  sensorView: boolean = false;

  constructor(private pondService: PondService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.loadPonds();
  }

  loadPonds(): void {
    this.pondService.getAllPonds().subscribe((data) => {
      this.ponds = data;
    });
  }

  viewSensors(pondId: string): void {
    this.selectedPondId = pondId;
    this.sensorView = true;
    this.pondService.getSensorsByPond(pondId).subscribe((data) => {
      this.sensors = data;
    });
  }

  backToPonds(): void {
    this.router.navigate(['/sensor-table']); // Navigate to sensor-table route
  }

  toggleAddPondForm(): void {
    this.showAddPondForm = !this.showAddPondForm;
    if (!this.showAddPondForm) {
      this.newPond = { id: '', name: '', location: '', sensors: [] };
      this.newSensor = { type: '', value: '' };
    }
  }

  addSensor(): void {
    if (this.newSensor.type && this.newSensor.value) {
      this.newPond.sensors.push({ ...this.newSensor });
      this.newSensor = { type: '', value: '' };
    }
  }

  addPond(): void {
    if (this.newPond.id && this.newPond.name) {
      const defaultSensors: Sensor[] = [
        { type: 'pH Sensor', value: '7.0' },
        { type: 'Temperature Sensor', value: '25°C' },
        { type: 'Rain Sensor', value: 'No Rain' },
        { type: 'Oxygen Sensor', value: '8 mg/L' },
        { type: 'Water Level Sensor', value: 'Normal' }
      ];
      this.newPond.sensors = [...this.newPond.sensors, ...defaultSensors];
      this.pondService.addPond(this.newPond).subscribe((pond) => {
        this.ponds.push(pond);
        this.toggleAddPondForm();
      });
    } else {
      alert("Please enter both Pond ID and Pond Name.");
    }
  }

  getSensorIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'ph sensor':
        return 'bi bi-droplet'; 
      case 'temperature sensor':
        return 'bi bi-thermometer'; 
      case 'rain sensor':
        return 'bi bi-cloud-rain'; 
      case 'oxygen sensor':
        return 'bi bi-wind';
      case 'water level sensor':
        return 'bi bi-water'; 
      default:
        return 'bi bi-info-circle'; 
    }
  }

  getOptimumValue(type: string): string {
    switch (type.toLowerCase()) {
      case 'ph sensor':
        return '6.5 - 8.5';
      case 'temperature sensor':
        return '20°C - 30°C';
      case 'rain sensor':
        return 'Dry/No Rain';
      case 'oxygen sensor':
        return '5 - 9 mg/L';
      case 'water level sensor':
        return 'Normal';
      default:
        return 'N/A';
    }
  }

  isOutOfRange(type: string, value: string): boolean {
    const numValue = parseFloat(value);
    switch (type.toLowerCase()) {
      case 'ph sensor':
        return numValue < 6.5 || numValue > 8.5;
      case 'temperature sensor':
        return parseFloat(value.replace('°C', '')) < 20 || parseFloat(value.replace('°C', '')) > 30;
      case 'oxygen sensor':
        return numValue < 5 || numValue > 9;
      case 'rain sensor':
        return value.toLowerCase() !== 'no rain'; 
      case 'water level sensor':
        return value.toLowerCase() !== 'normal'; 
      default:
        return false;
    }
  }

  getAlertMessage(type: string, value: string): string {
    const numValue = parseFloat(value);
    switch (type.toLowerCase()) {
      case 'ph sensor':
        if (numValue < 6.5) {
          return '⚠️ Value is below the optimum range for pH!';
        } else if (numValue > 8.5) {
          return '⚠️ Value is above the optimum range for pH!';
        }
        break;
      case 'temperature sensor':
        const tempValue = parseFloat(value.replace('°C', ''));
        if (tempValue < 20) {
          return '⚠️ Temperature is below the optimum range!';
        } else if (tempValue > 30) {
          return '⚠️ Temperature is above the optimum range!';
        }
        break;
      case 'oxygen sensor':
        if (numValue < 5) {
          return '⚠️ Oxygen level is below the optimum range!';
        } else if (numValue > 9) {
          return '⚠️ Oxygen level is above the optimum range!';
        }
        break;
      case 'rain sensor':
        if (value.toLowerCase() !== 'no rain') {
          return '⚠️ Rain detected, which is not optimal!';
        }
        break;
      case 'water level sensor':
        if (value.toLowerCase() !== 'normal') {
          return '⚠️ Abnormal water level detected!';
        }
        break;
    }
    return '';
  }
}
