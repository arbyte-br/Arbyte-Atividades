let median = require('median')
let rs = require('readline-sync')

let numeros = []

for (let i = 0; i < 7; i++){
    let pergunta = rs.questionInt(`Digite o numero ${i + 1}: `)
    numeros.push(pergunta)
}
console.log(median(numeros))
