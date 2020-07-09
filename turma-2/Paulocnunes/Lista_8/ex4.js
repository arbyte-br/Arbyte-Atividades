//Crie um programa que faça o mesmo do exercício anterior porém pergunte para o usuário a marca, cor e o valor do carro.

let rs = require('readline-sync')

let carro = {cor: rs.question('Qual cor você deseja pro seu carro? '), marca: rs.question('Qual marca deseja? '), valor: rs.question('Qual valor máximo deseja pagar no carro? ')}

console.log(carro)