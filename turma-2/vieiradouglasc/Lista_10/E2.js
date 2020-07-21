let rs = require('readline-sync')

class People {
    constructor(nameAge) {
        this.name = rs.question('Insira seu nome: ')
        this.age = rs.questionInt('Insira sua idade: ')
    }
}
const people1 = new People()
console.log(people1)
