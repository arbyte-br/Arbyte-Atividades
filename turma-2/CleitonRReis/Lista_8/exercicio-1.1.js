/*
1.(OBRIGATÓRIO)
Crie um programa que:

a.Peça o nome de 2 usuários;
b.Para cada usuário, peça 1 número;
c.Imprima na tela qual usuário digitou o maior número;
d.Pare a execução.

Neste exercício, cada usuário deve ser representado por um 
objeto. O nome e o número do usuário devem ser propriedades deste objeto
*/

const rs = require('readline-sync');

let user1 = rs.question('Usuário 1, informe seu nome: ');

let user2 = rs.question('Usuário 2, informe seu nome: ');

let numberUser1 = rs.questionInt(`${user1}, informe um número: `);

let numberUser2 = rs.questionInt(`${user2}, informe um número: `);

let dados = {};

dados.nomeDoPrimeiroUsuario = user1;
dados.nomeDoSegundoUsuario = user2;
dados.numeroDoPrimeiroUsuario = numberUser1;
dados.numeroDoSegundoUsuario = numberUser2;

if (dados.numeroDoPrimeiroUsuario > dados.numeroDoSegundoUsuario) {
    console.log(`O(a) usuário(a) ${user1}, digitou o maior número: ${dados.numeroDoPrimeiroUsuario}.`);
} else {
    console.log(`O(a) usuário(a) ${user2}, digitou o maior número: ${dados.numeroDoPrimeiroUsuario}.`);
}