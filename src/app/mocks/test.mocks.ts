import { LoginComponent } from '../components/welcome/login/login.component';
import { RegisterComponent } from '../components/welcome/register/register.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';

export const initialState = {
  accessToken: '',
  userId: null,
  errorMessage: '',
  logout: false,
};

export const routing = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
