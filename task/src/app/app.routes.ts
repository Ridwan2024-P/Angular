import { Routes } from '@angular/router';
import { ProductSerach } from './product-serach/product-serach';
import { ProductFilter } from './product-filter/product-filter';
import { Cart } from './cart/cart';
import { App } from './app';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path:'productserach',component:ProductSerach},
    {path:'productfilter',component:ProductFilter},
    {path:'productcart',component:Cart},
    {path:'**',component:NotFound},

];
