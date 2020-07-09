// Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário a marca, cor e o valor do carro.

let rs = require('readline-sync')
let perguntaMarca = rs.question("Qual é a marca do seu carro? ")
let perguntaCor = rs.question("Qual é a cor do seu carro? ")
let perguntaValor = rs.question("Qual é o valor do seu carro? ")

let carro = { marca: perguntaMarca, cor: perguntaCor, valor: perguntaValor}

console.log(carro)