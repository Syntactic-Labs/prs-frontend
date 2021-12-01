import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/apputilities/app.service';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  get name() {
    return this.appsvc.getUser().username;
  }

  menus: Menu[] = [
    new Menu('PRS', '/home'),
    new Menu('Users', '/users/list'),
    new Menu('Vendors', '/vendors/list'),
    new Menu('Products', '/products/list'),
    new Menu('Requests', '/requests/list'),
    new Menu('Reviews', 'requests/reviews'),
    new Menu('about', '/about'),
  ];
  constructor(private appsvc: AppService) {}

  ngOnInit(): void {}
}
