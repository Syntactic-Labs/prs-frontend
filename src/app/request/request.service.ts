import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  baseurl: string = 'http://localhost:60186/api/requests';

  constructor(private httpsvc: HttpClient) {}
  list(): Observable<Request[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<Request[]>;
  }
  getOne(id: number): Observable<Request> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  create(request: Request): Observable<Request> {
    return this.httpsvc.post(`${this.baseurl}`, request) as Observable<Request>;
  }
  edit(request: Request): Observable<Request> {
    return this.httpsvc.put(
      `${this.baseurl}/${request.id}`,
      request
    ) as Observable<Request>;
  }
  delete(id: number): Observable<Request> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  reviews(userId: number): Observable<Request[]> {
    return this.httpsvc.get(
      `${this.baseurl}/reviews/${userId}`
    ) as Observable<Request[]>;
  }
  review(request: Request): Observable<Request> {
    return this.httpsvc.put(
      `${this.baseurl}/review`,
      request
    ) as Observable<Request>;
  }
  approve(request: Request): Observable<Request> {
    return this.httpsvc.put(
      `${this.baseurl}/approve`,
      request
    ) as Observable<Request>;
  }
  reject(request: Request): Observable<Request> {
    return this.httpsvc.put(
      `${this.baseurl}/reject`,
      request
    ) as Observable<Request>;
  }
}
