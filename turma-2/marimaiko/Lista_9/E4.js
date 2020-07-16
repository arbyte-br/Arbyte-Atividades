const isPrime = require('prime-number')
const rs = require('readline-sync');

let number=rs.questionFloat('Informe um número pra saber se é primo: ')
 
if (isPrime(number)===true)
{
    console.log('Seu número é primo');
}
else{    
    console.log('Seu número não é primo');
}