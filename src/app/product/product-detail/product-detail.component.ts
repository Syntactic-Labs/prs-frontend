import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  product!: Product;

  constructor(private route: ActivatedRoute, private productsvc: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productsvc.getOne(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
