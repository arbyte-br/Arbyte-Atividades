let rs = require('readline-sync')

let marcaDoCarro = rs.question('Qual a marca do seu carro? \n')
let corDoCarro = rs.question('Qual a cor do seu carro?\n')
let valorDoCarro = rs.questionFloat('Qual o valor do seu carro?\n')

let carro = new Object()
carro.marca = marcaDoCarro
carro.cor =  corDoCarro
carro.valor = valorDoCarro

console.log(`Seu carro é da marca ${carro.marca}.`)
console.log(`Seu carro e da cor ${carro.cor}.`)
console.log(`Seu carro custa ${carro.valor} mil reais.`)