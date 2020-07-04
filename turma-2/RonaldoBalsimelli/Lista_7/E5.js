/*(OBRIGATÓRIO) Escreva uma aplicação em JS que receba dois números do usuário e
retorne a soma dos mesmos. A soma deve ser feita em uma função.
*/

let rs = require('readline-sync')


let n1 = rs.questionInt('Digite um número: ')
let n2 = rs.questionInt('Digite outro número: ')
function soma(n1, n2) {
    return n1 + n2
    
}

console.log("A soma dos seus números é " + soma(n1, n2))
