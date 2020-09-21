/* Crie um programa de cadastro de alunos em uma escola, esse programa deve pedir ao
usuário as informações de Nome, Idade, Cpf e cidade, logo após instancie um objeto com
essas informações e imprima o resultado no console. */


const rs= require('readline-sync')

class Pessoa {
    constructor(nome,idade,cpf,cidade,telefone) {
        this.nome= nome;
        this.idade= idade;
        this.cpf= cpf;
        this.cidade= cidade;
        this.telefone= telefone

    }
}

let nome= rs.question ('Qual seu nome?\n')
let idade= rs.question ('Qual sua idade?\n')
let cpf= rs.question ('Qual seu cpf?\n')
let cidade= rs.question ('Qual sua cidade?\n')
let telefone= rs.question ('Qual seu telefone?\n')

let primeiraPessoa= new Pessoa(nome,idade,cpf,cidade,telefone)  

console.log(primeiraPessoa)