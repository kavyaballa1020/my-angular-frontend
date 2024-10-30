// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl:'./login.component.css',
  standalone: true,
  imports:[FormsModule,CommonModule,RouterModule]
})
export class LoginComponent {
  credentials = { login: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}


login() {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  this.http.post('http://localhost:8080/api/users/login', this.credentials, { headers, observe: 'response' })
    .subscribe({
      next: () => this.router.navigate(['/ponds']),
      error: (error) => {
        console.error('Login error:', error); 
        alert('Invalid credentials. Please check your login and password.');
      }
    });
}
}
