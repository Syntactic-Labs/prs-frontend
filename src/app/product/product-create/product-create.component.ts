import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  constructor(private productsvc: ProductService, private router: Router) {}

  ngOnInit(): void {}

  save(): void {
    this.productsvc.create(this.product).subscribe({
      next: (res) => {
        console.log('Product successfully created!');
        this.router.navigateByUrl('/products/list');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
