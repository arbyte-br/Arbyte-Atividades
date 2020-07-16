let rs = require('readline-sync')

let frase = rs.question('Escreva uma frase: \n')
let frasenova = frase.replace('bosta', 'estrume')

console.log(frasenova)