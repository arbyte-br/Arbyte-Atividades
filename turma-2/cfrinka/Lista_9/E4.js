let isPrime = require('prime-number');
let rs = require('readline-sync');
let numero = rs.questionInt("Insira um número para verificar se é primo: ");
 
if (isPrime(numero) === true){
    console.log(`O número ${numero} é primo`);
}else {
console.log(`O número ${numero} não é primo`);
}
