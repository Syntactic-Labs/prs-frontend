import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseurl: string = 'http://localhost:60186/api/users';

  constructor(private httpsvc: HttpClient) {}
  list(): Observable<User[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<User[]>;
  }
  getOne(id: number): Observable<User> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<User>;
  }
  edit(user: User): Observable<User> {
    return this.httpsvc.put(
      `${this.baseurl}/${user.id}`,
      user
    ) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.httpsvc.post(`${this.baseurl}`, user) as Observable<User>;
  }
  delete(id: number): Observable<User> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<User>;
  }
}
