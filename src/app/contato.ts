export class Contato {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    telephone: string;

    /**
     *
     */
    constructor(data?: {
        name: string,
        address: string,
        city: string,
        state: string,
        telephone: string
    }) {
        if (data) {
            this.name = data.name;
            this.address = data.address;
            this.city = data.city;
            this.state = data.state;
            this.telephone = data.telephone;
        }
    }
}