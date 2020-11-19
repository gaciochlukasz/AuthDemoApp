import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'ath-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private helperService: HelperService
  ) {}

  ngOnInit() {
    this.form = this.formBuild();
  }

  formBuild(): FormGroup {
    return this.formBuilder.group({
      email: ['', { validators: [Validators.required] }],
      password: ['', { validators: [Validators.required] }],
    });
  }

  login() {
    if (!this.form.valid) {
      return;
    }

    this.authService.login(this.form.value);
  }

  register() {
    this.router.navigate(['register']);
  }
}
