import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  id: any;
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private usersvc: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usersvc.getOne(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  save(): void {
    this.usersvc.edit(this.user).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/users/list');
      },
    });
  }
  remove(): void {
    this.usersvc.delete(this.id).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/users/list');
      }
    })
  }
}
