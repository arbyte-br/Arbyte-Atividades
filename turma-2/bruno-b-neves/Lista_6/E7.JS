let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra: ');

if (palavra.includes('np')) {
    console.log('Palavra incorreta!!!');
} else if (palavra.includes('nb')) {
    console.log('Palavra incorreta!!!');
} else {
    console.log('Palavra escrita corretamente!!');
}