import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css'],
})
export class RequestEditComponent implements OnInit {
  request!: Request;

  constructor(
    private appsvc: AppService,
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get isAdmin() {
    return this.appsvc.getUser().isAdmin;
  }

  save(): void {
    console.log(this.request);
    this.requestsvc.edit(this.request).subscribe({
      next: (res) => {
        console.log('Request changed successfully!');
        this.router.navigateByUrl('/requests/list');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
    this.appsvc.checkLogin();
    let id = +this.route.snapshot.params['id'];
    this.requestsvc.getOne(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.request = res as Request;
        this.request.userName =
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
