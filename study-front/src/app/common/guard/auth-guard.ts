import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';

/**
 * 前端的拦截器
 *
 * 如果没有登录就跳转到login页面
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    public readonly routerStateSnapshot$: EventEmitter<RouterStateSnapshot>;

    constructor(private authService: AuthenticationService, private router: Router) {
        this.routerStateSnapshot$ = new EventEmitter();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.loginedIn()) {
            return true;
        } else {
            this.routerStateSnapshot$.emit(state);
            // return this.router.parseUrl('/login');
            return false;
        }
    }
}