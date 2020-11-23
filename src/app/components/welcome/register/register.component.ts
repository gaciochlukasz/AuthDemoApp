import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { AuthActionsType } from 'src/app/state/auth/auth.actions';
import { RegisterModel } from './../../../models/register.model';

@Component({
  selector: 'ath-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private storage: Store<any>
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
      nick: ['', { validators: [Validators.required] }],
    });
  }

  registerAccount() {
    if (!this.form.valid) {
      return;
    }
    this.storage.dispatch({type: AuthActionsType.REGISTER, register: this.form.value});
  }
}
