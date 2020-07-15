// (OBRIGATÓRIO) Crie um programa que:
// a. Peça o login de um usuário;
// b. Peça sua senha;
// c. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO
// LOGADO";
// d. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA
// INCORRETOS";
// e. Pare a execução.
// Neste exercício, o usuário deve ser representado por um objeto. O login e a senha
// devem ser propriedades deste objeto.

let rs = require('readline-sync')

let login = {
    user: '',
    pass: '',
}
console.log('========= CRIANDO SUA CONTA =========')
login.user = rs.question ('Digite um nome de úsuario: ')
login.pass = rs.question ('Digite uma senha: ')

console.clear()

console.log('========= FAÇA SEU LOGIN =========')
let user = rs.question('Login: ')
let pass = rs.question('Senha: ')

if (login.user === user && login.pass === pass){
    console.log('USUÁRIO LOGADO')
} else{
    console.log('LOGIN/SENHA INCORRETOS')
}