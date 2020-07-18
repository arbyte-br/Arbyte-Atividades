/*
5.Crie um programa que pergunte o nome do usuário e peça para este usuário 
digitar 3 números, o programa deve imprimir, no formato de um objeto, o nome e os números informados.
*/

const rs = require('readline-sync');

let nome = rs.question('Por favor, informe seu nome: ');

let recebeNumeros = [];

for(let i = 0; i < 3; i++){
    let numeros = rs.questionInt(`${nome}, por favor, informe 3 números inteiros: `);
    recebeNumeros.push(numeros);
}

let guardaDados = {
    nome,
    recebeNumeros
}

console.log(guardaDados);