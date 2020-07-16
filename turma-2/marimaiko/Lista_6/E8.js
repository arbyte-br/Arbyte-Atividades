// Faça um programa que receba uma palavra e diga se há vogais ou
// não.
// Utilize o método indexOf()

let rs = require('readline-sync');

let palavra = rs.question('Insira uma palavra: ');
let vogais =['a','e','i','o','u'];
let result='';
for (let x = 0; x < vogais.length; x++) 
{
    let compare = palavra.indexOf(vogais[x]);
    console.log(compare);
    console.log(vogais[x]);
    if (compare>0) 
    {
        result='Há vogal'
        break;
    }
    else {result='Sem vogal'}
}           
console.log(result);