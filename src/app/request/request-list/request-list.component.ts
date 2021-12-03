import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { AppService } from 'src/app/apputilities/app.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  searchCrit: string = '';
  requests: Request[] = [];

  constructor(private requestsvc: RequestService, private appsvc: AppService) { }
  get isAdmin() { return this.appsvc.getUser().isAdmin; }


  ngOnInit(): void {
    this.appsvc.getUser();
    this.requestsvc.list().subscribe({
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

}
