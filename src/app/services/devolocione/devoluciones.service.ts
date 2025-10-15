import { Injectable } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { VwDevolucione } from '../../public/models/vwDevoluciones.model';
import { HttpClient } from '@angular/common/http';
import { UrlConstans } from '../../constants/url.constans';
import { DevolucioneRequest } from './devolucion-request.model';

@Injectable({
  providedIn: 'root'
})
export class DevolucionesService extends CrudServiceService<DevolucioneRequest,VwDevolucione>{

  constructor(
    protected http:HttpClient
  ) { 
    super (http,UrlConstans.devolucion)
  }
}
