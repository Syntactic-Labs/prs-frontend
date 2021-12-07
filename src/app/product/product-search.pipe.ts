import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch',
})
export class ProductSearchPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    if (products === null || search === '') {
      return products;
    }
    search = search.toLowerCase();
    let searchProduct: Product[] = [];
    for (let p of products) {
      if (
        p.id.toString().toLowerCase().includes(search) ||
        p.partNbr.toString().toLowerCase().includes(search) ||
        p.name.toString().toLowerCase().includes(search) ||
        p.price.toString().toLowerCase().includes(search) ||
        p.unit.toString().toLowerCase().includes(search)
      ) {
        searchProduct.push(p);
      }
    }
    return searchProduct;
  }
}
