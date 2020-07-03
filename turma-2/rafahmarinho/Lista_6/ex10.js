// (OBRIGATÓRIO) Faça um algoritmo que receba um texto e imprima ele em letras
// maisuculas.
// Utilize o método toUpperCase()

let rs = require('readline-sync')
let texto = rs.question('Digite um texto: ').toUpperCase()
console.log(texto)