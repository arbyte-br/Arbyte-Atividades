// 6. Escolha um programa que você já fez em atividades passadas e faça o output do
// terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk

const rs = require('readline-sync')
const chalk = require('chalk');

let user1 = {}
let user2 = {}

user1.nome = rs.question(chalk.blue('Informe seu nome: '))
user1.num = rs.question(`Seja bem vindo(a), ${chalk.bgBlue(` ${user1.nome} `)}! Informe um numero: `)

user2.nome = rs.question(chalk.red('Informe seu nome: '))
user2.num = rs.question(`Seja bem vindo(a), ${chalk.bgRed(` ${user2.nome} `)}! Informe um numero: `)

if (user1.num > user2.num) {
    console.log (chalk.blueBright(`O(A) usuário(a) ${user1.nome} digitou o maior número.`))
} else if (user2.num > user1.num) {
    console.log (chalk.redBright(`O(A) usuário(a) ${user2.nome} digitou o maior número.`))
} else {
    console.log (chalk.inverse('Os números digitados são iguais.'))
}