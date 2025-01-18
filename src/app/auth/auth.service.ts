import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  signUp(signUpData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, signUpData);
  }

  signIn(signInData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, signInData);
  }

  createAccount(accountData: any): Observable<any> {
    const token = localStorage.getItem('token') || ''; // Obtém o token do localStorage
    console.log("token" + token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(`${environment.apiUrl}/account`, accountData, { headers });
  }

  getCurrentUser(): Observable<any> {
    const token = localStorage.getItem('token') || ''; // Obtém o token do localStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/get-current-user`, { headers });
  }
}
