let rs = require('readline-sync');

let palavra = rs.question('Por favor, digte uma palavra: ');

if (palavra.endsWith('al')) {
    console.log(palavra);
} else {
    console.log('Palavra nao identificada!!!');
}