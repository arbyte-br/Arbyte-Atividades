class HorseApp {

    constructor(name, email, endPrimary, payment,destination){

        this.name = name;
        this.email = email;
        this.endPrimary = endPrimary;
        this.payment = payment;
        this.destination = destination;
    }

    editEndPrimary (newEnd) {
        return this.endPrimary = newEnd;
    }

    edtiPayment (pay) {
        return this.payment = pay;
    }

    editDestination (dest) {
        return this.destination = dest;
    }

}

const app = new HorseApp('Luigi Sampaio', 'example@example.com.br', 'ruas das margaridas', 'dinheiro', 'rua dos bobos');

module.exports = {HorseApp}; 