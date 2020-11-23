import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { User, UserActionsType } from './user.actions';
import { UserService } from './../../services/user.service';

@Injectable()
export class UserEffects {
  user$ = createEffect(() =>
    this.actions$.pipe(
      ofType(User),
      mergeMap((action) => {
        return this.userService.getUserData(action.id).pipe(
          map((userResp) => ({
            type: UserActionsType.USER_SUCCESS,
            userDetails: userResp,
          })),
          catchError((errRes) => {
            return of({ type: UserActionsType.USER_ERROR, payload: errRes.error })
          }
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
