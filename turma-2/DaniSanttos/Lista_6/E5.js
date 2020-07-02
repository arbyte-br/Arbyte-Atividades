let rs = require("readline-sync")

let palavra = rs.question('Digite uma palavra: ')

console.log(`A terceira letra da sua palavra é: ${palavra.charAt(2).toUpperCase()}`)