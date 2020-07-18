/*
3. (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
tela, com N linhas:
*
* *
* * *
* * * *
* * * * *
Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).
*/

let rs = require('readline-sync');

let caracterCoringa = rs.question('Insira qualquer número: ');

let i = 0;

let caracter = '*';

while (i <= caracterCoringa) {
    console.log(caracter);
    caracter = caracter + '*'
    i++;
}