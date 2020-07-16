let rs = require('readline-sync')
const FasamIMC = require('fasam-imc-calc')
const chalk = require('chalk');

function pesoAltura() {
    let peso = rs.questionFloat('Digite o seu peso: ')
    let altura = rs.questionFloat('Digite a sua altura: ')
    let imc = new FasamIMC(peso, altura)

    if(imc.calc() < 18.5) {
        console.log(chalk.white.bgRed.bold(`Seu imc é ${imc.calc()} e você está abaixo do peso.`))
    } else if (imc.calc() >= 18.5 && imc.calc() < 25){
        console.log(chalk.white.bgGreen.bold(`Seu imc é ${imc.calc()} e você está com peso normal.`))
    } else if (imc.calc() >= 25 && imc.calc() < 30){
        console.log(chalk.black.bgYellow.bold(`Seu imc é ${imc.calc()} e você está acima do peso. (I)`))
    } else if (imc.calc() >= 30 && imc.calc() < 40){
        console.log(chalk.white.bgRed.bold(`Seu imc é ${imc.calc()} e você está com obesidade. (II)`))
    } else {
        console.log(chalk.white.bgRed.bold(`Seu imc é ${imc.calc()} e você está com obesidade GRAVE. (III)`))
    }
}

pesoAltura()