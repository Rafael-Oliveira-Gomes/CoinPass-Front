import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  signUpData = { username: '', email: '', password: '', passwordConfirm: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signUp(this.signUpData).subscribe(response => {
      this.successMessage = 'Cadastro salvo com sucesso!';
      this.errorMessage = '';
    }, error => {
      this.errorMessage = 'Erro no cadastro: ' + error.message;
      this.successMessage = '';
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
