/*Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior
idade, se mais de um possuir maior idade apresentar o nome de todos os que possuem
maior idade.
Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
e inicialize essas variáveis nas propriedades do objeto.
Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
Crie o objeto do aluno e adicione em um array.
Repita esse passo para os outros alunos.
Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
com maior idade e imprimir seus nomes.*/

let rs = require('readline-sync');

class aluno{
    constructor(nome, idade){
        this.nome = rs.question('Qual o seu nome?\n');
        this.idade = rs.questionInt('Qual a sua idade?\n');
    }
}
const alunosMaiores = []

let primeiroAluno = {}
    primeiroAluno = new aluno()
    aluno.nome
    aluno.idade

if(primeiroAluno.idade >= 18){
    alunosMaiores.push(primeiroAluno);
} 
let segundoAluno = {}
    segundoAluno = new aluno(); 
    aluno.nome
    aluno.idade
if(segundoAluno.idade >= 18){
    alunosMaiores.push(segundoAluno);
}
let terceiroAluno = {}
    terceiroAluno = new aluno(); 
    aluno.nome
    aluno.idade
if(terceiroAluno.idade >= 18){
    alunosMaiores.push(terceiroAluno);
}

console.clear()
console.log(alunosMaiores)
