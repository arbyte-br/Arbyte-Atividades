/*Crie um programa que:
a. Peça o login de um usuário;
b. Peça sua senha;
c. Caso o usuário e a senha estejam corretos, imprima na tela "USUÁRIO
LOGADO";
d. Caso usuário ou senha estejam incorretos, imprima na tela "LOGIN/SENHA
INCORRETOS";
e. Pare a execução.
Neste exercício, o usuário deve ser representado por um objeto. O login e a senha
devem ser propriedades deste objeto.*/

let rs = require(`readline-sync`)
let usuario = {}
usuario.login = rs.question(`Login: `)
usuario.senha = rs.question(`Senha: `,{hideEchoBack: true})

usuario.login == `antonio` && usuario.senha == `nunes`
   ? console.log(`USUÁRIO LOGADO`)
   : console.log(`LOGIN/SENHA INCORRETOS`)


