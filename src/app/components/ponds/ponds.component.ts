import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ponds',
  templateUrl: './ponds.component.html',
  styleUrls: ['./ponds.component.css'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class PondsComponent {
  ponds = [
    {
      name: 'Pond 1',
      images: 'https://www.agriculture.com/thmb/F470pJd4uVVhiJuZDJ1gOTuUE8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100008958_preview-efb5c8518bbd4f9689fe61d785fb4a4b.jpg'
    },
    {
      name: 'Pond 2',
      images: ['assets/image4.jpg', 'assets/image5.jpg', 'assets/image6.jpg']
    },
    {
      name: 'Pond 3',
      images: ['assets/image7.jpg', 'assets/image8.jpg', 'assets/image9.jpg']
    }
  ];

  viewDetails(pond: any) {
    console.log('Viewing details for', pond.name);
  }

  editPond(pond: any) {
    console.log('Editing', pond.name);
    // Implement edit functionality
  }

  deletePond(pond: any) {
    console.log('Deleting', pond.name);
    // Implement delete functionality
  }
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']); // Adjust the route path as needed
  }
}
