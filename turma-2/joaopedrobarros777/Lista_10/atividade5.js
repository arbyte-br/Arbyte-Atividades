//Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
//um possuir maior idade apresentar o nome de todos os que possuem maior idade.
//Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
//e inicialize essas variáveis nas propriedades do objeto.
//Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
//Crie o objeto do aluno e adicione em um array.
//Repita esse passo para os outros alunos.
//Ao final o algoritmo deve iterar pelo array de alunos  e descobrir quais são os alunos
//com maior idade e imprimir seus nomes.

let rs = require("readline-sync")

class Alunos {
    constructor(name) {
        this.nome = rs.question("Digite seu nome: \n")
        this.idade = rs.questionInt("Digite sua idade: \n")
    }
}

function cadastrarUsuarios (quantidade = 3){
    let alunos = []
    for (let i = 0; i < quantidade; i++){
        let aluno = new Alunos ()
        alunos.push(aluno)
    }   
    return alunos;
}

let alunos = cadastrarUsuarios ();

let maiores = []

for (i = 0 ; i < alunos.length ; i++){
    if (alunos[i].idade >= 18){
        maiores.push(alunos[i].nome)
    }
}

console.log(maiores)