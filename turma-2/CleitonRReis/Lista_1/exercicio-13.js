var rs = require('readline-sync')

var n1 = 0;
var n2 = 0;
var conta1 = 0;
var conta2 = 0;

console.log('Informe um número positivio para saber seu dobro e um negativo para saber seu triplo!')

var n1 = rs.questionFloat('Informe um número positivo ou negativo: ');

var conta1 = 2 * n1;
var conta2 = 3 * n1;

if(n1 < 0){
    console.log(`Você digitou o número negativo: ${n1}.`);
    console.log(`Seu triplo é: ${conta2}.`);
}else{
    console.log(`Você digitou um número positivo: ${n1}.`);
    console.log(`O dobro dele é: ${conta1}.`)
}