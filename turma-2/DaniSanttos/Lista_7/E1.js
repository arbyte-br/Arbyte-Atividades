let rs = require('readline-sync')

let input = rs.question('Insira o seu nome: ')

function mensagem (nome) {
    return `Olá ${nome}, seja bem vindo`
}

console.log(mensagem(input))