import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, startWith ,map} from 'rxjs';

interface Product{
  id:number;
  name:string;
  price:number;
}

@Component({
  selector: 'app-product-serach',
  standalone:true,
  imports: [ CommonModule,
    ReactiveFormsModule],
  templateUrl: './product-serach.html',
  styleUrl: './product-serach.css',
})
export class ProductSerach {
    searchControl = new FormControl('');
      products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      price: 80000
    },
    {
      id: 2,
      name: 'Samsung S24',
      price: 70000
    },
    {
      id: 3,
      name: 'Xiaomi 14',
      price: 50000
    },
    {
      id: 4,
      name: 'iPhone 15 Pro',
      price: 120000
    },
    {
      id: 5,
      name: 'OnePlus 12',
      price: 60000
    }
  ];

    filteredProducts$:Observable<Product[]>= this.searchControl.valueChanges.pipe(
        startWith(''),
        map(searchText=>
          searchText?.toLowerCase().trim()??''
        ),
        map(searchText => 
          this.products.filter(product=>
            product.name.toLowerCase().includes(searchText)
          )
        )
   )
}
