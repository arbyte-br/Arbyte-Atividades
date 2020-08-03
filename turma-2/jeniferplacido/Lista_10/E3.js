// (OBRIGATÓRIO)​Crie uma aplicação em JS que receba um nome e uma idade do
//usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela
//neste formato -> "Olá <nome do usuário>, você tem <idade do usuário> anos!". 
// Este objeto deve ser criado usando uma classe

let rs = require ("readline-sync")

class usuario{
    constructor(){
    this.name = rs.question("Qual o seu nome?")
    this.idade= rs.question("Qual a sua idade?")
    }
}
const pessoa = new usuario()

console.log(`Olá ${pessoa.name} voce tem ${pessoa.idade} anos`)