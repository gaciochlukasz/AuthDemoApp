import { createAction, props } from '@ngrx/store';
import { UserModel } from './../../models/user.model';

export const UserActionsType = {
  USER: '[User] User',
  USER_SUCCESS: '[User] LoginSuccess',
  USER_ERROR: '[User] LoginError'
};

export const User = createAction(
  UserActionsType.USER,
  props<{ id: number }>()
);
export const UserSuccess = createAction(
  UserActionsType.USER_SUCCESS
);
export const UserError = createAction(
  UserActionsType.USER_ERROR,
  props<{ errorMessage: string }>()
);
