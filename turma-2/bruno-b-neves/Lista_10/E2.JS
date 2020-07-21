const rs = require('readline-sync');

class User {
    constructor () {
        this.name = rs.question('Por favor insira seu nome: ');
        this.age = rs.questionInt('Por favor insira sua idade: ');
    }
}

const user = new User();
console.log(user)