// (OBRIGATÓRIO) Crieumprogramaque:
// a.Peça o login de um usuário;
// b.Peça sua senha;
// c.Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIOLOGADO";
// d.Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHAINCORRETOS";
// e.Pare a execução.
// Neste exercício, o usuário deve ser representado por um objeto.
// O login e a senhadevem ser propriedades deste objeto

let rs = require ('readline-sync')

usuarioC = 'lucasprezom',
senha = 'arbyte';

let usuario = {usuarioC, senha}

usuarioL = rs.question('Digite seu usuario:\n')
senhaL = rs.question('Digite sua senha:\n')

if (usuarioL === usuarioC && senhaL === senha) {
    console.log ('USUÁRIO LOGADO')
} else {
    console.log ('LOGIN/SENHA INCORRETOS')
}