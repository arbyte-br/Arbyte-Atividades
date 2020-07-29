var rs = require('readline-sync')

class Pessoa {
    constructor(){
        this.name = rs.question("Qual o seu nome?: \n")
        this.idade = rs.question("Qual sua idade?: \n")
        
    }
}
 const primeiraPessoa = new Pessoa
 console.log(primeiraPessoa)
