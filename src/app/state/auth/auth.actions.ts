import { createAction, props } from '@ngrx/store';
import { LoginModel } from './../../models/login.model';
import { AuthModel } from './../../models/auth.model';
import { RegisterModel } from './../../models/register.model';

export const AuthActionsType = {
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] LoginSuccess',
  LOGIN_ERROR: '[Auth] LoginError',
  LOGIN_LOGOUT: '[Auth] Logout',
  REGISTER: '[Auth] Register',
  REGISTER_SUCCESS: '[Auth] RegisterSuccess',
  REGISTER_ERROR: '[Auth] RegisterError',
};

export const AuthLogin = createAction(
  AuthActionsType.LOGIN,
  props<{ credentials: LoginModel }>()
);
export const AuthLoginSuccess = createAction(
  AuthActionsType.LOGIN_SUCCESS,
  props<{ payload: AuthModel}>()
);
export const AuthLoginError = createAction(
  AuthActionsType.LOGIN_ERROR,
  props<{ errorMessage: string }>()
);
export const AuthLoginLogout = createAction(AuthActionsType.LOGIN_LOGOUT);

export const AuthRegister = createAction(
  AuthActionsType.REGISTER,
  props<{ register: RegisterModel }>()
);
export const AuthRegisterSuccess = createAction(
  AuthActionsType.REGISTER_SUCCESS,
  props<AuthModel>()
);
export const AuthRegisterError = createAction(
  AuthActionsType.REGISTER_ERROR,
  props<{ errorMessage: string }>()
);
