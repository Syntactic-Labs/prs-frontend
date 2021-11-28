import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listenerCount } from 'process';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseurl: string = 'http://localhost:60186/api/requests';

  constructor(private httpsvc: HttpClient) {
    
   }
}
