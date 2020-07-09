let chalk = require('chalk')
let {AgeFromDate, AgeFromDateString} = require('age-calculator')
let rs = require('readline-sync')

let dia = rs.questionInt('Qual dia de seu nascimento? ')
let mes = rs.questionInt('Qual mes de seu nascimento? ')
let ano = rs.questionInt('Qual ano de seu nascimento? ')

let ageFromDate = new AgeFromDate(new Date(ano, mes+1, dia)).age
  console.log(chalk.black.bgWhite(` Idade: ${ageFromDate} `))
console.log('======================================')