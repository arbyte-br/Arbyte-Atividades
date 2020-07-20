const rs = require('readline-sync')

let palavra = rs.question('Informe uma palavra: ')

console.clear()
console.log(`A terceira letra da palavra ${palavra} é ${palavra.charAt(2)}.`)