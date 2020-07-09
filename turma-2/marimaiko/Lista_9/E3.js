const rs = require('readline-sync');
const isOdd = require('is-odd');

let number=rs.questionFloat('Informe um número pra saber se é par ou ímpar: ')

if (isOdd(number)===true)
{
    console.log('Seu número é impar');
}
else{    
    console.log('Seu número é par');
}
