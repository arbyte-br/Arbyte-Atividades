let rs = require('readline-sync')

let palavra = rs.question('Insira uma palavra: ')

console.log(`A terceira letra de ${palavra} é o ${palavra.charAt(2)}`)