import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  signInData = { username: '', password: '' };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signIn(this.signInData).subscribe(response => {
      console.log('Login bem-sucedido!', response);
    }, error => {
      console.error('Erro no login', error);
    });
  }
}
