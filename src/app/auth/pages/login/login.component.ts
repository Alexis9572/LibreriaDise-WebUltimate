import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../../public/models/login-request.model';
import { LoginResponse } from '../../../public/models/login-response.model';
import { LoadStateEnum } from '../models/load-enum';
import { CargaPagesComponent } from "../../../public/pages/widget/carga-pages/carga-pages.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  frmLoadSt = LoadStateEnum.None;
  loadStateEnum = LoadStateEnum;
  
  loginForm:FormGroup
  loginRequest:LoginRequest = new LoginRequest();
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private _authService:LoginService,
    private _router:Router
  )
  {
      this.loginForm = this.fb.group(
        {
          userName: [null,[Validators.required]],
          password: [null,[Validators.required]],
        }
      )
  }
  login()
  {

    this.loginRequest = this.loginForm.getRawValue();
    this.frmLoadSt = LoadStateEnum.Loading;

    this._authService.login(this.loginRequest).subscribe(
      {
        next:(data:LoginResponse)=>
        {
          console.log(data)
          if(data.success)
          {
            //Mensaje de Iniciado Sesion
            this.frmLoadSt = LoadStateEnum.Success;
            //Sesion store
            sessionStorage.setItem("token",data.token),
            sessionStorage.setItem("usuario",data.usuario.usuario1)
            sessionStorage.setItem("idRol",data.usuario.rolId.toString())
            sessionStorage.setItem("id",data.usuario.id.toString())




          }




        },
        error:()=>{
        
        },
        complete:()=>{
          this.frmLoadSt = LoadStateEnum.None;
          const idRol = sessionStorage.getItem("idRol")||"";
          debugger
          if(idRol == "1")
          {
            
            this._router.navigate(['/dasboard']).then(() => {
              window.location.reload();
            });;
          }
          else
          {
             
            this._router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          }

        }
        
      }
    )
  }
  
  // login(user: string, password: string) {
  //   console.log(user, password);
  //   if (user == "Ramirez") {
  //     const userObj = {
  //       user, rol: 'phpero'
  //     }
  //     localStorage.setItem("user", JSON.stringify(userObj));
  //     this.router.navigate(['/','home']);
  //   } else if( user == "Aliaga" ){
  //     const userObj = {
  //       user, rol: 'admin'
  //     }
  //     localStorage.setItem("user", JSON.stringify(userObj));
  //     this.router.navigate(['/','admin', 'panel']);
  //   }
  // }
}
