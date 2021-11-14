import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiResponse } from "../model/api.response";
import { UserInfoVo } from "../model/auth/user.info.vo";
import { PasswordVo } from "../model/vo/password-vo";


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  userRegister(params: UserInfoVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/register`, params);
  }

  getUserListOfAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/user/lists`);
  }

  addUser(userInfoVo: UserInfoVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/user/save`, userInfoVo);
  }

  updateUser(userInfoVo: UserInfoVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/user/update`, userInfoVo);
  }

  userInfoById(userId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/user/info/${userId}`);
  }

  userAddRolesById(userId: number, roleIds: number[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/user/role/${userId}`, roleIds);
  }

  deleteUserByIds(userIds: number[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/user/delete`, userIds);
  }

  repass(userId: number): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/user/repass`, userId);
  }

  searchUsers(str: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/user/list/${str}`);
  }

  updatePass(passwordVo: PasswordVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/user/updatePass`, passwordVo);
  }

}