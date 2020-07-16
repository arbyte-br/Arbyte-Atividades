let rs = require('readline-sync')

let valor1 = rs.questionInt('Digite o primeiro valor: ')
let valor2 = rs.questionInt('Digite o segundo valor: ')
let valor3 = rs.questionInt('Digite o terceiro valor: ')
let comparacao = valor1

if (valor1 < valor2 && valor2 < valor3) {
    console.log(`${valor1} ${valor2} ${valor3}`)
} else {
    console.log('errado')
}