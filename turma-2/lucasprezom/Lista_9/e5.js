// 5.(OBRIGATÓRIO)​ Faça um algoritmo que receba a data nascimento de uma pessoa
// e calcule sua idade. Utilize o pacote : ​https://www.npmjs.com/package/age-calculator

let rs = require ('readline-sync')
var ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let ano = rs.questionInt('Qual o ano em que nasceu?:\n')
let mês = rs.questionInt('Qual o mês que nasceu?:\n')
let dia = rs.questionInt('Qual o dia em que nasceu?:\n')

let ageFromDate = new AgeFromDate(new Date(ano, mês, dia)).age;
  console.log("Sua idade é:", ageFromDate);