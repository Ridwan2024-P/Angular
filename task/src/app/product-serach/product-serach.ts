import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductResponse {
  products: Product[];
}

@Component({
  selector: 'app-product-serach',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLinkWithHref
  ],
  templateUrl: './product-serach.html',
  styleUrl: './product-serach.css',
})
export class ProductSerach {

  searchControl = new FormControl('');

  products: Product[] = [];

  filteredProducts$: Observable<Product[]>;

  constructor(private http: HttpClient) {

    this.http
      .get<ProductResponse>('https://dummyjson.com/products')
      .subscribe(response => {
        this.products = response.products;
      });

    this.filteredProducts$ = this.searchControl.valueChanges.pipe(
      startWith(''),

      map(searchText =>
        searchText?.toLowerCase().trim() ?? ''
      ),

      map(searchText =>
        this.products.filter(product =>
          product.title.toLowerCase().includes(searchText)
        )
      )
    );
  }
} 