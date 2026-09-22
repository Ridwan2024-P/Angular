import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductSerach } from './product-serach/product-serach';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductSerach, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task');
}
