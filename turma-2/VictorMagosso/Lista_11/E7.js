const fs = require('fs')
const rs = require('readline-sync')
//incompleto - preciso revisar JSON com Objetos
console.log('O que você deseja fazer?')
const opcao = rs.question('Cadastrar, listar ou sair: ').toUpperCase()
const userJson = "user.json"
const userBuffer = fs.readFileSync(userJson)
const newUser = JSON.parse(userBuffer)

switch (opcao) {
    case 'CADASTRAR':
        cadastrarUser()
        break;
}

const cadastrarUser = () => ({
    nome: rs.question('Digite seu nome: '),
    dataNasc: rs.question('Digite sua data de nascimento: ')
})

