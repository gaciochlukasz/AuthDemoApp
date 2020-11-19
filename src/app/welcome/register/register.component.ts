import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { RegisterModel } from './../../models/register.model';

@Component({
  selector: 'ath-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      firstName: ['', { validators: [Validators.required] }],
      lastName: ['', { validators: [Validators.required] }],
      nick: [''],
    });
  }

  registerAccount() {
    if (!this.form.valid) {
      return;
    }
    this.authService.register(this.form.value as RegisterModel);
  }
}
