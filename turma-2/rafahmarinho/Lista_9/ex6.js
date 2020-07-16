// Escolha um programa que você já fez em atividades passadas e faça o output do
// terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk

const chalk = require('chalk')
let rs = require('readline-sync')

let {AgeFromDateString} = require('age-calculator')

let dataNasc = rs.question('Qual sua data de nascimento? (DD/MM/AAAA): ').split('/')

  let diaUser = dataNasc[0]
  let mesUser = dataNasc[1]
  let anoUser = dataNasc[2]

  let ageFromString = new AgeFromDateString(`${anoUser}-${mesUser}-${diaUser}`).age;
  console.log(chalk.black.bgWhite.bold(`Você tem ${ageFromString} anos.`))