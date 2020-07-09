let rs = require('readline-sync');
let isPrime = require('prime-number');

let numero = rs.question('Digite um Numero: ');

if(isPrime(numero)){
    console.log('Eh primo!!');

}
else
{
    console.log('Nao eh primo!!');
}