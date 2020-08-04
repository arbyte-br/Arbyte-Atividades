/* 
Crie um programa que faça o mesmo do exercício anterior porém
pergunte para o usuário a marca, cor e o valor do carro.
*/

let rs = require('readline-sync')

let modelo = rs.question('Qual o seu carro?' )
let marca = rs.question('Qual a marca? ')
let cor = rs.question('Qual a cor ? ')
let valor = rs.question('Qual o valor? ')

let carro = {
   marca: marca, cor : cor, modelo: modelo, valor: valor
}
console.log(carro)

