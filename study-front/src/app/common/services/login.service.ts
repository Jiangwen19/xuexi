import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';
import { LoginVo } from '../model/login.vo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userLogin(params: LoginVo): Observable<Object> {
    return this.http.post<Object>(`${environment.baseUrl}/login`, params);
  }

  captcha(): Observable<Object> {
    return this.http.get<Object>(`${environment.baseUrl}/captcha`);
  }
}
