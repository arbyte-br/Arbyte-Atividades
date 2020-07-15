let readlineSync = require('readline-sync')
let palavra = readlineSync.question('Digite uma palavra: ')
let vogais = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; palavra.length; i++) {
    if(palavra.indexOf(vogais[i]) !== -1){
        console.log('A palavra: ' + palavra + ', tem vogais.')
        break
    } else {
        console.log('A palavra: ' + palavra + ', não tem vogais.')
        break
    }
}
