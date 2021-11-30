import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vender.class';

@Pipe({
  name: 'vendorSearch',
})
export class VendorSearchPipe implements PipeTransform {
  transform(vendors: Vendor[], search: string): Vendor[] {
    if (vendors === null || search === '') {
      return vendors;
    }
    let searchVendor: Vendor[] = [];
    search = search.toLowerCase();
    for (let v of vendors) {
      if (
        v.id.toString().toLowerCase().includes(search) ||
        v.code.toString().toLowerCase().includes(search) ||
        v.name.toString().toLowerCase().includes(search) ||
        v.address.toString().toLowerCase().includes(search) ||
        v.city.toString().toLowerCase().includes(search) ||
        v.state.toString().toLowerCase().includes(search) ||
        (v.zip != null && v.zip.toString().toLowerCase().includes(search)) ||
        (v.phone != null && v.phone.toString().toLowerCase().includes(search)) ||
        (v.email != null && v.email.toString().toLowerCase().includes(search))
      ) {
        searchVendor.push(v);
      }
    }
    return searchVendor;
  }
}
