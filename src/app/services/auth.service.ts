import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { UserModel } from './../models/user.model';
import { RegisterModel } from './../models/register.model';
import { HttpClient } from '@angular/common/http';
import { AuthModel } from './../models/auth.model';
import { HelperService } from './helper.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private helperService: HelperService,
    private router: Router
  ) {}

  login(authData: LoginModel) {
    return this.http.post<UserModel>('login', authData).subscribe(
      (user: UserModel) => {
        this.router.navigate(['dashboard']);
      },
      (err: any) => {
        this.helperService.openErrorInfo(err.error);
      }
    );
  }

  register(registerData: RegisterModel) {
    return this.http.post<AuthModel>('register', registerData).subscribe(
      (res: AuthModel) => {
        this.router.navigate(['dashboard']);
      },
      (err: any) => {
        this.helperService.openErrorInfo(err.error);
      }
    );
  }
}
