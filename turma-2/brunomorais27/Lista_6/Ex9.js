let rs = require('readline-sync')

let frase = rs.question('Digite uma frase com a palavra "bosta": \n')

let corrigindo = frase.replace('bosta','estrume')

console.log (corrigindo)