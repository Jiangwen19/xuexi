import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewBookComponent } from './pages/main/book/new-book/new-book.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'main', component: MainComponent, children: [
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
