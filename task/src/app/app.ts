import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductSerach } from './product-serach/product-serach';
import { Cart } from './cart/cart';
import { ProductFilter } from './product-filter/product-filter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductSerach, Cart,ProductFilter,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task');
}
