const rs = require('readline-sync')
const ageCalculator = require('age-calculator')
const chalk = require('chalk')
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let dataCompleta = rs.question(chalk.bold.blueBright('Digite a sua data de nascimento > EX: DD/MM/AAAA: '))

if(!dataCompleta.includes('/')){
    console.log('Data invalida !')
    dataCompleta = rs.question(chalk.bold.blueBright('Digite a sua data de nascimento > EX: DD/MM/AAAA: '))
}

let anoNascimento = dataCompleta.split('/')[2]
let diaNascimento = dataCompleta.split('/')[0]
let mesNascimento = dataCompleta.split('/')[1] - 1

let idade = new AgeFromDate(new Date(anoNascimento, mesNascimento, diaNascimento)).age

console.log(chalk.bold.greenBright(`Você tem ${idade} anos de idade`))