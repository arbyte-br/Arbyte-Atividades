var rs = require('readline-sync');

var num = rs.questionInt('Digite um número: ');
var num2 = rs.questionInt('Digite outro número ')

var i = 0;
var resultado = 1;

while(i < num2){ 
      resultado = resultado * num;
      i++;
}
console.log(resultado);