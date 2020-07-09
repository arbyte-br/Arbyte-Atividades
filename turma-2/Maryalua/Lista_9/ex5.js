//Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
//Utilize o pacote : ​ https://www.npmjs.com/package/age-calculator

let rs = require('readline-sync');
let {AgeFromDateString} = require('age-calculator')
let dataNascimento = rs.question('Insira sua data de nascimento para calcular a sua idade:')
let idade = new AgeFromDateString(dataNascimento).age;
console.log("value from AgeFromDate"+ idade);




