const rs = require('readline-sync')

let user1 = {}
let user2 = {}

user1.nome = rs.question('Informe seu nome: ')
user1.num = rs.question(`Seja bem vindo, ${user1.nome}! Informe um numero: `)

user2.nome = rs.question('Informe seu nome: ')
user2.num = rs.question(`Seja bem vindo, ${user2.nome}! Informe um numero: `)

if (user1.num > user2.num) {
    console.log (`O(A) usuário(a) ${user1.nome} digitou o maior número.`)
} else if (user2.num > user1.num) {
    console.log (`O(A) usuário(a) ${user2.nome} digitou o maior número.`)
} else {
    console.log ('Os números digitados são iguais.')
}
