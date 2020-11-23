import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from './../models/register.model';
import { HttpClient } from '@angular/common/http';
import { AuthModel } from './../models/auth.model';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

export interface JwtModel {
  sub: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(authData: LoginModel) {
    return this.http.post<AuthModel>('login', authData);
  }

  register(registerData: RegisterModel) {
    return this.http.post<AuthModel>('register', registerData);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  decodeToken(token: string): JwtModel {
    return jwt_decode(token);
  }
}
