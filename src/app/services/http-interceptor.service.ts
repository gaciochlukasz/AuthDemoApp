import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { finalize, first, flatMap, catchError } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { environment } from './../../environments/environment';
import { Store } from '@ngrx/store';
import { LoginState } from '../state/auth/auth.reducer';
import { getAuthToken } from '../state/auth';
import { AuthActionsType } from '../state/auth/auth.actions';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private helperService: HelperService,
    private store: Store<LoginState>
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.helperService.setLoader(true);
    return this.store.select(getAuthToken).pipe(
      first(),
      flatMap((token) => {
        let headers = null;
        if (token) {
          headers = req.headers.append('Authorization', `Bearer ${token}`);
        }
        const reqCopy = req.clone({
          headers,
          url: `${environment.url}${req.url}`,
        });
        return next.handle(reqCopy).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              this.store.dispatch({ type: AuthActionsType.LOGIN_LOGOUT });
            }

            this.helperService.openErrorInfo(error.error);
            return throwError(error as HttpErrorResponse);
          }),
          finalize(() => {
            this.helperService.setLoader(false);
          })
        );
      })
    );
  }
}
