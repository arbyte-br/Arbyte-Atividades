// 4. (OBRIGATÓRIO) Crie um programa que:
// a. Peça o login de um usuário;
// b. Peça sua senha;
// c. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO
// LOGADO";
// d. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA INCORRETOS";
// e. Pare a execução.
// Neste exercício, o usuário deve ser representado por um objeto. O login e a senha
// devem ser propriedades deste objeto.

let rs = require('readline-sync')

let x={}
x.login = rs.question('Digite seu login\n')
x.senha = rs.questionInt('Digite sua senha\n')
x.loginCerto = 'nome.usuario@email.com'
x.senhaCerta = '123456'

if (x.login == x.loginCerto && x.senha == x.senhaCerta){
    console.log('USUÁRIO LOGADO');
}
else{
    console.log('LOGIN/SENHA INCORRETOS')
}
