rs = require ('readline-sync')

let vogais = 'aeiou'

let listaVogais = []
let listaConsoantes = []

let palavra = rs.question ('Digite uma palavra:\n').toLowerCase

for (i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra.CharAt(i))) {
        listaVogais.push(palavra.chartAt(i))
    } else {
        listaConsoantes.push(palavra.CharAt(i))
    }
}

console.log ('O número de vogais é: ' + listaVogais.length + 'e o número de consoantes é: ' + listaConsoantes.length)
