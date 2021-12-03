import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  SearchCrit: string="";
  requests: Request[] = [];

  constructor(
    private appsvc: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService
  ) { }
  get isAdmin() { return this.appsvc.getUser().isAdmin; }

  approve(request: Request): void {
    this.requestsvc.approve(request).subscribe({
      next: res => {
        console.debug("Request approved!");
        this.router.navigateByUrl(`/request/reviews`);
      }
    });
  }
  reject(request: Request): void {
    this.requestsvc.reject(request).subscribe({
      next: res => {
        console.debug("Request rejected!");
        this.router.navigateByUrl(`/request/reviews`);
      }
    });
  }
  refresh(): void {
    let userId = this.appsvc.getUser().id;
    this.requestsvc.reviews(userId).subscribe({
      next: res => {
        console.debug(res);
        this.requests = res as Request[];
        this.requests.forEach(r => r.userName = r.user !== undefined ? r.user.username : "not found");
      },
      error: err => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.refresh();
  }

}
