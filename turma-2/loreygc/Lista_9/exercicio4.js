let rs= rs.require('readline-sync');
let primeNumber = require('prime-number');

let numero = rs.questionFloat('Insira um numero: ');

let ePrimo = (primeNumber(numero));

if(ePrimo == true){
    console.log('Esse é primo!');
}else{
    console.log('Pô querido, não é primo e você sabe!');
}