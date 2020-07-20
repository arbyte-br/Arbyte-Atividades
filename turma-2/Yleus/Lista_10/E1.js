let rs = require("readline-sync")



class Usuario {
    constructor(name){
        this.name =  rs.question("Digite seu nome!\n>>") 
      }
    }
  
const pessoa = new Usuario()
console.log(`Nome: ` + pessoa.name)