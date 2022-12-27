import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
  { path: 'Login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'Home', loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule) },
  { path: '**', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
