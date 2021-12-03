import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {
  requestline: RequestLine = new RequestLine();
  products!: Product[];
  

  constructor(
    private appsvc: AppService,
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  get isAdmin() { return this.appsvc.getUser().isAdmin; }
  save(): void {
    console.debug("B4", this.requestline);
    this.requestlinesvc.create(this.requestline).subscribe({
      next: res => {
        console.debug("Requestline created!");
        this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
      },
      error: err => {
        console.error(err);
      }
    }); 
  }
  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.productsvc.list().subscribe({
      next: res => {
        console.debug("Products:", res);
        this.products = res as Product[];
      }
    });
    this.requestline.requestId = +this.route.snapshot.params["rid"];
  }

}
