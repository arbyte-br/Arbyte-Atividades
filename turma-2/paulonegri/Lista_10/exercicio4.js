/*Criar uma função que receba uma coleção de alunos e calcule a
média de idade
Adicione uma nova função no arquivo calcula-media.js chamada
calculaMediaIdadeAluno(alunos).
A função deve receber um array da mesma classe dos alunos criada na atividade 2.
Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela.
Adicione essa função para ser exportado pelo módulo.
Adicione no final do programa da atividade 2 após informar o nome dos alunos com
maior idade também imprimir a média de idade dos alunos utilizando o método
calculaMediaIdadeAluno(alunos)*/

let rs = require('readline-sync');
let meuModulo = require('./idadeMedia');

class aluno{
    constructor(nome, idade){
        this.nome = rs.question('Qual o seu nome?\n');
        this.idade = rs.questionInt('Qual a sua idade?\n');
    }
}
const alunosMaiores = [];
const alunos = [];

let primeiroAluno = {}
    primeiroAluno = new aluno()
    aluno.nome
    aluno.idade

if(primeiroAluno.idade >= 18){
    alunosMaiores.push(primeiroAluno);
    alunos.push(primeiroAluno.idade)
    
} 
let segundoAluno = {}
    segundoAluno = new aluno(); 
    aluno.nome
    aluno.idade
if(segundoAluno.idade >= 18){
    alunosMaiores.push(segundoAluno);
    alunos.push(segundoAluno.idade)
}
let terceiroAluno = {}
    terceiroAluno = new aluno(); 
    aluno.nome
    aluno.idade
if(terceiroAluno.idade >= 18){
    alunosMaiores.push(terceiroAluno);
    alunos.push(terceiroAluno.idade)
}

console.clear();
console.log(alunosMaiores);
console.log(alunos);
console.log(`A media da idade desse alunos é ${meuModulo.media(alunos)}`)
