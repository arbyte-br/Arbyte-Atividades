let rs = require("readline-sync")
let ageCalculator = require('age-calculator')
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let dataNascimentoUsuario = rs.question("Digite sua data de nascimento (AAAA/MM/DD): ")

let ageFromString = new AgeFromDateString(dataNascimentoUsuario).age

console.log(`Sua idade: ${ageFromString}`)




