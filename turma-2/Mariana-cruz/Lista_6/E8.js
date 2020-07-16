// (OBRIGATÓRIO) Faça um programa que receba uma palavra e diga se há vogais ou
// não.
// Utilize o método indexOf()

let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: ')

let vogais = ['a', 'e', 'i', 'o', 'u']
let numVogais = 0

for (contador = 0; contador < palavra.length; contador++) {
    let x = palavra[contador];
    let temVogal = vogais.indexOf(x) > -1

    if (temVogal) {
        numVogais++
    }
}
if (numVogais > 0) {
    console.log('Tem vogal. ')
} 
else {
    console.log('Não tem vogal')
}
