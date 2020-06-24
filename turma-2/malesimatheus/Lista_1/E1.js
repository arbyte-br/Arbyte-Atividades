let rs = require('readline-sync');

let anoDeNascimento = Number(rs.question('Insira seu ano de nascimento: '));

if (2020 - anoDeNascimento >= 16) {
    console.log('Você poderá votar esse ano!');
} else {
    console.log('Você não poderá votar esse ano!');
}