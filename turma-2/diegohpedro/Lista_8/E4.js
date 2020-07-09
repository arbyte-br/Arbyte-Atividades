// (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário a marca, cor e o valor do carro.

let rs = require('readline-sync')

let marca = rs.question('Qual a marca do carro?: ')
let cor = rs.question('Qual a cor do carro: ')
let valor = rs.question('Qual o valor do carro?: ')

let carro = {
    marca: marca,
    cor: cor,
    valor: valor

    
}
console.log(carro)