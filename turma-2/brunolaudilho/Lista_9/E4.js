let readline = require('readline-sync');
let primeNumber = require('prime-number');

let numero = readline.questionFloat('Insira um numero: ');

let ePrimo = (primeNumber(numero));

if(ePrimo == true){
    console.log('Eh Primo!!');
}else{
    console.log('Sorry nao eh primo!');
}
