// Crie um programa que receba uma palavra e exiba quantas
// consoantes e vogais essa palavra tem.
// EX : saúde
// 2 consoantes
// 3 vogais

let rs = require('readline-sync');

let palavra = rs.question('Insira uma palavra: ');
let vogal=0;
let consoante=0;

for (let i = 0; i < palavra.length; i++) 
{
    letra=palavra.charAt(i)
    let x = (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') ? vogal=vogal+1 : consoante=consoante+1;
}
console.log(`A palavra ${palavra} tem ${vogal} vogais e ${consoante} consoantes`)