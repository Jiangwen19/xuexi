import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';
import { CodeVo } from '../model/vo/code-vo';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(private http: HttpClient) { }

  getCodeList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/code/list`);
  }

  getCodeInfo(codeId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/code/info/${codeId}`);
  }

  addCode(codeVo: CodeVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/code/save`, codeVo);
  }

  codeUpdateById(codeVo: CodeVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/code/update`, codeVo);
  }

  deleteCodeById(codeId: number): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/code/delete`, codeId);
  }

}
