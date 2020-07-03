//Crie um programa que receba uma palavra e exiba quantasconsoantes e vogais essa palavra tem.

let rs = require("readline-sync")

let palavra = rs.question('Digite uma palavra: ')

let vogais = 'AEIOUaeiou'
let numVogais = []
let numConsoantes = []

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
        numVogais.push(palavra[i])
    }
   else {
    numConsoantes.push(palavra[i])
    }
}

console.log(`A palavra ${palavra} tem ${numConsoantes.length} consoantes e ${numVogais.length} vogais. `)

