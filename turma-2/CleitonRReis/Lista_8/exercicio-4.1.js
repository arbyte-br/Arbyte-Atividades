/*
4.(OBRIGATÓRIO)Crieum programa que:

a.Peça o login de um usuário;
b.Peça sua senha;
c.Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIOLOGADO";
d.Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHAINCORRETOS";
e.Pare a execução.

Neste exercício, o usuário deve ser representado por um objeto. O login e a senhadevem ser propriedades deste objeto.
*/

const rs = require('readline-sync');

let nomeDeUsuario = rs.question('Informe seu login de usuário: ');
let senhaDeUsuario = rs.question('Informe a sua senha de usuário: ');

let dadosUsuario = {};

dadosUsuario.nomeUsuario = nomeDeUsuario;
dadosUsuario.senhaUsuario = senhaDeUsuario;
dadosUsuario.loginDeAcesso = "Cleiton Reis";
dadosUsuario.senhaDeAcesso = "senha1234";

if(dadosUsuario.nomeUsuario == dadosUsuario.loginDeAcesso && dadosUsuario.senhaUsuario == dadosUsuario.senhaDeAcesso){
    console.log("Usuário Logado!");
}else{
    console.log('Login ou Senha incorretos')
}

console.log(dadosUsuario);