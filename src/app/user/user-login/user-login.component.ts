import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/apputilities/app.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  msg: string = '';

  constructor(
    private usersvc: UserService,
    private router: Router,
    private appsvc: AppService
  ) {}

  get isAdmin() {
    return this.appsvc.getUser().isAdmin;
  }

  login(): void {
    this.appsvc.clearUserBox();
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        this.appsvc.setUser(res as User);
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        if (err.error.status == 404) {
          this.msg = 'Username and or Password not found!';
          return;
        }
        console.debug(err);
      },
    });
  }

  ngOnInit(): void {
    console.debug("ngOnInit()");
    this.username = this.password = "a";
  }
  
}
