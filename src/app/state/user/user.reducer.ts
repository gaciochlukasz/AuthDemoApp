import { Action, createReducer, on } from '@ngrx/store';
import { UserModel } from './../../models/user.model';
import { User, UserSuccess, UserError } from './user.actions';

export interface UserState {
  userDetails: UserModel
  errorMessage: string;
}

export const defaultState: UserState = {
  userDetails: {
    id: null,
    email: '',
    firstName: '',
    lastName: '',
    nick: ''
  },
  errorMessage: ''
};

function user(state: UserState) {
  return {
    ...state,
  };
}

function userSuccess(state: UserState, data) {
  return {
    ...state,
    userDetails: data.userDetails
  };
}

function userError(state: UserState = defaultState, data) {
  return {
    ...state,
    errorMessage: ''
  };
}

const userReducer = createReducer(
  defaultState,
  on(User, user),
  on(UserSuccess, userSuccess),
  on(UserError, userError)
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
