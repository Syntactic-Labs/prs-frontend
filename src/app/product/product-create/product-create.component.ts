import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { Vendor } from 'src/app/vendor/vender.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  vendors!: Vendor[];

  constructor(
    private productsvc: ProductService,
    private router: Router,
    private appsvc: AppService,
    private vendorsvc: VendorService
  ) {}

  
  save(): void {
    this.vendorsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.vendors = res as Vendor[];
      },
    });
    console.log(this.product);
    this.productsvc.create(this.product).subscribe({
      next: (res) => {
        console.log('Product created');
        this.router.navigateByUrl('/products/list');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.vendorsvc.list().subscribe({
      next: res => {
        console.debug(this.vendors);
        this.vendors = res as Vendor[];
      }
    });
  }
}
