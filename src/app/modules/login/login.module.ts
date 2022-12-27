import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule
  ]
})
export class LoginModule { }
