// Faça um algoritmo que receba a data nascimento de uma pessoa e
// calcule sua idade.

let rs = require('readline-sync')
var ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let idade = rs.question('Digite sua idade (Ex: DD/MM/AAAA): ').split('/')

let dia = idade[0]
let mes = idade[1]
let ano = idade[2]

let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age;

console.log("Sua idade é: " + ageFromDate);