
let rs = require('readline-sync')

let n = rs.questionInt('Digite um número: ')

for (passo = 0; passo < n; passo++) {
    // Executa 5 vezes, com os valores de passos de 0 a 4.
    console.log('*');
  }