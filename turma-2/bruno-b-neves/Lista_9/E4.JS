const rs = require('readline-sync');
const primeNumber = require('prime-number');

let numberPrime = rs.questionInt('Digite um numero: ');

if(primeNumber(numberPrime)){
  console.log('É primo');
}else {
  console.log('Não é primo');
}