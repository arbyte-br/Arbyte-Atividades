const rs = require('readline-sync');

class User {
    constructor() {
        this.name = rs.question('Insira seu nome: ');
        this.age = rs.question('Insira sua idade: ')
    }
}

const user = new User();
console.log(`Olá ${user.name}, e você tem ${user.age} anos`)