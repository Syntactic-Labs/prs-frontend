export class User {
    id: number = 0;
    username: string = "";
    firstname: string = "";
    lastname: string = "";
    phone: string = "";
    email: string = "";
    isReviewer: boolean = false;
    isAdmin: boolean = false;


    constructor(id: number, username: string, firstname: string, lastname: string, phone: string, email: string, isreviewer: boolean, isadmin: boolean) {
        this.id=id;
        this.username=username;
        this.firstname=firstname;
        this.lastname=lastname;
        this.phone=phone;
        this.email=email;
        this.isReviewer=isreviewer;
        this.isAdmin=isadmin;
    }
}