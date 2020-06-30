// Faça um programa que receba uma palavra e verifica se a palavra
// está cometendo o seguinte erro de português
// Antes de “p” ou “b” devemos usar M
// Caso a palavra esteja errada informar o erro
// Se não dizer que a palavra está certa.
// Utilize o método includes()

let rs = require('readline-sync');

let palavra=[];
palavra = rs.question('Insira uma palavra: ');
let resultado='';

let verify = palavra.includes('b') || palavra.includes('p');
for (let i = 0; i < palavra.length; i++) 
{
switch (palavra[i]==='b' || palavra[i]==='p') {
    case true:
        resultado = palavra [i-1] ==='m' ? 'Palavra correta' : 'Há erro';
        break;

    default:
        break;
}
}

console.log(resultado);

