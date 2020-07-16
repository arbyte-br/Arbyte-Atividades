// (OBRIGATÓRIO) Crie um programa que:
// a. Peça o nome de 2 usuários;
// b. Para cada usuário, peça 1 número;
// c. Imprima na tela qual usuário digitou o maior número.
// d. Pare a execução.
// Neste exercício, cada usuário deve ser representado por um objeto. O nome e o número
// do usuário devem ser propriedades deste objeto.

let rs = require('readline-sync')
let nomeUser1 = rs.question('Digite um nome: ')
let nomeUser2 = rs.question('Digite outro nome:')

let number1 =  rs.questionInt(`Por favor ${nomeUser1} digite um numero: `)
let number2 = rs.questionInt(`Por favor ${nomeUser2} digite um numero: `)


let user1 = {
    nome: nomeUser1,
    numeroEscolhido: number1
}

let user2 = {
    nome: nomeUser2,
    numeroEscolhido: number2
}

console.log(user1)
console.log(user2)