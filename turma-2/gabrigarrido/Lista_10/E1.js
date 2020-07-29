var rs = require('readline-sync')

class Pessoa {
    constructor(){
        this.name = rs.question("Qual o seu nome?: \n")
        
    }
}
 const primeiraPessoa = new Pessoa
 console.log(primeiraPessoa)
