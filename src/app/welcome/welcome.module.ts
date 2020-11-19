import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from './../share.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: WelcomeComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'register',
            component: RegisterComponent
          },
          {
            path: '',
            redirectTo: 'login'
          }
        ]
      },
    ]),
  ],
  declarations: [WelcomeComponent, LoginComponent, RegisterComponent],
})
export class WelcomeModule {}
