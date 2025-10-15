import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CargaPagesComponent } from '../public/pages/widget/carga-pages/carga-pages.component';
import { PagBienvenidoComponent } from '../public/pages/widget/pag-bienvenido/pag-bienvenido.component';
import { RegisterUserComponentComponent } from './pages/register-user-component/register-user-component.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RecoveryPasswordComponent,
    PagBienvenidoComponent,
    CargaPagesComponent,
    RegisterUserComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DatePipe,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
