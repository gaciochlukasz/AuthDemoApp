import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './auth.reducer';

const getAuthTokenFeatureSelector = createFeatureSelector<LoginState>('auth');

export const getAuthToken = createSelector(
    getAuthTokenFeatureSelector,
    (authToken: LoginState) => authToken.accessToken
);