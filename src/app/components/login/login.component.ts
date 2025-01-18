import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  signInData = { username: '', password: '' };
  token: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signIn(this.signInData).subscribe(response => {
      console.log('Login bem-sucedido!', response);
      this.token = response.access_token; // Armazena o token JWT
      localStorage.setItem('token', this.token || ''); // Armazena o token no localStorage
      this.router.navigate(['/account/create']); // Redireciona para a tela de criação de conta
    }, error => {
      console.error('Erro no login', error);
    });
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
