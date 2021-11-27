import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../vender.class';
import { VendorService } from '../vendor.service';


@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  id: any;
  vendor!: Vendor

  constructor(private route: ActivatedRoute, private vendorsvc: VendorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendorsvc.getOne(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      }

    });
  }

}
