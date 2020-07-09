// Crie um programa que faça o mesmo do exercício anterior porém pergunte para o usuário
// se a xícara está cheia ou não

let rs = require('readline-sync')

let xicara = new Object()
xicara.cheia = rs.question('Sua xicara está vazia? \n')
xicara.cor= rs.question('Qual a cor da sua xícara ?')

console.log(xicara)