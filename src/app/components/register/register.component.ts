import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  signUpData = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signUp(this.signUpData).subscribe(response => {
      console.log('Registro bem-sucedido!', response);
    }, error => {
      console.error('Erro no registro', error);
    });
  }
}
