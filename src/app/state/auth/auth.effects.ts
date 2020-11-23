import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';
import {
  AuthActionsType,
  AuthLogin,
  AuthLoginLogout,
  AuthLoginSuccess,
  AuthRegister,
} from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { HelperService } from './../../services/helper.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthLogin),
        switchMap((action) => {
          return this.authService.login(action.credentials).pipe(
            map((authRes) => ({
              type: AuthActionsType.LOGIN_SUCCESS,
              payload: {
                accessToken: authRes.accessToken,
                userId: this.authService.decodeToken(authRes.accessToken).sub,
              },
            })),
            catchError((errRes) => {
              return of({
                type: AuthActionsType.LOGIN_ERROR,
                payload: errRes.error,
              });
            })
          );
        })
      ),
    { useEffectsErrorHandler: false }
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthLoginSuccess),
        tap((authRes) => {
          if (authRes.payload.accessToken) {
            localStorage.setItem('token', authRes.payload.accessToken);
            this.router.navigate(['dashboard']);
          }
        })
      ),
    { dispatch: false }
  );

  register$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthRegister),
        exhaustMap((action) => {
          return this.authService.register(action.register).pipe(
            map((authRes) => ({
              type: AuthActionsType.LOGIN_SUCCESS,
              payload: {
                accessToken: authRes.accessToken,
                userId: this.authService.decodeToken(authRes.accessToken).sub,
              },
            })),
            catchError((errRes) => {
              return of({
                type: AuthActionsType.LOGIN_ERROR,
                payload: errRes.error,
              });
            })
          );
        })
      ),
      { useEffectsErrorHandler: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthLoginLogout),
        tap(() => {
          localStorage.removeItem('token');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private helperService: HelperService,
    private router: Router
  ) {}
}
