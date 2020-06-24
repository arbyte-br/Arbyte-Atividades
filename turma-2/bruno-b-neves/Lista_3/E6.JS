  // ## Importação da Biblioteca Readline-Sync
let rs = require('readline-sync');

// ## Código JS
let questao = rs.question('Insira uma palavra qualquer: ');

while (true){
    console.log(questao.split('').reverse().join(''));
    break;
}