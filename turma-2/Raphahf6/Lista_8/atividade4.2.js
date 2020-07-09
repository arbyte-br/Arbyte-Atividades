// (OBRIGATÓRIO) Crie um programa que:
// a. Peça o login de um usuário;
// b. Peça sua senha;
// c. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO
// LOGADO";
// d. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA
// INCORRETOS";
// e. Pare a execução.

let rs = require('readline-sync')

let userLogin = rs.question('Digite o seu login: ')
let senhaLogin = rs.question('Digite a sua senha: ')

let autenticar = {
    login: 'raphaellima6',
    senha: '12345678'
}

if (userLogin === autenticar.login && senhaLogin === autenticar.senha){
    console.log('BEM VINDO AO SISTEMA')
} else{
    console.log('FALHA NO LOGIN ! USUARIO OU SENHA INCORRETOS.')
}