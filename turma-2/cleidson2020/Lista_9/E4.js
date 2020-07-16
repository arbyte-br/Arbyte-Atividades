const isPrime = require('prime-number');

const isOdd = require('is-odd');

let rs = require('readline-sync');

let pergunta = rs.questionInt('Insira um número');

if(isPrime(pergunta) == true){
    console.log('Este Número E Primo');
}else{
    console.log('Este Número Não é Primo');
}

