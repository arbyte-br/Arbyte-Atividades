/* (OBRIGATÓRIO) Crie um programa que:
a. Peça o login de um usuário;
b. Peça sua senha;
c. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO
LOGADO";
d. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA
INCORRETOS";
e. Pare a execução.
Neste exercício, o usuário deve ser representado por um objeto. O login e a senha
devem ser propriedades deste objeto.
*/
let rs = require("readline-sync")

let login = rs.question('Digite o seu nome de usuário: \n')
let senha = rs.question('Digite sua senha: \n')

let logCerto = "Corinthians"
let senhaCerto = "1910"

let digitado = {
    login:logCerto, 
    senha:senhaCerto
}

    if (login === digitado.login && senha === digitado.senha){
        console.log ("USUÁRIO LOGADO")
    }
    else {
        console.log ("LOGIN/SENHA INCORRETOS")
    }