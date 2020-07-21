let rs = require('readline-sync')

class Veicle {
    constructor(cars) {
        this.name = rs.question('Insira o nome do veículo: ')
        this.manufac = rs.question('Insira a fabricante do veículo: ')
        this.color = rs.question('Insira a cor do veículo: ')
    }
}

const veicle1 = new Veicle()

console.clear()

const veicle2 = new Veicle()

if (veicle1.name === veicle2.name && veicle1.manufac === veicle2.manufac) {
    console.log('Os veículos informados são iguais.')
} else {
    console.log('Os veículos são diferentes')
}