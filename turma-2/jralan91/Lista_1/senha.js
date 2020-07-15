let rs = require('readline-sync');

let senha =rs.questionInt('Digite sua senha: \n');

if (senha === 1234){
    console.log('Acesso permitido.')
}
else {
    console.log('Acesso negado.')
}