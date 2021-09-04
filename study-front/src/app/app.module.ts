import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { MeunComponent } from './layout/meun/meun.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import zh from '@angular/common/locales/zh';
import { NewBookComponent } from './pages/main/book/new-book/new-book.component';
import { httpInterceptorProviders } from './common/ApiInjector/interceptor-index';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    HeaderComponent,
    MeunComponent,
    FooterComponent,
    PageNotFoundComponent,
    NewBookComponent
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
