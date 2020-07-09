//Faça um algoritmo que receba um número e diga se ele é primo ou não
//Utilize o pacote : ​ https://www.npmjs.com/package/prime-number

let rs=require('readline-sync');
let numero=rs.questionInt('Insira um número e descubra se ele é primo ou não:');
const numeroPrimo = require('prime-number');
console.log(numeroPrimo(numero)) // se o número for primo imprime true, caso não seja primo imprime false