import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css'],
})
export class RequestDetailComponent implements OnInit {
  id: any;
  request!: Request;

  confirmDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private appsvc: AppService,
    private router: Router
  ) {}

  get isAdmin() {
    return this.appsvc.getUser().isAdmin;
  }
  remove(): void {
    this.confirmDelete = true;
  }
  confirm(): void {
    this.requestsvc.delete(this.request.id).subscribe({
      next: res => {
        console.debug("Request deleted successfully!");
        this.router.navigateByUrl("/requests/list");
      }
    })
  }

  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.id = +this.route.snapshot.params['id'];
    this.requestsvc.getOne(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.request = res as Request;
        this.request.username =
          this.request.user !== undefined
            ? this.request.user.username
            : 'No User';
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
