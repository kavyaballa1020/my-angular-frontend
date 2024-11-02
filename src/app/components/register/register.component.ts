import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class RegisterComponent {
  user = { username: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  register() {
    this.userService.registerUser(this.user).subscribe({
      next: (res) => {
        alert('User registered successfully');
        this.router.navigate(['/login']); 
      },
      error: (err) => alert('Registration failed')
    });
  }
}
