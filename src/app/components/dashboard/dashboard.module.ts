import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        canActivate: [LoginGuard],
        component: DashboardComponent,
      },
    ]),
  ],
})
export class DashboardModule {}
