let readlineSync = require('readline-sync');
let frase = readlineSync.question('Escreva uma frase contendo a palavra bosta: ')
frase = frase.replace('bosta', 'estrume')

console.clear()

console.log(frase)