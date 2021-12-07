import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/apputilities/app.service';
import { Vendor } from '../vender.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css'],
})
export class VendorListComponent implements OnInit {
  searchCrit: string = '';
  vendors: Vendor[] = [];

  constructor(private vendorsvc: VendorService, private appsvc: AppService) {}
  get isAdmin() { return this.appsvc.getUser().isAdmin; }

  ngOnInit(): void {
    this.appsvc.checkLogin();
    this.vendorsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.vendors = res as Vendor[];
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
