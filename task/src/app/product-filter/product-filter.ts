import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { combineLatest, map, startWith } from 'rxjs';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css'
})
export class ProductFilter {

  searchControl = new FormControl('');

  categoryControl = new FormControl('smartphones');

  products: Product[] = [];

  constructor(private http: HttpClient) {

    this.http
      .get<ProductResponse>('https://dummyjson.com/products')
      .subscribe(response => {
        this.products = response.products;
      });

  }

  filteredProducts$ = combineLatest([

    this.searchControl.valueChanges.pipe(
      startWith('')
    ),

    this.categoryControl.valueChanges.pipe(
      startWith('smartphones')
    )

  ]).pipe(

    map(([searchText, category]) => {

      const search = searchText?.toLowerCase().trim() ?? '';

      return this.products.filter(product => {

        const matchesSearch =
          product.title
            .toLowerCase()
            .includes(search);

        const matchesCategory =
          category === 'smartphones' ||
          product.category === category;

        return matchesSearch && matchesCategory;

      });

    })

  );

}