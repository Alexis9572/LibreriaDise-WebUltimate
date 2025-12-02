import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioVRequest } from '../../../models/usuario/usuario-model-request.model';
import { LoadStateEnum } from '../models/load-enum';
import { Router } from '@angular/router';
import { UsuarioServiceService } from '../../../public/services/usuario-service.service';
import { UsuarioVResponse } from '../../../models/usuario/usuario-model.model';

@Component({
  selector: 'app-register-user-component',
  templateUrl: './register-user-component.component.html',
  styleUrl: './register-user-component.component.scss'
})
export class RegisterUserComponentComponent {
  myForm : FormGroup
  envioUsuario :UsuarioVRequest = new UsuarioVRequest()
  frmLoadSt = LoadStateEnum.None;
  loadStateEnum = LoadStateEnum;
  constructor(
    private fb:FormBuilder,
    private _router:Router,
    private _usuarioService:UsuarioServiceService
  )
  {
    this.myForm = this.fb.group
    (
      {
      rolId: [{value:0,disabled:true},[Validators.required]],
      id: [{value:0,disabled:true},[Validators.required]],
      personaId: [{value:0,disabled:true},[Validators.required]],
      usuario1:[null,Validators.required],
      contrasenia:[null,Validators.required],
      documento:[null,Validators.required],
      // --- Datos de la persona (objeto dentro del JSON final) ---
      persona: this.fb.group({
      id: [0],
      nombre: ["", Validators.required],
      apellidos: ["", Validators.required],
      correo: ["", Validators.required],
      telefono: ["", Validators.required],
      direccion: ["", Validators.required],
      idtipodocumento: [0, Validators.required]
      })
      }
    )
  }
  crearUsuario()
  {
    this.envioUsuario = this.myForm.getRawValue()
    this.frmLoadSt = LoadStateEnum.Loading;
    this._usuarioService.resitroUsuario(this.envioUsuario).subscribe(
      {
        next:(data:UsuarioVResponse)=>{
           this.frmLoadSt = LoadStateEnum.Success;
                      //Sesion store
            sessionStorage.setItem("token",data.loginResponse.token),
            sessionStorage.setItem("usuario",data.loginResponse.usuario.usuario1)
            sessionStorage.setItem("idRol",data.loginResponse.usuario.rolId.toString())
            sessionStorage.setItem("id",data.loginResponse.usuario.id.toString())
            
            this._router.navigate([''])
        },
        complete:()=>
        {
          this.frmLoadSt = LoadStateEnum.None;
          const idRol = sessionStorage.getItem("idRol")||"";
          debugger
          if(idRol == "1")
          {
            
            this._router.navigate(['']).then(() => {
              window.location.reload();
            });;
          }
          else
          {
             
            this._router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          }
        },
        error:()=>{
          
        }
      }
    )
  }
}

