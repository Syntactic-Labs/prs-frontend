import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './requestline.class';

@Injectable({
  providedIn: 'root',
})
export class RequestlineService {
  baseurl: string = 'http://localhost:60186/api/requestlines';

  constructor(private httpsvc: HttpClient) {}
  list(): Observable<RequestLine[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<RequestLine[]>;
  }
  getOne(id: number): Observable<RequestLine> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<RequestLine>;
  }
  edit(requestline: RequestLine): Observable<RequestLine> {
    return this.httpsvc.put(
      `${this.baseurl}/${requestline.id}`,
      requestline
    ) as Observable<RequestLine>;
  }
  create(requestline: RequestLine): Observable<RequestLine> {
    return this.httpsvc.post(`${this.baseurl}`, requestline) as Observable<RequestLine>;
  }
  delete(id: number): Observable<RequestLine> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<RequestLine>;
  }
}
