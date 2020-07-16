/** Faça um algoritmo que receba a data nascimento de uma pessoa e
calcule sua idade. */

let rs = require('readline-sync')
let ageCalculator = require('age-calculator')
let (AgeFromDateString, AgeFromDate) = require('age-calculator');

let dataNascUsuario = rs.question('Digite a sua data de nascimento: ')
let AgeFromString = new AgeFromDateString(dataNascUsuario).age 

console.log(`Sua idade é: ${AgeFromString}`)