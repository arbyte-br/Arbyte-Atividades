const rs = require('readline-sync')

class Person {
    constructor() {
        this.name = rs.question('Digite seu nome: ')
    }
}

const person = new Person
console.log(person.name)