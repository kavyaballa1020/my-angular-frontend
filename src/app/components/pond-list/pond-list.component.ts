import { Component, OnInit } from '@angular/core';
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
  newPond: Pond = { id: '', name: '', sensors: [] };
  newSensor: Sensor = { type: '', value: '' };
  showAddPondForm: boolean = false;

  constructor(private pondService: PondService) {}

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
    this.pondService.getSensorsByPond(pondId).subscribe((data) => {
      this.sensors = data;
    });
  }

  toggleAddPondForm(): void {
    this.showAddPondForm = !this.showAddPondForm;
    // Reset the new pond data when opening/closing the form
    if (!this.showAddPondForm) {
      this.newPond = { id: '', name: '', sensors: [] };
      this.newSensor = { type: '', value: '' };
    }
  }

  addSensor(): void {
    if (this.newSensor.type && this.newSensor.value) {
      this.newPond.sensors?.push({ ...this.newSensor });
      this.newSensor = { type: '', value: '' }; // Reset the sensor input fields
    }
  }

  addPond(): void {
    if (this.newPond.id && this.newPond.name) {  // Ensure both ID and name are provided
      
      // Define default sensors with values
      const defaultSensors: Sensor[] = [
        { type: 'pH Sensor', value: '7.0' },          // Default pH value
        { type: 'Temperature Sensor', value: '25°C' }, // Default temperature
        { type: 'Water Level Sensor', value: 'Normal' },
        { type: 'Rain Sensor', value: 'No Rain' },
        { type: 'Oxygen Sensor', value: '8 mg/L' }     // Default oxygen level
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
}