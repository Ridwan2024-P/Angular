import { Routes } from '@angular/router';
import { User } from './user/user';
import { Task } from './tasks/task/task';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';

export const routes: Routes = [
    {
        path :'login', component:Login,
    },
    {
        path : 'signup', component:SignUp
    }
   
];
