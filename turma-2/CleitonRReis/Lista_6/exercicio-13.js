/*
13.Faça um algoritmo que verifica se uma string comece com a palavra google
Caso comece imprima que a palavra é valida se não diga que não conhece o serviço.
EX: entrada Google driveO algoritmo imprime: Palavra valida. Utilize o método ​startsWith()
*/

const rs = require('readline-sync');

let servicoGoogle = rs.question('Informe, pelo menos, um serviço da Google: ');

if(servicoGoogle.startsWith('Google')){
    console.log('Palavra válida!');
}else{
    console.log('Serviço desconhecido!');
}