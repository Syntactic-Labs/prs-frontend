import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vender.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css'],
})
export class VendorListComponent implements OnInit {
  searchCrit: string="";
  vendors: Vendor[] = [];

  constructor(private vendorsvc: VendorService) {}

  ngOnInit(): void {
    this.vendorsvc.list().subscribe({
      next: (res) => {
        console.debug('Users:', res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
