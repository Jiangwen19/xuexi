import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, finalize, take, filter } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { StorageUtils } from '../utility/storage-utils';
import { TOKENS, Tokens } from '../model/auth/tokens';

/**
 * 验证错误拦截器
 */
@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
    // 构造器
    constructor(private authService: AuthenticationService) { }
    //正在刷新TOKEN
    isRefreshingToken: boolean = false;
    // 创建一个token的Subject
    tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {

        return next.handle(request)
            .pipe(
                catchError(err => {
                    if (err instanceof HttpErrorResponse) {
                        switch ((<HttpErrorResponse>err).status) {
                            case 401:// token过期
                                if (null == StorageUtils.getTokens()) {
                                    return throwError(err);
                                } else {
                                    return this.handle401Error(request, next);
                                }
                            case 400:
                                return <any>this.authService.logout();
                        }
                    } else {
                        return throwError(err);
                    }
                }));
    }

    /**
     * 验证失败的时候使用RefreshToken获取新的一对token，然后重新发起请求
     * @param request  请求
     * @param next 请求处理器
     */
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {

        if (!this.isRefreshingToken) {// 不是刷新token中

            this.isRefreshingToken = true;
            // Reset here so that the following requests wait until the token
            // comes back from the refreshToken call.
            this.tokenSubject.next(null);

            return this.authService.refreshToken()
                .pipe(
                    switchMap((tokens: Tokens) => {
                        if (tokens) {
                            // 新Token
                            let newToken: string = tokens.token;
                            // 将最新的Token发布出去
                            this.tokenSubject.next(newToken);
                            // 存储Token到localStorage中
                            localStorage.setItem(TOKENS, JSON.stringify(tokens));
                            // 继续发起之前的请求
                            return next.handle(this.authService.addTokenToRequest(request, newToken));
                        } else {
                            // 如果刷新token失败的话，直接退出
                            return <any>this.authService.logout();
                        }
                    }),
                    catchError(err => {
                        // 如果产生异常，直接退出
                        return <any>this.authService.logout();
                    }),
                    finalize(() => {
                        this.isRefreshingToken = false;
                    })
                );
        } else {
            this.isRefreshingToken = false;
            return this.tokenSubject
                .pipe(
                    filter(newToken => newToken != null),
                    take(1),
                    switchMap(newToken => {
                        return next.handle(this.authService.addTokenToRequest(request, <string>newToken));
                    }));
        }
    }
}