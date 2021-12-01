import { Product } from "../product/product.class";

export class Requestline {
    id: number = 0;
    quantity: number = 1;

    request?: Request;
    requestId: number = 0;

    product?: Product;
    productId: number = 0;

}