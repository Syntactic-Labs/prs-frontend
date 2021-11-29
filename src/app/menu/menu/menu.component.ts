import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("PRS", "/users/login/home"),
    new Menu("Users", "/users"),
    new Menu("Vendors", "/vendors"),
    new Menu("Products", "/products"),
    new Menu("Requests", "/requests"),
    new Menu("Reviews", "/reviews"),
    new Menu("about", "/about"),
    new Menu("help", "/help")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
