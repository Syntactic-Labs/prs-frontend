export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: string = "";
    unit: string = "";

    constructor(id: number, partnbr: string, name: string, price: string, unit: string) {
        this.id=id;
        this.partNbr=partnbr;
        this.name=name;
        this.price=price;
        this.unit=unit;
        
    }
}