import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiResponse } from "../model/api.response";
import { MenuVo } from "../model/vo/menu-vo";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuInfoById(menuId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/menu/info/${menuId}`);
  }

  MenuUpdateById(menuVo: MenuVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/menu/update`, menuVo);
  }

  addMenu(menuVo: MenuVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/menu/save`, menuVo);
  }

  getMenuList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/menu/list`);
  }
}
