import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth-guard';
import { ROUTERKEY } from './common/model/auth/menu-authoritys';
import { AuthenticationService } from './common/services/authentication.service';
import { PostmanService } from './common/services/postman.service';
import { LoginComponent } from './pages/login/login.component';
import { BookManageComponent } from './pages/main/book-manage/book-manage.component';
import { CodeManageComponent } from './pages/main/code-manage/code-manage.component';
import { ConsumerManageComponent } from './pages/main/consumer-manage/consumer-manage.component';
import { DictsUploadComponent } from './pages/main/dicts-upload/dicts-upload.component';
import { GrammarManageComponent } from './pages/main/grammar-manage/grammar-manage.component';
import { HistoryManageComponent } from './pages/main/history-manage/history-manage.component';
import { LessonManageComponent } from './pages/main/lesson-manage/lesson-manage.component';
import { IndexComponent } from './pages/main/main-index/index.component';
import { MainComponent } from './pages/main/main.component';
import { MenuManageComponent } from './pages/main/menu-manage/menu-manage.component';
import { PhraseManageComponent } from './pages/main/phrase-manage/phrase-manage.component';
import { RoleManageComponent } from './pages/main/role-manage/role-manage.component';
import { SentenceDetailComponent } from './pages/main/sentence-detail/sentence-detail.component';
import { SentenceManageComponent } from './pages/main/sentence-manage/sentence-manage.component';
import { UserManageComponent } from './pages/main/user-manage/user-manage.component';
import { WordManageComponent } from './pages/main/word-manage/word-manage.component';
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
  LessonManageComponent,
  CodeManageComponent,
  SentenceManageComponent,
  SentenceDetailComponent,
  WordManageComponent,
  PhraseManageComponent,
  GrammarManageComponent,
  ConsumerManageComponent,
  HistoryManageComponent
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: component
})
export class AppRoutingModule {
  constructor(router: Router, private authService: AuthenticationService, private postmanService: PostmanService) {

    let setRouter = router.config[3].children;
    this.postmanService.loadLogin$.subscribe(() => { setRouter.length = 1 })
    this.postmanService.loadMain$.subscribe(() => {
      let hasRetainMenu = this.authService.getRouteList();
      if (!hasRetainMenu) {
        this.authService.getMenuAndAuthoritys().subscribe((res) => {
          let routers = res.data.pathComponents;
          sessionStorage.setItem(ROUTERKEY, JSON.stringify(routers));
          this.dynamicLoadMenu(setRouter, routers);
        })
      }
    })
    if (this.authService.getRouteList()) {
      let routers = this.authService.getRouteList();
      this.dynamicLoadMenu(setRouter, routers);
    }
  }
  private dynamicLoadMenu(setRouter: any[], routers: any[]) {
    for (let item of routers) {
      let index = this.hasComponent(item)
      if (index !== -1) {
        setRouter.push({
          path: item.path, component: component[index],
          data: { breadcrumb: item.title }
        })
      }
    }
  }
  private hasComponent(item: any): number {
    for (let i = 0; i < component.length; i++) {
      if (component[i].name === item.component) {
        return i;
      }
    }
    return -1;
  }
}