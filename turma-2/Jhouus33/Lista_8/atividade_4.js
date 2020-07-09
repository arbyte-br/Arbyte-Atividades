// Crie um programa que faça o mesmo do exercício anterior porém pergunte para o usuário a marca,
// cor e o valor do carro
let rs = require('readline-sync')

let carro =  new Object() 
    carro.marca = rs.question('Qual a marca do seu carro? ')
    carro.cor = rs.question('Qual a cor dele? ')
    carro.valor = rs.questionFloat('Qual o valor?')

console.log(carro)