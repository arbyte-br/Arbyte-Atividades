/*Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.*/

let rs = require('readline-sync')
let numeroA = rs.questionInt('Digite o primeiro numero> ')
let numeroB = rs.questionInt('Digite o segundo numero> ')

numeroA % numeroB == 0 ? console.log(`A é divisivel por B`) : console.log(`A não divisivel por B`)
