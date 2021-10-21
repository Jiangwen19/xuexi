
import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth-guard';
import { AuthenticationService } from './common/services/authentication.service';
import { NavConvertService } from './common/services/nav-convert.service';
import { LoginComponent } from './pages/login/login.component';
import { NewBookComponent } from './pages/main/book/new-book/new-book.component';
import { IndexComponent } from './pages/main/index/index.component';
import { MainComponent } from './pages/main/main.component';
import { MenuManageComponent } from './pages/main/menu-manage/menu-manage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'home-refresh', redirectTo: 'main' },
  { path: 'main', redirectTo: 'main/index', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: 'index', component: IndexComponent },
      // { path: 'menu-manage', component: MenuManageComponent },
      // { path: 'new-book', component: NewBookComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [RegisterComponent]
})
export class AppRoutingModule {
  constructor(router: Router, private navConvertService: NavConvertService, private authService: AuthenticationService) {
    
    console.log(router.url)
    // this.authService.getMenuAndAuthoritys().subscribe((resData) => {
    //   if (resData) {
    //     let resNav = resData.data.nav;
    //     console.log(navConvertService.getMenus(resNav))
    //     navConvertService.getMenus(resNav);
    //   }
    // });
    console.log('Routes: ', JSON.stringify(router.config));
  }
}
// console.log('Routes: ', JSON.stringify(router.config));
    // router.config.push({ path: 'register', component: RegisterComponent });
    // console.log('Routes: ', JSON.stringify(router.config));