import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';
import { Tokens, TOKENS } from '../model/auth/tokens';
import { UserInfoVo } from '../model/auth/user.info.vo';
import { StorageUtils } from '../utility/storage-utils';
import { StringUtil } from '../utility/string-util';
import { BaseService } from './base.service';
import { MessageService } from './message.service';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {

  public logined$: EventEmitter<boolean>;
  public loadMain$: EventEmitter<boolean>;

  constructor(private http: HttpClient, messageService: MessageService) {
    super(messageService);
    this.logined$ = new EventEmitter();
    this.loadMain$ = new EventEmitter();
  }

  captcha(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/captcha`);
  }

  login(loginUser: UserInfoVo) {
    return this.postToBackEnd(loginUser, 'login');
  }

  getUserInfo(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/userInfo`);
  }

  getMenuAndAuthoritys(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/menu/nav`);
  }

  signup(signupUser: UserInfoVo) {
    return this.postToBackEnd(signupUser, 'signup');
  }

  private postToBackEnd(user: UserInfoVo, url: string): Observable<ApiResponse> {
    // `${this.API_URL}/${url}?`+qs.stringify(user)
    return this.http.post<any>(`${this.API_URL}/${url}`, { 'username': user.username, 'password': user.password, 'codeToken': user.codeToken, 'verificationCode': user.verificationCode },
      Object.assign(this.httpOptions, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }),
        responseType: 'text' as 'json',
        observe: 'response' as 'body'
      }))
      .pipe(map(tokens => {
        let token = JSON.parse(tokens.body);
        if (token.status === 200) {
          localStorage.setItem(TOKENS, JSON.stringify(tokens.headers.get("Authorization")));
          this.logined$.emit(true);
        }
        return token;
      }));
  }

  refreshToken(): Observable<Tokens> {
    return this.http.post<Tokens>(`${this.API_URL}/refresh-token`, null);
  }

  getAuthToken(): string {
    let token: string = StorageUtils.getTokens();
    return token ? token.substring(1, token.length - 1) : '';
  }

  getRefreshAuthToken(): string {
    let refreshToken: string = StorageUtils.getRefreshTokens();
    return refreshToken ? refreshToken.substring(1, refreshToken.length - 1) : '';
  }

  /**
   * 在Request的header中追加验证token
   */
  addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({ setHeaders: { Authorization: token } });
  }

  /**
   * 退出登录
   */
  logout(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/logout`, null).pipe(
      map(res => {
        if (res.status === 200) {
          localStorage.removeItem(TOKENS);
          this.logined$.emit(false);
        }
        return res;
      })
    );
  }

  /**
   * 判断刷新TOKEN是否失效
   */
  isRefreshTokenExpired(): boolean {
    return helper.isTokenExpired(this.getRefreshAuthToken());
  }

  /**
   * 判断TOKEN是否失效
   */
  isTokenExpired(): boolean {
    return helper.isTokenExpired(this.getAuthToken());
  }

  /**
   * 是否登陆
   */
  loginedIn(): boolean {
    return !StringUtil.isEmpty(this.getAuthToken());
  }

  /**
   * 获取路由相关菜单信息
   */
  getMenu(): any {
    return StorageUtils.getMenuList();
  }

  /**
   * 获取菜单相关限权信息
   */
  getPerm(): any {
    return StorageUtils.getPermList();
  }

  /**
   * 是否加载菜单信息
   */
  hasMenu(): boolean {
    if (this.getMenu() === null) {
      return false;
    }
    return true;
  }

  /**
   * 是否加载限权信息
   */
  hasPerm(): boolean {
    if (this.getPerm() === null) {
      return false;
    }
    return true;
  }

}