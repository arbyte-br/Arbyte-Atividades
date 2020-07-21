const rs = require('readline-sync')

class Car {
    constructor() {
        this.brand = rs.question('Digite a marca do carro: ')
        this.model = rs.question('Informe o modelo do seu carro: ')
        this.color = rs.question('Informe a cor do seu carro: ')
    }
}

const car1 = new Car
const car2 = new Car

if (car1.brand === car2.brand && car1.model === car2.model) {
    console.log('Os carros são iguais')
} else {
    console.log('Os carros não são iguais')
}