import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vender.class';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  baseurl: string = 'http://localhost:60186/api/vendors';

  constructor(private httpsvc: HttpClient) {}
  list(): Observable<Vendor[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }
}
