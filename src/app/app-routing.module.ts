import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, Route, RouterModule} from "@angular/router";
import {AuthGuard, canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectAuthedToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
    ...canActivate(redirectAuthedToDashboard)
  },
  {
    path: 'dashboard',
    loadChildren: (() =>
      import('./features/dashboard/dashboard.module')
        .then(m => m.DashboardModule)),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
