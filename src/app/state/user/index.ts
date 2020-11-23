import { createSelector } from '@ngrx/store';
import { UserModel } from './../../models/user.model';

export const getUser = createSelector(
    (state: UserModel) => state,
    (user: UserModel) => user
);