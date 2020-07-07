//Crie um programa que receba uma palavra e exiba quantas
//consoantes e vogais essa palavra tem.

let rs = require('readline-sync')
let palavra = rs.question('Digite uma palavra aqui: ')
let vogais = 'aeiou'
let vogal = []
let consoante = []
let palavraMinuscula = palavra.toLowerCase()


for(i = 0; i < palavraMinuscula.length; i++){
    let letra = palavra[i]
    vogais.includes(letra) ? vogal.push(letra) : consoante.push(letra)
}
console.log(`A palavra ${palavra} tem ${vogal.length} vogais e ${consoante.length} consoantes. `)