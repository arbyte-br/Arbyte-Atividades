let readlineSync = require('readline-sync')

let palavra = readlineSync.question('Digite uma palavra: ')

if (palavra.endsWith('al')) {
    console.log(`${palavra}`)
} else {
    console.log('Palavra inválida')
}
