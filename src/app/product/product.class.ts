export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: string = "";
    unit: string = "";
    photoPath: string = "";
    vendorId: number = 0;

    constructor(id: number, partnbr: string, name: string, price: string, unit: string, photopath: string, vendorid: number) {
        this.id=id;
        this.partNbr=partnbr;
        this.name=name;
        this.price=price;
        this.unit=unit;
        this.photoPath=photopath;
        this.vendorId=vendorid;
        
    }
}