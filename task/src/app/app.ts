import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductSerach } from './product-serach/product-serach';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductSerach],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task');
}
