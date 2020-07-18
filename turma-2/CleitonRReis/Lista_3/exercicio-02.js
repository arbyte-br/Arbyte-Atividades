var rs = require('readline-sync');

var n1 = rs.questionFloat('Insira o primero número: ');
var n2 = rs.questionFloat('Insira o segundo número: ');

var cont = 0;
var resultado = 0;

// while(cont < n2){
//     resultado = resultado + n1;
//     cont++;
// }
// console.log(resultado);

for(cont = 0; cont < n2; cont++){
    resultado = resultado + n1
}

console.log(resultado);