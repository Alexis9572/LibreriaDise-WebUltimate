import { Inject, Injectable } from '@angular/core';
import { crudInterface } from '../shared/interface/crud-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestFilterGeneric } from '../models/genericResponseRequest/requestGeneric.model';
import { ResponseFilterGeneric } from '../models/genericResponseRequest/responseGeneric.model';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService<T,Y> implements crudInterface<T,Y>{

  constructor(
    protected _http:HttpClient,
    @Inject('url_service') public url_service:string // Inyeccion de Dpendencias
  ) { }
  getAll(): Observable<Y[]> {
    return this._http.get<Y[]>(this.url_service)
   
  }
  create(request: T): Observable<Y> {
    return this._http.post<Y>(this.url_service,request)
  }
  update(request: T): Observable<Y> {
    return this._http.put<Y>(this.url_service,request)
  }
  delete(id: number): Observable<number> {
    return this._http.delete<number>(`${this.url_service}/${id}`);
  }
  genericFilter(request:RequestFilterGeneric):Observable<ResponseFilterGeneric<Y>>
  {
    return this._http.post<ResponseFilterGeneric<Y>>(`${this.url_service}/filter`,request)
  }
}
