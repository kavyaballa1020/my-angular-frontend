import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ponds',
  templateUrl: './ponds.component.html',
  styleUrls: ['./ponds.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class PondsComponent {
  ponds = [
    {
      name: 'Pond 1',
      image: 'https://www.agriculture.com/thmb/F470pJd4uVVhiJuZDJ1gOTuUE8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100008958_preview-efb5c8518bbd4f9689fe61d785fb4a4b.jpg'
    },
    {
      name: 'Pond 2',
      image: 'https://pondandgarden.com.au/wp-content/uploads/2022/12/aquascape-pond-ecosystem-1024x1024.jpeg.webp'
    },
    {
      name: 'Pond 3',
      image: 'assets/image3.jpg' // Use your local image path here
    }
  ];

  viewDetails(pond: any) {
    console.log('Viewing details for', pond.name);
  }

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']); // Adjust the route path as needed
  }
}
