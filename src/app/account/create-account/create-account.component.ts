import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CreateAccountComponent {
  accountData = { tipoConta: '', saldo: 0, nomeBanco: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.createAccount(this.accountData).subscribe(response => {
      this.successMessage = 'Conta criada com sucesso!';
      this.errorMessage = '';
    }, error => {
      this.errorMessage = 'Erro na criação da conta: ' + error.message;
      this.successMessage = '';
    });
  }
}
