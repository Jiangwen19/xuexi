
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth-guard';
import { MENUKEY, PERMITKEY } from './common/model/auth/menu-authoritys';
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
  { path: 'home-refresh', redirectTo: 'main' },
  { path: 'main', redirectTo: 'main/index', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: 'index', component: IndexComponent }
      // => loading...
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

const componentMap = new Map([
  // ['main目录下url', 组件]
  ['users-manage', NewBookComponent],
  ['menu-manage', MenuManageComponent]
]);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [
    componentMap.get('users-manage'),
    componentMap.get('menu-manage'),
  ]
})
export class AppRoutingModule {
  constructor(router: Router, private authService: AuthenticationService, private navConvertService: NavConvertService) {

    let setRouter = router.config[3].children;
    let hasMenu = this.authService.hasMenu();

    this.authService.loadMain$.subscribe((isMain) => {
      if (isMain && !hasMenu) {
        this.authService.getMenuAndAuthoritys().subscribe((resNav) => {
          let meunList = this.navConvertService.getMenus(resNav.data.nav);
          sessionStorage.setItem(MENUKEY, JSON.stringify(meunList));
          sessionStorage.setItem(PERMITKEY, JSON.stringify(resNav.data.authoritys));
        })
      }
    })

    if (hasMenu) {
      let meunList = this.authService.getMenu();
      for (let item of meunList) {
        if (item.children) {
          item.children.forEach(element => {
            setRouter.push({ path: element.path, component: componentMap.get(element.path) })
          });
        }
      }
    }

  }

}