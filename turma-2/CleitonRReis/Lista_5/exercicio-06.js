/*
6. Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na
tela (EX.: “O nome digitado foi: Robson”.). O programa deve ser interrompido quando o
usuário digitar o nome “Final”. No final, o programa deve imprimir o número de usuários
que foram cadastrados no total.
*/

var rs = require('readline-sync');

var total = 0;

var nome = '';
var idade;

while (nome != 'Final') {

    nome = rs.question('Insira qualquer nome. Quando quiser parar, digite "Final": ');
    if (nome != 'Final') {
        idade = rs.questionInt('Digite a idade da pessoa acima: ');
        total++;
    }
}
console.log(total);