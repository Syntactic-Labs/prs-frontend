import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id: any;
  product!: Product;
  get vendor() {
    return this.product.vendor !== undefined
      ? this.product.vendor.name
      : 'not found';
  }

  constructor(
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private appsvc: AppService,
    private router: Router
  ) {}
  get isAdmin() {
    return this.appsvc.getUser().isAdmin;
  }

  ngOnInit(): void {
    this.appsvc.checkLogin();
    let id = +this.route.snapshot.params['id'];
    this.productsvc.getOne(id).subscribe({
      next: (res) => {
        console.log('Product:', res as Product);
        this.product = res as Product;
      },
      error: (err) => {
        console.error('Trap error:', err);
      },
    });
  }
}
