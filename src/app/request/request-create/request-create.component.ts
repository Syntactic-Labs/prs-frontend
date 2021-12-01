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
  constructor(private requestsvc: RequestService, private router: Router, appsvc: AppService) {}

  ngOnInit(): void {}
  save(): void {
    this.requestsvc.create(this.request).subscribe({
      next: (res) => {
        console.log('Request successfully created!');
        this.router.navigateByUrl('/requests/list');
      },
    });
  }
}
