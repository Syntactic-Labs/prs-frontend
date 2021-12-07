import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { Vendor } from 'src/app/vendor/vender.class';
import { VendorService } from 'src/app/vendor/vendor.service';
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
  vendors!: Vendor[];

  constructor(
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private appsvc: AppService,
    private vendorsvc: VendorService,
    private router: Router
  ) {}
  get isAdmin() {
    return this.appsvc.getUser().isAdmin;
  }

  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.vendorsvc.list().subscribe({
      next: (res) => {
        console.debug('Vendors:', this.vendors);
        this.vendors = res as Vendor[];
      },
    });
    let id = +this.route.snapshot.params['id'];
    this.productsvc.getOne(id).subscribe({
      next: (res) => {
        console.debug('Product:', res);
        this.product = res as Product;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  save(): void {
    console.log('B4', this.product);
    this.productsvc.edit(this.product).subscribe({
      next: (res) => {
        console.log('Product changed successfully!');
        this.router.navigateByUrl('/products/list');
      },
      error: (err) => {
        console.error(err);
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
