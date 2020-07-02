let rs = require('readline-sync');

let nome = rs.question('Digite um nome: ');

if (nome.charAt(2)) {
    console.log('A terceira letra do nome digitado é: ' + nome.charAt(2));
} else {
    console.log('Por favor digite um nome que tenha a terceira letra :( ');
}