import { Component, OnInit } from '@angular/core';
import { PondService } from '../../services/pond.service';
import { Pond, Sensor } from '../../models/pond.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-ponds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-ponds.component.html',
  styleUrls: ['./user-ponds.component.css'],
})
export class UserPondsComponent implements OnInit {
  ponds: Pond[] = [];
  sensors: Sensor[] = [];
  selectedPondId: string = '';
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
}
