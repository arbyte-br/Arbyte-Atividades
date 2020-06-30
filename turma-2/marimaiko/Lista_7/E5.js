// Escreva uma função que recebe dois parâmetros numéricos e retorne
// o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função.
// Escreva o resultado da função na tela dizendo qual menor número.

let rs = require('readline-sync');

function compare(n1,n2) 
{
    return n1>n2;
}

let number1 = rs.questionInt('Digite um numero: ');
let number2 = rs.questionInt('Digite outro numero: ');
if (compare(number1,number2))
{
    console.log('O primeiro numero eh maior')
}
else{console.log('O segundo numero eh maior');}

