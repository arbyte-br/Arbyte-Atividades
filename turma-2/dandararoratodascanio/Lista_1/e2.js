// Faça um programa que receba um número do usuário e verifique se
// este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”

let rs = require('readline-sync')

let numero = rs.questionInt("Digite um número: ")

if (numero % 2 === 0 ) {
    console.log("Seu número é Par!")
} else {
    console.log("Seu número é Impar!")
}
