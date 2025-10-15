import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../../public/models/login-request.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../public/models/login-response.model';
import { UrlConstans } from '../../constants/url.constans';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) 
  {

   
  }
  login(request:LoginRequest):Observable<LoginResponse>
  {
    return this.http.post<LoginResponse>(UrlConstans.auth,request)
  }
}
