import { Routes } from '@angular/router';
import { Dahsboard } from './dahsboard/dahsboard';
import { Login } from './login/login';

export const routes: Routes = [
    {path:'dashboard', component:Dahsboard},
 {path:'',component:Login}];
