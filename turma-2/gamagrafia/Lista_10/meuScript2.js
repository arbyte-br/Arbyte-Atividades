
let rs = require ('readline-sync')

class nomeUsuario {
     constructor(nomeIdade){
         this.nome = rs.question('Qual seu nome?')
         this.idade = rs.question('Qual sua idade?')
     }
}

let novoObjeto = new nomeUsuario ()

console.log(novoObjeto)