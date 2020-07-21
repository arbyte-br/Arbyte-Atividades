const rs = require('readline-sync')

class Person {
    constructor() {
        this.name = rs.question('Digite seu nome: ')
        this.age = rs.question('Informe sua idade: ')
    }
}

const person = new Person
console.log(`Olá ${person.name}, você tem ${person.age} anos!`)