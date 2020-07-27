/*1. (OBRIGATÓRIO) Crie um programa que:
a. Peça o nome de 2 usuários;
b. Para cada usuário, peça 1 número;
c. Imprima na tela qual usuário digitou o maior número.
d. Pare a execução.
Neste exercício, cada usuário deve ser representado por um objeto. O nome e o número
do usuário devem ser propriedades deste objeto.
*/

let rs = require('readline-sync')

let nomeUser1 = rs.question(console.log('Digite seu nome: '))
let nomeUser2 = rs.question(console.log('Digite outro nome: '))
let numberUser1 = rs.questionInt(console.log('Por favor ${nomeUser1} digite um número: '))
let numberUser2 = rs.questionInt(console.log('Por favor ${nomeUser2} digite um número: '))

let user1 = {
    nome: nomeUser1,
    numeroEscolhido: numberUser1
}

let user2 = {
    nome: nomeUser2,
    numeroEscolhido: numberUser2
}

console.log(user1)
console.log(user2)

if (nomeUser1 + numberUser1 >= 0) {
    console.log(nomeUser1)

} else {
    console.log(nomeUser2)
}