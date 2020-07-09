// (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário a marca, cor e o valor do carro.

let rs = require('readline-sync')

let marcaCarro = rs.question('Qual é a marca do seu carro? ')
let corCarro = rs.question('Qual é a cor do seu carro? ')
let valorCarro = rs.questionFloat('Qual o valor em dinheiro do carro? ')

let carro = {
    marca: marcaCarro,
    cor: corCarro,
    valor: valorCarro
}

console.log(carro)