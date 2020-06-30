var rs = require('readline-sync');

var numero1 = 1
var numero2 = 1000;
var resultado  = 0;

while(numero1 <= numero2){
    if(numero1 % 3 == 0 || numero1 % 5 == 0){
        resultado = resultado + numero1;
    }
    numero1++;
}
console.log(resultado);