// (OBRIGATÓRIO) Crie um programa que:
// a. Peça o nome de 2 usuários;
// b. Para cada usuário, peça 1 número;
// c. Imprima na tela qual usuário digitou o maior número.
// d. Pare a execução.
// Neste exercício, cada usuário deve ser representado por um objeto. O nome e o número
// do usuário devem ser propriedades deste objeto.

let rs = require('readline-sync')

let x = {}
x ['nomeUsuario1'] = rs.question('Usuario 1 informe seu nome:\n');
x ['nomeUsuario2'] = rs.question('Usuario 2 informe seu nome:\n');
x ['valor1'] = rs.questionInt('Usuario 1 informe um numero:\n');
x ['valor2'] = rs.questionInt('Usuario 2 informe outro numero:\n');

if ( x ['valor1'] > x ['valor2']){
    console.log(`O número do usuário ${x['nomeUsuario1']} é o maior.`);
} 
else {
    console.log(`O número do usuário ${x['nomeUsuario2']} é o maior.`);
}
