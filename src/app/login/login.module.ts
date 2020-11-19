import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from './../share.module';

@NgModule({
  imports: [CommonModule, ShareModule, RouterModule.forChild([{
  path: '', component: LoginComponent
  }])],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}
