import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tokens, TOKENS } from '../model/auth/tokens';
import { UserInfoVo } from '../model/auth/user.info.vo';
import { StorageUtils } from '../utility/storage-utils';
import { BaseService } from './base.service';
import { MessageService } from './message.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiResponse } from '../model/api.response';
import { environment } from 'src/environments/environment';
import qs from 'qs'

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {


  public logined$: EventEmitter<boolean>;

  constructor(private http: HttpClient,
    messageService: MessageService) {
    super(messageService);
    this.logined$ = new EventEmitter();
  }

  captcha(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/captcha`);
  }

  login(loginUser: UserInfoVo) {
    return this.postToBackEnd(loginUser, 'login');
  }

  myInfo(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/currentUser`);
  }

  signup(signupUser: UserInfoVo) {
    return this.postToBackEnd(signupUser, 'signup');
  }

  private postToBackEnd<T>(user: UserInfoVo, url: string): Observable<T> {
    // { 'username': user.username, 'password': user.password, 'codeToken': user.codeToken, 'verificationCode': user.verificationCode }
    // Post发请求返回用户的Token，存储到LocalStorage中，TODO 需要防止跨站点攻击
    //`${this.API_URL}/${url}?`+qs.stringify(user)
    return this.http.post<any>(`${this.API_URL}/${url}`, { 'username': user.username, 'password': user.password, 'codeToken': user.codeToken, 'verificationCode': user.verificationCode },
      Object.assign(this.httpOptions, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }),
        responseType: 'text' as 'json'
      }))
      .pipe(map(tokens => {
        // login successful if there's a user in the response
        console.log(tokens)
        if (tokens) {
          // store user details and basic auth credentials in local storage
          localStorage.setItem(TOKENS, tokens);
          this.logined$.emit(true);
        }
        return tokens;
      }));
  }

  refreshToken(): Observable<Tokens> {
    return this.http.post<Tokens>(`${this.API_URL}/refresh-token`, null);
  }

  getAuthToken(): string {
    let tokens: Tokens = StorageUtils.getTokens();
    return tokens ? tokens.token : '';
  }

  getRefreshAuthToken(): string {
    let tokens: Tokens = StorageUtils.getTokens();
    return tokens ? tokens.refreshToken : '';
  }

  /**
   * 在Request的header中追加验证token
   */
  addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

  logout() {
    localStorage.removeItem(TOKENS);
    this.logined$.emit(false);
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
    return !this.isRefreshTokenExpired();
  }
}