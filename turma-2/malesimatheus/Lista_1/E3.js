let rs = require('readline-sync');

let senha = Number(rs.question('Insira sua senha: '));

if (senha == 1234) {
    console.log('ACESSO PERMITIDO')
} else {
    console.log('ACESSO NEGADO')
}