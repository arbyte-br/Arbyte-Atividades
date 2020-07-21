let rs = require("readline-sync")

class Usuario {
    constructor(){
        this.nome =  rs.question("Digite seu nome!\n>>") 
        this.idade = rs.questionInt("Digite sua idade!\n>>")
      }
    }
  
const pessoa = new Usuario()
console.log(`Olá ` + pessoa.nome  , `, você tem ` + pessoa.idade , `anos!`)