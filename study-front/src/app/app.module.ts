import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './common/ApiInjector/interceptor-index';
import { ConfirmpswDirective } from './common/directive/confirmpsw.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { BookAddComponent } from './pages/main/book-manage/book-add/book-add.component';
import { BookEditComponent } from './pages/main/book-manage/book-edit/book-edit.component';
import { BookManageComponent } from './pages/main/book-manage/book-manage.component';
import { CodeManageComponent } from './pages/main/code-manage/code-manage.component';
import { ConsumerManageComponent } from './pages/main/consumer-manage/consumer-manage.component';
import { DictsUploadComponent } from './pages/main/dicts-upload/dicts-upload.component';
import { GrammarManageComponent } from './pages/main/grammar-manage/grammar-manage.component';
import { HistoryManageComponent } from './pages/main/history-manage/history-manage.component';
import { LessonAddComponent } from './pages/main/lesson-manage/lesson-add/lesson-add.component';
import { LessonEditComponent } from './pages/main/lesson-manage/lesson-edit/lesson-edit.component';
import { LessonManageComponent } from './pages/main/lesson-manage/lesson-manage.component';
import { IndexComponent } from './pages/main/main-index/index.component';
import { MainComponent } from './pages/main/main.component';
import { MenuAddComponent } from './pages/main/menu-manage/menu-add/menu-add.component';
import { MenuEditComponent } from './pages/main/menu-manage/menu-edit/menu-edit.component';
import { MenuManageComponent } from './pages/main/menu-manage/menu-manage.component';
import { PhraseManageComponent } from './pages/main/phrase-manage/phrase-manage.component';
import { RoleAddComponent } from './pages/main/role-manage/role-add/role-add.component';
import { RoleAssignComponent } from './pages/main/role-manage/role-assign/role-assign.component';
import { RoleEditComponent } from './pages/main/role-manage/role-edit/role-edit.component';
import { RoleManageComponent } from './pages/main/role-manage/role-manage.component';
import { SentenceDetailComponent } from './pages/main/sentence-detail/sentence-detail.component';
import { SentenceManageComponent } from './pages/main/sentence-manage/sentence-manage.component';
import { UserAddComponent } from './pages/main/user-manage/user-add/user-add.component';
import { UserAssignComponent } from './pages/main/user-manage/user-assign/user-assign.component';
import { UserEditComponent } from './pages/main/user-manage/user-edit/user-edit.component';
import { UserManageComponent } from './pages/main/user-manage/user-manage.component';
import { WordManageComponent } from './pages/main/word-manage/word-manage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    MenuComponent,
    IndexComponent,
    MenuManageComponent,
    RoleManageComponent,
    UserManageComponent,
    DictsUploadComponent,
    MenuEditComponent,
    MenuAddComponent,
    RoleAddComponent,
    RoleAssignComponent,
    RoleEditComponent,
    UserAddComponent,
    UserEditComponent,
    UserAssignComponent,
    ConfirmpswDirective,
    BookManageComponent,
    BookAddComponent,
    BookEditComponent,
    LessonManageComponent,
    LessonAddComponent,
    LessonEditComponent,
    CodeManageComponent,
    SentenceManageComponent,
    SentenceDetailComponent,
    WordManageComponent,
    PhraseManageComponent,
    GrammarManageComponent,
    ConsumerManageComponent,
    HistoryManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
    httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
