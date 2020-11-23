import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';
import { ShareModule } from './../../share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        canActivate: [LoginGuard],
        component: DashboardComponent,
      },
    ]),
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
