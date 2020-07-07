// (OBRIGATÓRIO) ​ Escreva um programa que verifique a validade de uma senha
// fornecida pelo usuário.
// A senha válida é o número 1234.
// Devem ser impressas as seguintes mensagens:
// - ACESSO PERMITIDO caso a senha seja válida.
// - ACESSO NEGADO caso a senha seja inválida

let readlineSync = require('readline-sync');
let user = readlineSync.question('Insira seu usuário: ');
let pass = readlineSync.questionInt('Insira sua senha: ');

if (pass == 1234) {
    console.log('ACESSO PERMITIDO');
} else {
    console.log('ACESSO NEGADO');
}