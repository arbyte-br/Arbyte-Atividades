/*
7. Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
palavra tem.
EX : saúde
2 consoantes
3 vogais
*/

const rs = require('readline-sync');

let palavra = rs.question('Por favor, insira uma palavra ou frase para saber quantas vogais e consoantes há nela: ');

var vogais = ['a', 'e', 'i', 'o', 'u'];

var numeroDeVogais = 0;
var numeroDeConsoantes = 0;

for(let i = 0; i < palavra.length; i++){
    letra = palavra[i];
    if(vogais.includes(letra)){
       numeroDeVogais = numeroDeVogais + letra.length;
    }else if(letra.includes(' ')){
       letra = 0 - 1; 
    }else{
      numeroDeConsoantes = numeroDeConsoantes + letra.length;
    }
}
console.log(`Tamanho total da palavra/frase (inclui espaços): ${palavra.length}.`)
console.log(`Existem ${numeroDeVogais} vogais nessa palavra.`);
console.log(`Existem ${numeroDeConsoantes} consoantes nessa palavra.`);