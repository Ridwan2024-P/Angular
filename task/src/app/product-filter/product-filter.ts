import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
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

  categoryControl = new FormControl('All');

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      category: 'Phone',
      price: 80000
    },
    {
      id: 2,
      name: 'Samsung S24',
      category: 'Phone',
      price: 70000
    },
    {
      id: 3,
      name: 'MacBook Air',
      category: 'Laptop',
      price: 120000
    },
    {
      id: 4,
      name: 'Dell XPS 15',
      category: 'Laptop',
      price: 150000
    },
    {
      id: 5,
      name: 'Apple Watch',
      category: 'Watch',
      price: 50000
    },
    {
      id: 6,
      name: 'Samsung Watch',
      category: 'Watch',
      price: 35000
    }
  ];

  filteredProducts$ = combineLatest([

    this.searchControl.valueChanges.pipe(
      startWith('')
    ),

    this.categoryControl.valueChanges.pipe(
      startWith('All')
    )

  ]).pipe(

    map(([searchText, category]) => {

      const search = searchText?.toLowerCase().trim() ?? '';

      return this.products.filter(product => {

        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(search);

        const matchesCategory =
          category === 'All' ||
          product.category === category;

        return matchesSearch && matchesCategory;

      });

    })

  );

}