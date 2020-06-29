var rs = require('readline-sync');

var numero = rs.questionInt('Por favor insira a senha: ');
var senha = 1234;

if(numero === senha){
    console.log('ACESSO PERMITIDO');
}else{
    console.log('ACESSO NEGADO')
}