let rs = require('readline-sync')
let calcularIdade = require('age-calculator')
let {AgeFromDateString, AgeFromDate} = require('age-calculator')

let dataDeNascimento = rs.question('Digite sua data de nascimento no formato AAAA-MM-DD:\n')

let ageFromString = new AgeFromDateString(dataDeNascimento).age;
  console.log("value from ageFromString", ageFromString);