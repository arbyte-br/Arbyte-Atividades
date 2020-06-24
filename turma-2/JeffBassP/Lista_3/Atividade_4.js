let rs = require('readline-sync');

let numero = rs.questionInt('Digite um numero ');
let i = 0;
console.log('Numeros pares ate ' + numero);

while(i <= numero)
{
    console.log(i);
    i += 2;

}