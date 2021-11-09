import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';
import { RoleVo } from '../model/vo/role-vo';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoleList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/role/list`);
  }

  getRoleInfo(roleId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/role/info/${roleId}`);
  }

  addRole(roleVo: RoleVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/role/save`, roleVo);
  }
}
