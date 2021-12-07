import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchCrit: string = '';

  constructor(private productsvc: ProductService) {}

  ngOnInit(): void {
    this.productsvc.list().subscribe({
      next: (res) => {
        console.debug('Products:', res);
        this.products = res as Product[];
        this.products.forEach(p => p.vendorName = p.vendor !== undefined ? p.vendor.name : "missing");
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
