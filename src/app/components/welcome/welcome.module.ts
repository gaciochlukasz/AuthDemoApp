import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { ShareModule } from './../../share.module';

import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, ShareModule, WelcomeRoutingModule],
  declarations: [WelcomeComponent, LoginComponent, RegisterComponent],
})
export class WelcomeModule {}
