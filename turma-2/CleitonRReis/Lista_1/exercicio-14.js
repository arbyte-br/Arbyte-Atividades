var rs = require('readline-sync')

var n1 = 0;
var n2 = 0;
var conta = 0;

var n1 = rs.questionInt('Informe o primeiro número interio: ');
var n2 = rs.questionInt('Informe o segundo número inteiro: ');

var conta = n1 / n2;

if(n1 % 2 == 0){
    console.log(`Você digitou o número: ${n1} e ${n2}.`)
    // console.log(`Como ${n1} é maior que o segundo número: ${n2}, ele é divisivel pelo primeiro: ${n1}.`)
    console.log(`O ${n1} é divisível por ${n2}. E ${n1} dividido por ${n2}, é = : ${conta}.`)
}else{
    console.log(`Você digitou o número: ${n1} e ${n2}, não são divisíveis. Obrigado!`);
}