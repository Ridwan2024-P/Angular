import { Routes } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { App } from './app';

export const routes: Routes = [
    {path:'',component:App},
    {path:'login', component:Login},
    {path:'Sign_up', component:SignUp},
      {
    path: '**',
    redirectTo: 'login'
  }
];
