// (Obrigatório) Use o spread operator para transformar o array ['a', 'b', 'c'] em
// ['a', 'b', 'c', 'a', 'b', 'c']
let rs = require('readline-sync')

const letras = [ 'a', 'b', 'c']
let outrasLetras = [ 'a', 'b', 'c', ...letras]

console.log(outrasLetras);