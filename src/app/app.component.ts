import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HelperService } from 'src/app/services/helper.service';
import { LoginState } from './state/auth/auth.reducer';
import { AuthService } from 'src/app/services/auth.service';
import { AuthActionsType } from './state/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loader: boolean;

  constructor(
    private helperService: HelperService,
    private store: Store<any>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const loader$ = this.helperService.loader.subscribe((value: boolean) => {
      setTimeout(() => {
        this.loader = value;
      });
    });

    this.store.select('auth').subscribe((auth: LoginState) => {
      if (!auth.accessToken && !auth.logout) {
        const token = this.authService.getToken();
        if (token) {
          this.store.dispatch({
            type: AuthActionsType.LOGIN_SUCCESS,
            payload: {
              accessToken: token,
              userId: this.authService.decodeToken(token).sub,
            },
          });
        }
      }
    });
  }
}
