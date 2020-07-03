let rs = require('readline-sync')


let palavra = rs.question('Digite uma palavra: \n')
let palavraInvertida = ''
for (let i = 0; i < palavra.length; i++){
    palavraInvertida = palavra[i] + palavraInvertida
}
console.log('Entendi ' + palavraInvertida + ' rss')