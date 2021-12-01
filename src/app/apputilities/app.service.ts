import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.class';

const emptyUserBox = new User();

@Injectable({
  providedIn: 'root',
})
export class AppService {

  loginCheck!: boolean;
  loggedUser: User = emptyUserBox;
  getUser(): User {
    return this.loggedUser;
  }
  setUser(user: User): void {
    this.loggedUser = user;
  }
  checkLogin() {
    if(!this.loginCheck) {
      console.warn("!!!Must log in!!!");
      return;
    }
    if (this.getUser() === emptyUserBox) {
      this.router.navigateByUrl('/users/login');
    }
  }
  clearUserBox(): void {
    this.setUser(emptyUserBox);
  }

  constructor(private router: Router) {}
}
