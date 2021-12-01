import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root',
})
export class RequestlineService {
  baseurl: string = 'http://localhost:60186/api/requestlines';

  constructor(private httpsvc: HttpClient) {}
  list(): Observable<Requestline[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<Requestline[]>;
  }
  getOne(id: number): Observable<Requestline> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
  edit(requestline: Requestline): Observable<Requestline> {
    return this.httpsvc.put(
      `${this.baseurl}/${requestline.id}`,
      requestline
    ) as Observable<Requestline>;
  }
  create(requestline: Requestline): Observable<Requestline> {
    return this.httpsvc.post(`${this.baseurl}`, requestline) as Observable<Requestline>;
  }
  delete(id: number): Observable<Requestline> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
}
