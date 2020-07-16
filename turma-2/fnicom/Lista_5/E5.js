let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('Digite um numero para verificar seu fatorial: ');
let i = numero;
let fatorial = 1;

for(i = numero; i > 0; i--){
fatorial = fatorial*i;
}
console.log(`O fatorial de ${numero} é ${fatorial}.`);