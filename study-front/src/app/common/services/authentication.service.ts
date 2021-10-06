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
import { BaseService } from './base.service';
import { MessageService } from './message.service';

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
        if (JSON.parse(tokens.body).status === 200) {
          localStorage.setItem(TOKENS, JSON.stringify(tokens.headers.get("Authorization")));
          this.logined$.emit(true);
        }
        return JSON.parse(tokens.body);
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
    return !this.getAuthToken();
  }
}