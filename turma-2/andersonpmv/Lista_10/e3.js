let rs = require('readline-sync')


class User {
    constructor (nomeIdade) {
        this.nome = rs.question('Digite seu nome: ');
        this.idade = rs.questionInt('Digite seu nome: ');
    }
}
const user = new User(`this.nome`, `this.idade`);

console.log(`Olá ${user.nome}, você ${user.idade} anos!`);