import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActionsType } from 'src/app/state/auth/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ath-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  auth$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>
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

    this.store.dispatch({
      type: AuthActionsType.LOGIN,
      credentials: this.form.value
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
