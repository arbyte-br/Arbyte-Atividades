// 5. (OBRIGATÓRIO) Faça um programa que receba um nome e imprima a terceira letra do
// nome.
// Utilize o método charAt() para esta atividade.

let rs = require ('readline-sync')
let palavra = rs.question ('Digite uma palavra: ')
console.log (palavra.charAt(2))