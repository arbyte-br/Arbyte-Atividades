let rs = require('readline-sync')

class Aluno {
    constructor(nome, idade){
        this.nome = rs.question('Qual o seu nome ? \n')
        this.idade = rs.questionInt('Qual sua idade ? \n')
    }
}

function cadastrar(qtd = 3){
    let array = []
    for(let i = 0; i < qtd; i++){
        let aluno = new Aluno()
        array.push(aluno)
    }
    return array
}

let novoArray = cadastrar()
let maioresIdade = []
for(const i of novoArray){
    if(i.idade >= 18){
        maioresIdade.push(i.nome)
    }
}

console.log(maioresIdade)
