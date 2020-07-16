/* 5. (OBRIGATÓRIO) Faça um algoritmo que receba a data nascimento de uma pessoa e
calcule sua idade.
Utilize o pacote : https://www.npmjs.com/package/age-calculator */


let rs = require('readline-sync')
let {AgeFromDateString} = require('age-calculator')
let chalk = require('chalk')

let dataNasc = rs.question (chalk.magentaBright.bold('Qual sua data de nascimento? (DD/MM/AAAA): ')).split('/')
 
    let dia = dataNasc[0]
    let mes = dataNasc[1]
    let ano = dataNasc[2]
 
 let ageFromString = new AgeFromDateString(`${ano}/${mes}/${dia}`).age;
  console.log (chalk.cyanBright.bold(`Você nasceu em ${ano}. Sua idade é ${ageFromString} anos.`))