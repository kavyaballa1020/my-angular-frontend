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
  sensorView: boolean = false; 

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
    this.sensorView = true;  
    this.pondService.getSensorsByPond(pondId).subscribe((data) => {
      this.sensors = data;
    });
  }

  backToPonds(): void {
    this.sensorView = false;  
    this.selectedPondId = ''; 
  }

  toggleAddPondForm(): void {
    this.showAddPondForm = !this.showAddPondForm;
    if (!this.showAddPondForm) {
      this.newPond = { id: '', name: '', sensors: [] };
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
}