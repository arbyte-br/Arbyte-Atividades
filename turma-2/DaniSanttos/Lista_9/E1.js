let rs = require('readline-sync')
let median = require('median')

let listaDeNumero = []

for(i = 0; i < 4; i++){
    let numero = rs.question('Digite um número: ')
    numero = listaDeNumero.push(numero)
}

let value = median(listaDeNumero)

console.log(`Você inseriu os números ${listaDeNumero.join(', ')} e a mediana deles é ${value}.`)