import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css'],
})
export class RequestLinesComponent implements OnInit {
  request!: Request;

  constructor(
    private appsvc: AppService,
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  get isAdmin() {
    return this.appsvc.getUser().isAdmin;
  }

  editLine(id: number): void {
    this.router.navigateByUrl(`/requestlines/edit/${id}`);
  }

  refresh(): void {
    let id = +this.route.snapshot.params['id'];
    this.requestsvc.getOne(id).subscribe({
      next: (res) => {
        console.debug(res as Request);
        this.request = res as Request;
        this.request.userName =
          this.request.user !== undefined
            ? this.request.user.username
            : 'not found';
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  deleteLine(id: number): void {
    this.requestlinesvc.delete(id).subscribe({
      next: (res) => {
        console.debug('Requestline deleted!');
        this.refresh();
        this.router.navigateByUrl(`/requests/lines/${this.request.id}`);
      },
    });
  }

  review(request: Request): void {
    this.requestsvc.review(request).subscribe({
      next: (res) => {
        console.debug('Request reviewed!');
        this.refresh();
      },
    });
  }

  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.refresh();
  }
}
