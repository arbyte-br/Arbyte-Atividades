let isPrime = require('prime-number');
let rs = require('readline-sync');
let numero = rs.questionInt("Digite um numero e veja se ele pode ser primo: ");

if (isPrime(numero) === true) {
    console.log(`O número digitado: ${numero} é primo`);
} else {
    console.log(`O número digitado: ${numero} não é primo`);
}