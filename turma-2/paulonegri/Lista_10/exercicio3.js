/*Criar um módulo que calcule a média de uma coleção de números.
Para isso crie um arquivo chamado calcula-media.js.
No módulo exporte uma função media(arr) que recebe como argumento um array de
números.
A função deve iterar por esses números e retornar sua média.
Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
números, utilize o módulo criado para calcular a média e no final imprima o resultado
para o usuário.*/

const rs = require('readline-sync');
let meuModulo = require('./calcula-media');

numeros = [];
numeros.push(rs.questionInt(`Digite um numero: `));
numeros.push(rs.questionInt(`Digite um numero: `));
numeros.push(rs.questionInt(`Digite um numero: `));


console.log(`O valor medio é ${meuModulo.media(numeros)}.`);



