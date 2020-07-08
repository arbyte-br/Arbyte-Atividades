// Escreva um programa javascript para escrever o seguinte padrão na
// tela, com N linhas:
// *
// * *
// * * *
// * * * *
// * * * * *

let rs = require('readline-sync');
let num = rs.questionInt('Insira um número: ')
let texto = ''

while(num >= 1) {
    texto = texto + '* '
    console.log(texto)
    num--
}
