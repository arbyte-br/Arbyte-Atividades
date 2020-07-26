// Exercicio feito com ajuda do Roberto.

const rs = require('readline-sync');

const MAIORIDADE = 18; 
const QTDALUNOS = 3; 

class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.EhMaiorDeIdade = this.idade >= MAIORIDADE; 
    }
}
let cadastrarAlunos = (quantidade = 3) => {
  
    let alunos = []; 

    for (let i = 0; i < quantidade; i++) {
        let nome = rs.question(`Digite o nome do(a) ${i + 1}° aluno(a): `);
        let idade = rs.questionInt(`Digite a idade do(a) ${nome}: `);
        alunos.push(new Aluno(nome, idade));
    }
    return alunos;
}


let alunosMaiorDeIdade = alunos => {
    let alunosMaiorDeIdade = [];
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].EhMaiorDeIdade) {
            alunosMaiorDeIdade.push(alunos[i]);
        }
    }
    return alunosMaiorDeIdade;
}


let app = () => {
    let alunos = cadastrarAlunos(QTDALUNOS);
    let maioresDeIdade = alunosMaiorDeIdade(alunos);
    console.log('Alunos Cadastrados:', alunos);
    console.log('Alunos Maiores de Idade:', maioresDeIdade);
}

app()