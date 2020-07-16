// (OBRIGATÓRIO) Faça um algoritmo que receba a data nascimento de uma pessoa e
// calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator


// var ageCalculator = require('age-calculator');
//   let {AgeFromDateString, AgeFromDate} = require('age-calculator');
 
//   // Be careful: Javascript months start at 0 (so zero stands for january)
 
//   let ageFromDate = new AgeFromDate(new Date(1987, 0, 8)).age;
//   console.log("value from AgeFromDate", ageFromDate);
//   // output: 30 (at the time of this doc)
 
//   let ageFromString = new AgeFromDateString('1987-01-08').age;
//   console.log("value from ageFromString", ageFromString);
//   // output: 30 (at the time of this doc)

var ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator')
let rs = require('readline-sync') 

let nascimento = rs.question('Digite sua data de nascimento: (ex.:22/07/1993) \n').split('/')
let dia = nascimento[0]
let mes = nascimento[1]
let ano = nascimento[2]
let dataDeNascimento = (`${ano}-${mes}-${dia}`) 
console.clear()

let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age;
  console.log(`Sua idade atual é: ${ageFromDate} anos.`);

  let ageFromString = new AgeFromDateString(dataDeNascimento).age; //padrão = '1987-01-08'
    console.log(`Espero que ${ageFromString} anos bem vividos.`);
 
  