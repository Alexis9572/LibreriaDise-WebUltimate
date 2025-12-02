import { Injectable } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { HttpClient } from '@angular/common/http';
import { UrlConstans } from '../../constants/url.constans';
import { UsuarioVRequest } from '../../models/usuario/usuario-model-request.model';
import { UsuarioVResponse } from '../../models/usuario/usuario-model.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService   extends CrudServiceService<UsuarioVRequest,UsuarioVResponse> {

  constructor(
    protected http:HttpClient
  ) {
    super (http,UrlConstans.devolucion)
   }
   resitroUsuario(request:UsuarioVRequest):Observable<UsuarioVResponse>
   {
       return this.http.post<UsuarioVResponse>(UrlConstans.usuario,request)
    }
}
