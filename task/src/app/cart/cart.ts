import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  private productsSubject = new BehaviorSubject<Product[]>([
    {
      id: 1,
      name: 'iPhone 15',
      price: 80000,
      quantity: 1
    },
    {
      id: 2,
      name: 'Samsung S24',
      price: 70000,
      quantity: 2
    },
    {
      id: 3,
      name: 'OnePlus 12',
      price: 60000,
      quantity: 1
    }
  ]);

  cartItems$ = this.productsSubject.asObservable();

  cartTotal$ = this.cartItems$.pipe(
    map(products =>
      products.reduce(
        (total, product) =>
          total + product.price * product.quantity,
        0
      )
    )
  );

  increaseQuantity(id: number): void {

    const products = this.productsSubject.value;

    const updatedProducts = products.map(product => {

      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1
        };
      }

      return product;
    });

    this.productsSubject.next(updatedProducts);
  }

  decreaseQuantity(id: number): void {
    const products = this.productsSubject.value;
    
    const updatedProducts = products.map(product => {
      if (product.id === id && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1
        };
      }

      return product;
    });

    this.productsSubject.next(updatedProducts);
  }
}