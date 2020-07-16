let rs = require('readline-sync')
const FasamIMC = require('fasam-imc-calc')
const chalk = require('chalk');

function pesoAltura() {
    let peso = rs.questionFloat('Digite o seu peso: ')
    let altura = rs.questionFloat('Digite a sua altura: ')
    let imc = new FasamIMC(peso, altura)
    if (imc.calc() > 18.5 && imc.calc() < 24.9) {
        console.log(chalk.white.bgGreen.bold(imc.calc()))
    } else {
        console.log(chalk.white.bgRed.bold(imc.calc()))
    }
}

pesoAltura()