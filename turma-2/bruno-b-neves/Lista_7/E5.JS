let readline = require('readline-sync')

let numero1 = readline.questionInt('Insira o primeiro numero ')
let numero2 = readline.questionInt('Insira o segundo numero ')
function numero(numero1, numero2) {
  let menor = Math.min(numero1, numero2)
  return menor
}
console.log(numero(numero1, numero2))