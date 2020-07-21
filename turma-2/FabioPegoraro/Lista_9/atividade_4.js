//Faça um algoritmo que receba um número e diga se ele é primo ou não 

let rs = require ('readline-sync')
let isPrime = require('prime-number')

let numero = rs.questionInt('Insira um numero:')

let resultado = isPrime(numero)

if(resultado == true){
    console.log("Esse numero é Primo")
}
else {console.log("Esse numero não é Primo")
}

