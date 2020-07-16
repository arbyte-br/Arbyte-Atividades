let rs = require ('readline-sync');

let numero = rs.questionInt('Digite um numero: ')

let total = numero/2;

if(numero%2== 0){
    console.log ('o numero digitado é par')
}
else console.log ('o numero digitado é impar')