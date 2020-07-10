let user = require('readline-sync');
let isPrime = require('prime-number');

let numero = user.question('Insira um número: ');

if(isPrime(numero) === true) {

    console.log('O número '+ numero +' é primo.');
}
else {
    console.log('O número '+ numero +' não é primo.')
}