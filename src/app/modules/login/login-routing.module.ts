import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from "./components/signin/signin.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Signin' },
  { path: 'Signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
