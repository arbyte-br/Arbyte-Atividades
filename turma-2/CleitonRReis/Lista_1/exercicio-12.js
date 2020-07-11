var rs = require('readline-sync')

var nome = 0;
var sexo = 0;
var ec = 0;
var anos = 0;

var nome = rs.question('Por favor, informe seu nome: ');
var sexo = rs.question('Informe seu sexo (f = Feminino / m = Masculino): ');
var ec = rs.question('Informe seu estado civil(casodo(a), solteiro(a), viúvo(a), etc..): ');

if(sexo == 'f' && ec == 'casada'){
    var anos = rs.questionInt('Informe há quanto tempo está casada: ');
    console.log(`Parabéns, você está casado há: ${anos} anos. `);
}else{
    console.log('Obrigado! Abs!')
}