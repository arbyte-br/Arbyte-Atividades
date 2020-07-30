/*4. (OBRIGATÓRIO) Crie um programa que:
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

let login = rs.question('Qual o seu login ? ')
let senha = rs.question('Qual a sua senha ? ')

if (login !== 'josiane-rocha' || senha !== 'arbyte') {
    console.log('LOGIN/SENHA INCORRETOS')
} else {
    console.log('USUÁRIO LOGADO')

}
