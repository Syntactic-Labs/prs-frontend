import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  id: any;
  request!: Request

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.requestsvc.getOne(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}
