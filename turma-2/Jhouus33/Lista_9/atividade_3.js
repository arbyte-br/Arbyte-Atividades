// (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é par ou
// ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd

// const isOdd = require('is-odd');
 
// console.log(isOdd('1')); //=> true
// console.log(isOdd('3')); //=> true
 
// console.log(isOdd(0)); //=> false
// console.log(isOdd(2)); //=> false

const isOdd = require('is-odd');
let rs = require('readline-sync') 

let numero = rs.questionInt("Digite um número, vou adivinhar se é impar u par: \n")
 if(isOdd(numero) == true){
     console.log('Impar')
 }else{
     console.log('Par')
 }

