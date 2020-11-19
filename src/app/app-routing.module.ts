import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./welcome/welcome.module').then(l => l.WelcomeModule),
  },
  {
    path: 'dashboard',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(d => d.DashboardModule),
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
