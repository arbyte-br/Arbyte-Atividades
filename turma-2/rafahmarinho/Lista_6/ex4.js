// (OBRIGATÓRIO) Crie um programa que receba uma palavra e exiba quantas
// consoantes e vogais essa palavra tem.
// EX : saúde
// 2 consoantes
// 3 vogais

let rs = require('readline-sync')
let palavra = rs.question('Digite uma palavra: ').toLowerCase()

let vogais = 'aeiou'
let numVogais = []
let numConsoantes = []

for (let i = 0; i < palavra.length; i++){
    if (vogais.includes(palavra.charAt(i))){
        numVogais.push(palavra.charAt(i))
        console.log('vogal', palavra.charAt(i))
    }
    else {
        numConsoantes.push(palavra.charAt(i))
        console.log('consoante', palavra.charAt(i))
    }
}

console.log(`A palavra ${palavra} tem ${numVogais.length} vogais e ${numConsoantes.length} consoantes. `)