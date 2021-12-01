import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  searchCrit: string = '';
  requests: Request[] = [];

  constructor(private requestsvc: RequestService) { }

  ngOnInit(): void {
    this.requestsvc.list().subscribe({
      next: (res) => {
        console.debug('Requests:', res);
        this.requests = res as Request[];
        this.requests.forEach(p => p.userName = p.user !== undefined ? p.user.username : "missing");
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}
