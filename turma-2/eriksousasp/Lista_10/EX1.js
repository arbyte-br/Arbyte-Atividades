let rs = require ("readline-sync")

class User {
    constructor (nome) {
    this.nome = rs.question ("Qual seu nome? \n")
    }
}
const user = new User
console.log (user) 