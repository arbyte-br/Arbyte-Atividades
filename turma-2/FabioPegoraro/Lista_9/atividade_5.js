//Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.

let rs = require ('readline-sync')
let ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let dataNascimento = []

let ano = rs.questionInt('Digite o ano em que você nasceu: ')
let mes = rs.questionInt('Digite o mês em que você nasceu: ')
let dia = rs.questionInt('Digite o dia em que você nasceu: ')

dataNascimento.push(ano, mes, dia)

let resultado = new AgeFromDate(new Date(dataNascimento)).age;
console.log(resultado)