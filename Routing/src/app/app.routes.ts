import { Routes } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { App } from './app';
import { User } from './user/user';
import { Profile } from './user/profile/profile';

export const routes: Routes = [
    {path:'',component:App},
    {path:'login', component:Login},
 {
    path: 'Sign_up',
    loadComponent: () =>
      import('./sign-up/sign-up').then(m => m.SignUp)
  },

    {path: '**',redirectTo: 'login'},
     {
    path: 'user',
    component: User,
    children: [
      {
        path: 'profile',
        component: Profile
      }
    ]
  },
];
