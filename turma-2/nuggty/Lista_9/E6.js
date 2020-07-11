let user = require('readline-sync');
let chalk = require('chalk');
let isPrime = require('prime-number');

let numero = user.question('Insira um número: ');

if(isPrime(numero) === true) {

    console.log(chalk.red('O número '+ numero +' é primo.'));
}
else {
    console.log(chalk.blue('O número '+ numero +' não é primo.'));
}