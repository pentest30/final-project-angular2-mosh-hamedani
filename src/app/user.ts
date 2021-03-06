export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
}

export class User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address = new Address();
}
