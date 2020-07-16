// Crie um programa que pergunte o nome do usuário e peça para este usuário digitar 3 números,
//  o programa deve imprimir, no formato de um objeto, o nome e os númerosinformados

let rs = require ('readline-sync')

let nome = rs.question('Qual seu nome?\n')
let numero1 = rs.question('Digite um número:\n')
let numero2 = rs.question('Digite um número:\n')
let numero3 = rs.question('Digite um número:\n')

let usuario = {nome, numerosEscolhidos: [numero1, numero2, numero3] }

console.log (usuario)