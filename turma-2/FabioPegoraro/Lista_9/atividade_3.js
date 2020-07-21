//Faça um algoritmo que receba um número e diga se ele é par ou ímpar.

let rs = require ('readline-sync')
let isOdd = require('is-odd')

let numero = rs.questionInt('Digite um número:')

let resultado = isOdd(numero)

if(resultado == true){
    console.log("Esse numero é IMPAR")
}
else {console.log("Esse numero é PAR")
}


