import { Action, createReducer, on } from '@ngrx/store';
import {
  AuthLogin,
  AuthLoginError,
  AuthLoginLogout,
  AuthLoginSuccess,
  AuthRegister,
  AuthRegisterError,
  AuthRegisterSuccess,
} from './auth.actions';

export interface LoginState {
  accessToken: string;
  userId: number;
  errorMessage: string;
  logout: boolean;
}

export const defaultState: LoginState = {
  accessToken: '',
  userId: null,
  errorMessage: '',
  logout: false
};

function login(state: LoginState) {
  return {
    ...state,
  };
}

function register(state: LoginState) {
  return {
    ...state,
  };
}

function authSuccess(state: LoginState = defaultState, data) {
  return {
    ...state,
    accessToken: data.payload.accessToken,
    userId: data.payload.userId,
    errorMessage: ''
  };
}

function authError(state: LoginState = defaultState, data) {
  return {
    ...state,
    accessToken: '',
    errorMessage: data.payload,
  };
}

function logout(state: LoginState = defaultState) {
  return {
    ...state,
    accessToken: '',
    userId: null,
    errorMessage: '',
    logout: true
  };
}

const authReducer = createReducer(
  defaultState,
  on(AuthLogin, login),
  on(AuthLoginSuccess, authSuccess),
  on(AuthLoginError, authError),
  on(AuthLoginLogout, logout),
  on(AuthRegister, register),
  on(AuthRegisterSuccess, authSuccess),
  on(AuthRegisterError, authError)
);

export function reducer(state: LoginState | undefined, action: Action) {
  return authReducer(state, action);
}
