import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vender.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css'],
})
export class VendorEditComponent implements OnInit {
  id: any;
  vendor!: Vendor;

  constructor(
    private route: ActivatedRoute,
    private vendorsvc: VendorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendorsvc.getOne(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  save(): void {
    this.vendorsvc.edit(this.vendor).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/vendors/list');
      },
    });
  }
  remove(): void {
    this.vendorsvc.delete(this.id).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/vendors/list');
      },
    });
  }
}
