import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService, private message: NzMessageService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = this.authService.getAuthToken();
        const refreshToken = this.authService.getRefreshAuthToken();

        if (accessToken && refreshToken) {
            const token = request.url.endsWith("refresh-token") ? refreshToken : accessToken;
            request = request.clone({
                setHeaders: {
                    'Authorization': token
                }
            });

        }
        return next.handle(request).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    let eventBody = event.clone().body;
                    if (typeof eventBody === 'string') {
                        eventBody = JSON.parse(eventBody);
                    }

                    if (eventBody.status !== 200) {
                        this.message.create('error', eventBody.msg ? eventBody.msg : '系统异常！');
                    }
                }
            })
        );
    }

}