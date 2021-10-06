import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return next.handle(req.clone({
    //         // withCredentials: true
    //     })).pipe(catchError(this.handleError));
    // }

    // private handleError(error: HttpErrorResponse): never {
    //     throw error.error;
    // }
    constructor(private authService: AuthenticationService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = this.authService.getAuthToken();
        const refreshToken = this.authService.getRefreshAuthToken();

        if (accessToken && refreshToken) {
            const token = request.url.endsWith("refresh-token") ? refreshToken : accessToken;
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            });

        }
        return next.handle(request);
    }


}