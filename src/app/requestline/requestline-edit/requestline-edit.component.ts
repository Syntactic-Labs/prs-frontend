import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css'],
})
export class RequestlineEditComponent implements OnInit {
  requestline!: RequestLine;
  products!: Product[];

  constructor(
    private appsvc: AppService,
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get isAdmin() {
    return this.appsvc.getUser().isAdmin;
  }

  save(): void {
    console.log(this.requestline);
    this.requestlinesvc.edit(this.requestline).subscribe({
      next: (res) => {
        console.log('Requestline changed!');
        this.router.navigateByUrl(
          `/requests/lines/${this.requestline.requestId}`
        );
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.productsvc.list().subscribe({
      next: res => {
        console.debug(res);
        this.products = res as Product[];
      }
    });
    let id = +this.route.snapshot.params["id"];
    this.requestlinesvc.getOne(id).subscribe({
      next: res => {
        console.debug(res);
        this.requestline = res as RequestLine;
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
