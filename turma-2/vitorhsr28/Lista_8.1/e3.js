const rs = require('readline-sync')

let user1 = {}
let user2 = {}
let data = new Date

user1.nome = rs.question('Informe seu nome: ')
user1.nasc = rs.question(`Seja bem vindo, ${user1.nome}! Informe a data do seu nascimento (DD/MM/AAAA): `)
user1.sep = user1.nasc.split('/')

if (data.getDate() < user1.sep[0] && data.getMonth() + 1 <= user1.sep[1]) {
    user1.idade = data.getFullYear() - user1.sep[2] - 1
    console.log(`Você tem ${user1.idade} anos`)
} else {
    user1.idade = data.getFullYear() - user1.sep[2]
    console.log(`${user1.nome}, você tem ${user1.idade} anos!`)
}

user2.nome = rs.question('Informe seu nome: ')
user2.nasc = rs.question(`Seja bem vindo, ${user2.nome}! Informe a data do seu nascimento (DD/MM/AAAA): `)
user2.sep = user2.nasc.split('/')

if (data.getDate() < user2.sep[0] && data.getMonth() + 1 <= user2.sep[1]) {
    user2.idade = data.getFullYear() - user2.sep[2] - 1
    console.log(`Você tem ${user2.idade} anos`)
} else {
    user2.idade = data.getFullYear() - user2.sep[2]
    console.log(`${user2.nome}, você tem ${user2.idade} anos!`)
}

if (user1.idade > user2.idade) {
    console.log(`O(A) ${user1.nome} é mais velho(a) que o(a) ${user2.nome}!`)
} else if (user2.idade > user1.idade) {
    console.log(`O(A) ${user2.nome} é mais velho(a) que o(a) ${user1.nome}!`)
} else {
    console.log('Os dois tem a mesma idade!')
}
