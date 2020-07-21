//Crie uma aplicação em JS que receba um nome e uma idade do usuário e crie um novo usuário com o 
//nome e a idade fornecida e o imprima na tela neste formato -> "Olá <nome do usuário>, você tem <idade do usuário> anos!". 
//Este objeto deve ser criado usando uma classe.

let rs = require('readline-sync')

class usuario{
    constructor(){
    this.nome = rs.question('Digite seu nome: ')
    this.idade = rs.questionInt('Digite sua idade: ')
    }    
} 

const nomeUsuario = new usuario

console.log(`Olá ${nomeUsuario.nome}, você tem ${nomeUsuario.idade} anos!`)