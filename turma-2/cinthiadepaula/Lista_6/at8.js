/* Faça um programa que receba uma palavra e diga se há vogais ou
não.
Utilize o método indexOf()
*/

let rs = require('readline-sync');

let palavra = rs.question("Digite aqui uma palavra: \n");


let procura = palavra.indexOf('a', 'e', 'i', 'o', 'u') !== -1;

if (procura == true)
{
    console.log('contem vogais na palavra');
}

else console.log('nao contem vogais na palavra');


