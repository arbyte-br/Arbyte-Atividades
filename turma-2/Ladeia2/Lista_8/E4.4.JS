/* 4. (OBRIGATÓRIO) Crie um programa que:
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


let rs = require('readline-sync')

let login = rs.question('longin: ')
let senha = rs.questionInt('Senha:')

correto = {
    login: login, correto: ('Usuário Logado')
}

incorreto = {
    login: login, Erro: ('LOGIN ou SENHA INCORRETOs')
}

if (login == 'Arbyte' && senha == '1234' ){
    console.log(correto)
}else{
    console.log(incorreto)
}

