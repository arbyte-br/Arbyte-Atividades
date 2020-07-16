let rs = require('readline-sync')

let palavra = rs.question('Insira uma palavra: ')

if (palavra.includes('mp') && palavra.includes('mb')) {
    console.log('Parabéns, sua gramática está correta')
} else {
    console.log('Antes de “p” ou “b” devemos usar M')
}