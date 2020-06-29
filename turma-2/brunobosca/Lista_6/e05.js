let readlineSync = require('readline-sync')

let palavra = readlineSync.question('Digite uma palavra: ')

console.log(`A terceira letra do seu nome é ${palavra.charAt(2)}`)



