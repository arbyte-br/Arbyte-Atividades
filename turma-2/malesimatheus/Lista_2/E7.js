let rs = require('readline-sync');

let senha = rs.question('Insira sua senha: ');

if (senha === 'batatafrita') {
    console.log('ACESSO PERMITIDO');
} else {
    console.log('Voce nao tem acesso ao sistema');
}