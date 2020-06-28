let rs = require('readline-sync');

let password = rs.questionInt('Insira a senha:');

if (password == 1234){
    console.log('Acesso permitido');
}else{
    console.log('Acesso negado');
}