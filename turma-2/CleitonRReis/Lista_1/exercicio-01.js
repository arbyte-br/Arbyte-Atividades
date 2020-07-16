var rs = require('readline-sync');

var anoatual = rs.question('Qual ano atual? ');
var anonascimento = rs.question('Qual seu ano de nascimento? ');

var idade = anoatual - anonascimento

if(idade < 16){
    console.log('Você não pode votar!')

}else if(idade < 18){
    console.log('Você pode votar, mas não é obrigado!')

}else if(idade < 65){
    console.log('Você é obrigado a votar!')

}else if(idade > 65){
    console.log('Você não é obrigado a votar, mas pode tbm!')
}