import { Injectable } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { PedidoResponse } from '../../public/models/pedido-response.model';
import { PedidoRequest } from '../../public/models/pedido-request.model';
import { HttpClient } from '@angular/common/http';
import { UrlConstans } from '../../constants/url.constans';

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends CrudServiceService<PedidoRequest,PedidoResponse>{

  constructor(
    protected http:HttpClient
  ) 
  {
    super (http,UrlConstans.pedido)
  }
}
