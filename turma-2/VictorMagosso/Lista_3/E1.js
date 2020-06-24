let rs = require('readline-sync')

let repeticoes = rs.questionInt('Quantas vezes você quer que o alarme repita?')

while (repeticoes > 0){
    console.log('BIP BIP')
    repeticoes--
}
console.log('======================')
console.log('Acordou?')