let readline = require('readline-sync');

let numero = readline.questionInt('Insira um numero: ');

function tabuada (numero) {
  for(i = 0; i <= 10; i++){
    var resultado = numero * i
    console.log(i+'x'+numero, '=',resultado )
  }
}
tabuada(numero)