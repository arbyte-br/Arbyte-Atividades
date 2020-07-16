let calcularIdade = require('age-calculator');
let rs = require('readline-sync')

let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let anoNascimento = rs.questionInt('Digite seu ANO de nascimento: \n')
let mesNascimento = rs.questionInt('Digite seu MÊS de nascimento: \n')
let diaNascimento = rs.questionInt('Digite seu DIA de nascimento: \n')


let ageFromDate = new AgeFromDate(new Date(anoNascimento, mesNascimento, diaNascimento)).age;
  console.log("Sua idade atual é: ", ageFromDate + ' anos.');