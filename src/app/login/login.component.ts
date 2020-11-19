import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ath-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuild();
  }

  formBuild(): FormGroup {
    return this.formBuilder.group({
      login: ['', { validators: [Validators.required]}],
      password: ['', { validators: [Validators.required]}]
    })
  }

  login() {
    if (!this.form.valid) {
      return;
    }
    this.router.navigate(['dashboard']);
  }

}
