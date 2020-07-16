let rs = require('readline-sync');

let numero = rs.questionInt('Digite um numero: \n');

if (numero%2 == 0){
    console.log('Esse número é par. ')
}
else {
    console.log('Esse número é ímpar.')
}