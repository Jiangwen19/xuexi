
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth-guard';
import { MENUKEY, PERMITKEY } from './common/model/auth/menu-authoritys';
import { AuthenticationService } from './common/services/authentication.service';
import { PostmanService } from './common/services/postman.service';
import { LoginComponent } from './pages/login/login.component';
import { BookListComponent } from './pages/main/book/book-list/book-list.component';
import { IndexComponent } from './pages/main/index/index.component';
import { MainComponent } from './pages/main/main.component';
import { MenuManageComponent } from './pages/main/menu-manage/menu-manage.component';
import { RoleManageComponent } from './pages/main/role-manage/role-manage.component';
import { UserManageComponent } from './pages/main/user-manage/user-manage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home-refresh', redirectTo: 'main' },
  { path: 'main', redirectTo: 'main/index', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: 'index', component: IndexComponent, data: { breadcrumb: '首页' } }
      // => loading...
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

const componentMap = new Map([
  // ['main目录下url', 组件]
  ['users-manage', UserManageComponent],
  ['menu-manage', MenuManageComponent],
  ['roles-manage', RoleManageComponent],
  ['booklist', BookListComponent]
]);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [
    UserManageComponent,
    MenuManageComponent,
    RoleManageComponent,
    BookListComponent
  ]
})
export class AppRoutingModule {
  constructor(router: Router, private authService: AuthenticationService, private postmanService: PostmanService) {

    let setRouter = router.config[3].children;
    let hasMenu = this.authService.hasMenu();

    this.postmanService.loadLogin$.subscribe((islogin) => {
      if (islogin === true) {
        setRouter.length = 1;
      }
    })
    this.postmanService.loadMain$.subscribe((isMain) => {
      let hasRetainMenu = this.authService.hasMenu();
      if (isMain && !hasRetainMenu) {
        this.authService.getMenuAndAuthoritys().subscribe((resNav) => {
          let menuList = resNav.data.nav;
          let permList = resNav.data.authoritys
          sessionStorage.setItem(MENUKEY, JSON.stringify(menuList));
          sessionStorage.setItem(PERMITKEY, JSON.stringify(permList));
          this.dynamicLoadMenu(setRouter, menuList);
        })
      }
    })

    if (hasMenu) {
      let menuList = this.authService.getMenu();
      this.dynamicLoadMenu(setRouter, menuList);
    }

  }

  private dynamicLoadMenu(setRouter: any[], menu: any[]) {
    for (let item of menu) {
      if (item.children) {
        item.children.forEach(element => {
          setRouter.push({
            path: element.path, component: componentMap.get(element.path),
            data: { breadcrumb: element.title }
          })
        });
      }
    }
  }

}