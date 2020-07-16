const rs = require("readline-sync")
const chalk = require('chalk');
const md = require("median")

let listaNumeros = []

let n1 = rs.questionInt(chalk.red.bgCyan.bold("Digite um número: "))
listaNumeros.push(n1)
let n2 = rs.questionInt(chalk.red.bgCyan.bold("Digite um número: "))
listaNumeros.push(n2)
let n3 = rs.questionInt(chalk.red.bgCyan.bold("Digite um número: "))
listaNumeros.push(n3)
let n4 = rs.questionInt(chalk.red.bgCyan.bold("Digite um número: "))
listaNumeros.push(n4)

let media = md(listaNumeros)


console.log(chalk.red.bgWhite.bold("A média desses números são: " + media))

//log(chalk.blue.bgRed.bold('Hello world!'));