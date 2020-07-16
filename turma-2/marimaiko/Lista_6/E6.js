// Faça um programa que receba uma palavra e verifica se ela termina
// com “al” então imprime a palavra se não imprime “palavra não
// identificada”.
// Utilize o método endsWith()

let rs = require('readline-sync');

let palavra = rs.question('Insira uma palavra: ');
let end=palavra.endsWith('al');
switch (end) 
{
    case true:
        console.log(` ${palavra}`);
        break;

    default:
        console.log(` palavra não identificada`);

        break;
}

