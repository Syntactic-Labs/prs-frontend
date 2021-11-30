import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  user: User = new User();
  passwordchk!: string;

  constructor(private usersvc: UserService, private router: Router) {}

  ngOnInit(): void {}

  save(): void {
    this.usersvc.create(this.user).subscribe({
      next: (res) => {
        console.log('User successfully created!');
        this.router.navigateByUrl('/users/list');
      },
    });
  }

  passwordCheck(): void {
    if (this.user.password != this.passwordchk) {
      this.user.password = 'Passwords must match';
      this.passwordchk = '';
    }
  }
}
