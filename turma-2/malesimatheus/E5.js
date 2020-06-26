let rs = require('readline-sync');

let nome = rs.question('Insira um nome: ');

if (nome.charAt(2)) {
console.log('A terceira letra é ' + nome.charAt(2));
} else {
    console.log('Não tem a terceira letra');
}