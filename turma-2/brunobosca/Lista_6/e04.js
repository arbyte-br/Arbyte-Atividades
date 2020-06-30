let readlineSync = require('readline-sync')

let palavra = readlineSync.question('Digite uma palavra: ')

let vogais = ['a', 'e', 'i', 'o', 'u'];

let consoantes = ''

for (let contador = 0; contador < palavra.length; contador++) {
    if(palavra.charAt(contador) === vogais[contador]) {
        console.log(`VOGAIS: ${vogais[contador]}`)
    } 
}
console.log('====================')


