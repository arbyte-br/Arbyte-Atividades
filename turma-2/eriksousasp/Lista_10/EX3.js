let rs = require ("readline-sync")

 class User {
    constructor (nome) {
    this.nome = rs.question ("Digite o seu nome:  \n")
    this.idade = rs.questionInt ("Digite a sua idade:  \n")
    }
}
const user = new User
console.log (`Olá ${user.nome},você tem ${user.idade} anos!`) 