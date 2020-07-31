// 1. (OBRIGATÓRIO) Faça uma programa que receba 4 notas e calcule a mediana e
// apresente ao usuário o resultado.
// Utilize o pacote : https://www.npmjs.com/package/median

const median = require('median')
const rs = require('readline-sync')

let notas = []

for (i = 0; i < 4; i++) {
    let n = rs.question('Informe uma nota de 0 a 10: ')
    notas.push(n)
}

const valor = median(notas)

console.log(`a média das notas é ${valor}`)