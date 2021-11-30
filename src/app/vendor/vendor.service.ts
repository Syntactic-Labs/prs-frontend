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
  getOne(id: number): Observable<Vendor> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }
  edit(vendor: Vendor): Observable<Vendor> {
    return this.httpsvc.put(
      `${this.baseurl}/${vendor.id}`,
      vendor
    ) as Observable<Vendor>;
  }
  create(vendor: Vendor): Observable<Vendor> {
    return this.httpsvc.post(`${this.baseurl}`, vendor) as Observable<Vendor>;
  }
  delete(id: number): Observable<Vendor> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }
}
