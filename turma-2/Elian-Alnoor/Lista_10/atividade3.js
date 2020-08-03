// Crie uma aplicação em JS que receba um nome e uma idade do 
// usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela 
// neste formato -> "Olá <nome do usuário>, você tem <idade do usuário> anos!". Este 
// objeto deve ser criado usando uma classe. 
const rs = require('readline-sync')

class Usuario {
    constructor(){
    this.nome = rs.question('Informe o seu nome:\n')

    this.idade = rs.questionInt('Informe a sua idade:\n')
}
}

let user = new Usuario()
console.log(`Olá ${user.nome}, você tem ${user.idade} anos`)