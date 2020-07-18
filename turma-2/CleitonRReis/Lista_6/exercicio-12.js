/*
12.Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais dessa palavra e 
imprime a palavra novamente porém sem as vogais. EX: Entrada banana algoritmo imprime: Bnn
Utilize o método ​split()​ para quebrar a string e depois montar ela sem vogais.
*/

const rs = require('readline-sync');

let palavra = rs.question('Por favor, informe uma palavra: ').toLocaleLowerCase();

let palavraModificada = palavra.split('');

let vogais = ['a', 'e', 'i', 'o', 'u'];

let consoantes = [];

let novaPalavra = '';

let iguais = '';

for (let i = 0; i < palavraModificada.length; i++) {
    novaPalavra = palavraModificada[i];
    if (vogais.includes(novaPalavra)) {
        iguais += novaPalavra;
    } else {
        consoantes += novaPalavra;
    }
}
console.log(`A palavra sem voagais fica assim: ${consoantes.toUpperCase()}.`);
console.log(`A palavra/nome somente com vogais fica assim: ${iguais.toUpperCase()}.`);