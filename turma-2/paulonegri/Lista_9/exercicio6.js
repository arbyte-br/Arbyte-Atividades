/*Escolha um programa que você já fez em atividades passadas e faça o output do
terminal ficar colorido com o pacote CHALK*/

const chalk = require('chalk')
const rs = require('readline-sync')
const primeiraNota = rs.questionFloat('Digite sua primeira nota> ')
const segundaNota = rs.questionFloat('Digite sua segunda nota> ')
const terceiraNota = rs.questionFloat('Digite sua terceira nota> ')

const media = (primeiraNota + segundaNota +terceiraNota)/3

media >= 7 
? console.log(chalk.bgWhite.blue.bold(`ALUNO APROVADO!`)) 
: console.log(chalk.bgBlackBright.red(`ALUNO REPROVADO!`))

