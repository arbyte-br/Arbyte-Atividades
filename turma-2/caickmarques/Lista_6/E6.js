let rs = require('readline-sync');

let palavra = rs.question('insira uma palavra: ');

if (palavra.endsWith('al')) {
    console.log(`${palavra}`);
} else {
    console.log('palavra não identificada !');
}