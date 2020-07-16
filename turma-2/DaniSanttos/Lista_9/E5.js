let rs = require('readline-sync')
let {AgeFromDateString, AgeFromDate} = require('age-calculator')
let chalk = require('chalk');

let input = rs.question('Digite sua data de nascimento no formato DD/MM/AAAA: ')
let data = (`${input.slice(6)}-${input.slice(3, 5)}-${input.slice(0, 2)}`)

let ageFromString = new AgeFromDateString(data).age
console.log(chalk.black.bgYellow(`Sua idade é de ${ageFromString} anos`))
