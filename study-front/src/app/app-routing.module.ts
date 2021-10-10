import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/guard/auth-guard';
import { LoginComponent } from './pages/login/login.component';
import { NewBookComponent } from './pages/main/book/new-book/new-book.component';
import { IndexComponent } from './pages/main/index/index.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home-refresh', redirectTo: 'main' },
  { path: 'main', redirectTo: 'main/index', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: 'index', component: IndexComponent },
      { path: 'new-book', component: NewBookComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
