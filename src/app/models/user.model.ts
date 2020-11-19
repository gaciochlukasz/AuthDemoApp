import { RegisterModel } from './register.model';

export interface UserModel extends RegisterModel {
    id: string;
}