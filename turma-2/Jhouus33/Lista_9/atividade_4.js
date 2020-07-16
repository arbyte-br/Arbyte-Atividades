// (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é primo ou
// não
// Utilize o pacote : https://www.npmjs.com/package/prime-number

const isPrime = require('prime-number')
let rs = require('readline-sync') 

let numero = rs.questionInt("Digite um numero: \n")
if(isPrime(numero) == true){
    console.log(numero + ' número primo')
}else{
    console.log('Não primo')
}