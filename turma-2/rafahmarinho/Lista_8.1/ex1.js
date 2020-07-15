// (OBRIGATÓRIO) Crie um programa que:
// a. Peça o nome de 2 usuários;
// b. Para cada usuário, peça 1 número;
// c. Imprima na tela qual usuário digitou o maior número.
// d. Pare a execução.
// Neste exercício, cada usuário deve ser representado por um objeto. O nome e o número
// do usuário devem ser propriedades deste objeto

let rs = require('readline-sync')

let user1 = {
    nome:'nome',
    numero: 0
}

let user2 = {
    nome:'nome',
    numero:0
}

user1.nome = rs.question('Qual o nome do primeiro usuário? \n')
user2.nome = rs.question('Qual o nome do segundo usuário? \n')
user1.numero = rs.questionInt(`${user1.nome} digite um número: `)
user2.numero = rs.questionInt(`${user2.nome} digite um número: `)

if (user1.numero > user2.numero){
    console.log(`${user1.nome} digitou o maior número!`)
} else if (user1.numero < user2.numero){
    console.log(`${user2.nome} digitou o maior número!`)
}else{
    console.log(`Os números digitados são iguais.`)
}

