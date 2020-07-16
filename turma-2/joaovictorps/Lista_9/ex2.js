let rs = require('readline-sync')
const FasamIMC = require('fasam-imc-calc')

function pesoAltura() {
    let peso = rs.questionFloat('Digite o seu peso: ')
    let altura = rs.questionFloat('Digite a sua altura: ')
    let imc = new FasamIMC(peso, altura)
    return imc.calc()
}

console.log(pesoAltura())