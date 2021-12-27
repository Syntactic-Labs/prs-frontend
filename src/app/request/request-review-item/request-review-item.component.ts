import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {
  request!: Request;

  constructor(
    private appsvc: AppService,
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  get isAdmin() { return this.appsvc.getUser().isAdmin; }

  approve(request: Request): void {
    request.rejectionReason = "";
    this.requestsvc.approve(request).subscribe({
      next: req => {
        console.debug("Request approved!");
        this.refresh();
      }
    });
  }
  showRejection: boolean = false;
  showRejectionReason(): void {
    this.showRejection = !this.showRejection;
  }
  reject(request: Request): void {
    this.requestsvc.reject(request).subscribe({
      next: req => {
        console.debug("Request rejected!");
        this.refresh();
      }
    });
  }
  refresh(): void {
    let id = +this.route.snapshot.params["id"];
    this.requestsvc.getOne(id).subscribe({
      next: res => {
        console.debug("Request:", res as Request);
        this.request = res as Request;
        this.request.username = this.request.user !== undefined ? this.request.user.username : "missing";
      },
      error: err => {
        console.error("Trap error:", err);
      }
    });
  }
  review(request: Request): void {
    this.requestsvc.review(request).subscribe({
      next: res => {
        console.debug("Request reviewed!");
        this.refresh();
      }
    })
  }
  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.refresh();
  }

}
