/* Crie um programa que cadastra 2 usuários e salve as informações em algum lugar, logo
após o programa deve comparar os dados dos dois usuários e informar no console se algum
dado é igual.
 */

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

let nome2= rs.question ('Qual seu nome?\n')
let idade2= rs.question ('Qual sua idade?\n')
let cpf2= rs.question ('Qual seu cpf?\n')
let cidade2= rs.question ('Qual sua cidade?\n')
let telefone2= rs.question ('Qual seu telefone?\n')

let primeiraPessoa= new Pessoa(nome,idade,cpf,cidade,telefone)
let segundaPessoa= new Pessoa(nome2,idade2,cpf2,cidade2,telefone2)

if (primeiraPessoa.nome===segundaPessoa.nome||primeiraPessoa.idade===segundaPessoa.idade||
    primeiraPessoa.cpf===segundaPessoa.cpf||primeiraPessoa.cidade===segundaPessoa.cidade||
    primeiraPessoa.telefone===segundaPessoa.telefone) {
        console.log('DADOS IGUAIS')
    
} else {
    console.log('DADOS DIFERENTES')
}