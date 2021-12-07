import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css'],
})
export class RequestCreateComponent implements OnInit {
  request: Request = new Request();
  constructor(
    private requestsvc: RequestService,
    private router: Router,
    private appsvc: AppService
  ) {}

  get isAdmin() { return this.appsvc.getUser().isAdmin; }

  save(): void {
    console.log(this.request);
    this.requestsvc.create(this.request).subscribe({
      next: (res) => {
        console.log('Request created successfully!');
        this.router.navigateByUrl("/requests/list");
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.request.userId = this.appsvc.getUser().id;
    this.request.userName = this.appsvc.getUser().username;
  }
}
