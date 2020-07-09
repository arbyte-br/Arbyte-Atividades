let isOdd = require('is-odd');
let rs = require('readline-sync');
let numero = rs.questionInt('Insira um número para verificar se é par ou ímpar: ')
 
if(isOdd(numero) === true){
    console.log(`O número ${numero} é ímpar`);
} else {
    console.log(`O número ${numero} é par`)
}
