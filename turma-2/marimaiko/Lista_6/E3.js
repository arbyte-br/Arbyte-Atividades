// Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador A e B colocou sem repetir nenhum número
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3,4,5,7,8

let rs = require('readline-sync');

let nome1 = rs.question('Insira seu nome: ');
let nome2;
let array2 = [];
let array1 = [];
let result = [];

for (let index = 0; index < 5; index++) 
{
    let n1 = rs.questionInt('Insira um números de 1 ao 10: ');
    array1.push(n1);
}

nome2 = rs.question('Insira seu nome: ');

for (let i = 0; i < 5; i++) 
{
    n2 = rs.questionInt('Insira um números de 1 ao 10: ');
    array2.push(n2);
}

for (let x = 0; x < 5; x++) 
{
    if(!result.includes(array1[x])) result.push(array1[x]);
    if(!result.includes(array2[x])) result.push(array2[x]);
}           

console.log(`Os números são: ${result}`);

