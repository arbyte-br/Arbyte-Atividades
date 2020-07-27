// (OBRIGATÓRIO) Faça um algoritmo que receba a data nascimento de uma pessoa e
// calcule sua idade.
let rs = require('readline-sync')

var ageCalculator = require('age-calculator');

let nascimento = rs.question('digite sua data de nascimento no formato dd/mm/aaaa: ').split('/')
let dia = nascimento[0]
let mes = nascimento[1]
let ano = nascimento[2]

let idade = new ageCalculator.AgeFromDate(new Date(ano, mes, dia)).age;

console.log(`Você tem: ${idade} anos`)
