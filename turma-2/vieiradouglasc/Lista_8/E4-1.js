// Crie um programa que:
// a. Peça o login de um usuário;
// b. Peça sua senha;
// c. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO
// LOGADO";
// d. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA
// INCORRETOS";
// e. Pare a execução.

let readlineSync = require('readline-sync')

let login = 'vieira.douglasc'
let pass = '12345'

let dadosUser = {
    loginUser: readlineSync.question('Insira seu login: '),
    passUser: readlineSync.question('Insira sua senha: ')
}

if (dadosUser.loginUser === login && dadosUser.passUser === pass) {
    console.log('USUÁRIO LOGADO')
} else {
    console.log('LOGIN/SENHA INCORRETOS')
}
