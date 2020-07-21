const rs = require('readline-sync');

class Carro {
    constructor() {
        this.name = rs.question('Qual e o modelo do seu carro: ');
        this.model = rs.question('Qual a marca do seu carro: ');
        this.cor = rs.question('Qual a cor do seu carro: ');
    }
}

const carOne = new Carro();
const carTwo = new Carro();

if (carOne.name == carTwo.name && carOne.model == carTwo.model) {
    console.log('São Iguais')
} else {
    console.log('São Difirentes')
}

