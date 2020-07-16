let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra: ');

let verificaPB = palavra.toLocaleLowerCase().includes('p', 'b');
let verificaM = palavra.includes('m', verificaPB);

if (verificaM) {
    console.log('Palavra corretamente escrita');
} else {
    console.log('A palavra contem erros de portugues');
}