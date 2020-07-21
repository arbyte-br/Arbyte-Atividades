const rs = require('readline-sync')

let user1 = {}
let data = new Date

user1.nome = rs.question('Informe seu nome: ')
user1.nasc = rs.question(`Seja bem vindo, ${user1.nome}! Informe a data do seu nascimento (DD/MM/AAAA): `)
user1.sep = user1.nasc.split('/')

if (data.getDate() < user1.sep[0] && data.getMonth() + 1 <= user1.sep[1]) {
    user1.idade = data.getFullYear() - user1.sep[2] - 1
    console.log(`Você tem ${user1.idade} anos`)
} else {
    user1.idade = data.getFullYear() - user1.sep[2]
    console.clear()
    console.log(`${user1.nome}, você tem ${user1.idade} anos!`)
}
