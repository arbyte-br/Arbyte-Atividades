let rs = require('readline-sync')

var numero = 0
var texto = "";
while(numero < 3){
    texto = texto + numero
    numero = numero + 1;
}

console.log(texto)