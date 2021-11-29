import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl: string = 'http://localhost:60186/api/products';

  constructor(private httpsvc: HttpClient) { }
  list(): Observable<Product[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<Product[]>;
  }
  getOne(id:number): Observable<Product> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Product>;
  }
  
}
