let rs = require('readline-sync')
let nome = rs.question('Digite uma palavra: ')

if (nome.endsWith('al')) {
    console.log(nome);
}
else {
    console.log('Palavra não identificada')
}