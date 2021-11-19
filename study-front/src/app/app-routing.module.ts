
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth-guard';
import { MENUKEY } from './common/model/auth/menu-authoritys';
import { AuthenticationService } from './common/services/authentication.service';
import { PostmanService } from './common/services/postman.service';
import { LoginComponent } from './pages/login/login.component';
import { BookManageComponent } from './pages/main/book-manage/book-manage.component';
import { DictsUploadComponent } from './pages/main/dicts-upload/dicts-upload.component';
import { LessonManageComponent } from './pages/main/lesson-manage/lesson-manage.component';
import { IndexComponent } from './pages/main/main-index/index.component';
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

// 加入到导航中的组件
const component: any[] = [
  UserManageComponent,
  MenuManageComponent,
  RoleManageComponent,
  DictsUploadComponent,
  BookManageComponent,
  LessonManageComponent
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: component
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
          sessionStorage.setItem(MENUKEY, JSON.stringify(menuList));
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

      let index = this.hasComponent(item)
      if (index !== -1) {
        setRouter.push({
          path: item.path, component: component[index],
          data: { breadcrumb: item.title }
        })
      }

      if (item.children.length !== 0) {
        this.dynamicLoadMenu(setRouter, item.children)
      }
    }

  }
  private hasComponent(item: any): number {
    for (let i = 0; i < component.length; i++) {
      if (item.component === component[i].name) {
        return i;
      }
    }
    return -1;
  }

}
