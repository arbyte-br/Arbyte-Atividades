var rs = require('readline-sync')
class Pessoa {
    constructor(){
        this.name = rs.question("Qual o seu nome?: \n")
        this.idade = rs.question("Qual sua idade?: \n")
        
    }

    imprimeBoasVindas(){
        console.log(`Olá! ${this.name}, você tem ${this.idade} anos!`)
    }
}
 const primeiraPessoa = new Pessoa
 console.log(primeiraPessoa.imprimeBoasVindas())