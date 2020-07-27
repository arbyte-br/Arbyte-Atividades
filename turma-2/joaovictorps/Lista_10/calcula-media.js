let rs = require('readline-sync')
function media(arr){
    let total = 0
    for(let numero = 0; numero < arr.length;numero++){
        total+= arr[numero]
    }
    return total / arr.length;
}

function calculaMediaIdadeAluno(alunos){
    let idade = 0
    for(const i of alunos){
        idade+= i.idade
    }
    return idade / alunos.length
}

class Aluno {
    constructor(nome, idade){
        this.nome = rs.question('Qual o seu nome ? \n')
        this.idade = rs.questionInt('Qual sua idade ? \n')
    }
}

function cadastrarAlunos(qtd = 3){
    let array = []
    for(let i = 0; i < qtd; i++){
        let aluno = new Aluno()
        array.push(aluno)
    }
    return array
}

module.exports = {media, cadastrarAlunos, calculaMediaIdadeAluno}
