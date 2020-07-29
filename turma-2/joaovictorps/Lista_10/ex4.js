let rs = require('readline-sync')

class Carro {
    constructor(nome, modelo, cor){
        this.carro = rs.question('Qual o nome do carro? \n >')
        this.modelo = rs.question('Qual o modelo do carro? \n >')
        this.cor = rs.question('Qual a cor do carro? \n >')
    }
}
console.log("PRIMEIRO CARRO \nForneça as informações necessárias.")
const carro1 = new Carro()

console.log("SEGUNDO CARRO \nForneça as informações necessárias.")
const carro2 = new Carro()

if(carro1.nome === carro2.nome && carro1.modelo === carro2.modelo){
    console.log('Carros iguais.')
} else {
    console.log('Carros diferentes.')
}
