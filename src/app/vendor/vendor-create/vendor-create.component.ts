import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vender.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css'],
})
export class VendorCreateComponent implements OnInit {
  vendor: Vendor = new Vendor();
  constructor(private vendorsvc: VendorService, private router: Router) {}

  ngOnInit(): void {}

  save(): void {
    this.vendorsvc.create(this.vendor).subscribe({
      next: (res) => {
        console.log('Vendor successfully created!');
        this.router.navigateByUrl('/vendors/list');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
