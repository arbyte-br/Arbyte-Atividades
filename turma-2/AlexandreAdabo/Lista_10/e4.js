let rs = require('readline-sync')

class Carro {
    constructor(CaracteristicaDoCarro){
        this.nome = rs.question('Digite o nome do seu carro ? \n').toLowerCase()
        this.modelo = rs.question('Qual o modelo do seu carro ? \n').toLowerCase()
        this.cor = rs.question('Qual a cor do seu carro ? \n')
    }
}
const carro1 = new Carro()
const carro2 = new Carro()
console.log(carro1)
console.log(carro2)
if(carro1.nome == carro2.nome && carro1.modelo == carro2.modelo){
console.log('Os carros sao iguais')
} else {
console.log('Os carros sao diferentes')
}

