import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'], // corrected 'styleUrl' to 'styleUrls'
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ForgotPasswordComponent {
  data = { email: '', newPassword: '' };

  constructor(private userService: UserService, private router: Router) {}

  resetPassword() {
    this.userService.forgotPassword(this.data).subscribe({
      next: (res) => {
        alert(res);
        this.router.navigate(['/login']); // Redirect to login page after successful reset
      },
      error: (err) => alert('Failed to reset password')
    });
  }
}
