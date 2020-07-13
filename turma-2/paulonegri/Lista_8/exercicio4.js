/*Crie um programa que faça o mesmo do exercício anterior porém
pergunte para o usuário a marca, cor e o valor do carro.*/

let rs = require(`readline-sync`)
let carro = {}
carro.marca = rs.question(`Qual a marca do carro? \n`)
carro.modelo = rs.question(`Qual o modelo do carro? \n`)
carro.cor = rs.question(`Qual a cor do carro? \n`)
carro.valor = rs.question(`Qual o valor do carro? \n`) 

console.log(carro)