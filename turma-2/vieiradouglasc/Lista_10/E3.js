let rs = require('readline-sync')

class User {
    constructor(nameAge) {
        this.name = rs.question('Insira seu nome: ')
        this.age = rs.questionInt('Insira sua idade: ')
    }
}

const user1 = new User()

console.log(`Olá ${user1.name}, você tem ${user1.age} anos!`)