var rs = require('readline-sync');

var sexo = rs.question('Qual seu sexo? Masculino ou Feminino? ');
var altura = rs.questionInt('Digite sua altura: ');

if(sexo == 'Masculino'){
    console.log('IMC: ', (72.7 * altura - 48).toFixed(2));
}else if(sexo == 'Feminino'){
    console.log('IMC ', (62.1 * altura - 44.7).toFixed(2));
}else{
    console.log('Dados inconsistentes')
}