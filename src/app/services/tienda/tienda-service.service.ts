import { Injectable } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { ProductoRequest } from '../../models/producto/productoRequest.model';
import { ProductoResponse } from '../../models/producto/productoResponse.model';
import { HttpClient } from '@angular/common/http';
import { UrlConstans } from '../../constants/url.constans';

@Injectable({
  providedIn: 'root'
})
export class TiendaServiceService extends CrudServiceService<ProductoRequest,ProductoResponse> {

  constructor(
    protected http:HttpClient
  ) 
  {
    super (http,UrlConstans.producto)
  }
}
