import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/Auth`;

  constructor(private http: HttpClient) {}

  signUp(signUpData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, signUpData);
  }

  signIn(signInData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, signInData);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-current-user`);
  }
}
