import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  id: any;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productsvc.getOne(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  save(): void {
    this.productsvc.edit(this.product).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/products/list');
      },
    });
  }
  remove(): void {
    this.productsvc.delete(this.id).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/products/list');
      },
    });
  }
}
