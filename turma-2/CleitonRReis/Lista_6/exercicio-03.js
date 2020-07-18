/*
5. (FULL JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça
5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador A e B colocou sem repetir nenhum número
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3,4,5,7,8
*/

const rs = require('readline-sync');

var jogador1 = [];

var jogador2 = [];

console.log(`\n================== JOGADOR 1 ==================\n`);

for (var i = 0; i <= 4; i++) {
    var numeros = rs.questionInt(`Informe 5 número entre 0 e 10: `);
    jogador1.push(numeros);
}

console.log(`\n================== JOGADOR 1 ==================\n`);

for (var i = 0; i <= 4; i++) {
    var numeros = rs.questionInt(`Informe 5 número entre 0 e 10: `);
    jogador2.push(numeros);
}

// valores.push(jogador1, jogador2);

// var n1 = jogador1[i];
// var n2 = jogador2[i];

// var iguais = 0;

var unicArray = jogador2;


for (var i = 0; i < jogador1.length; i++) {
    if (!unicArray.includes(jogador1[i])) {
        unicArray.push(jogador1[i]);
    }
}

// for (var i = 0; i < jogador1.length; i++) {
//     for(var cont = 0; cont < jogador2.length; cont++) {
//         if(jogador1[i] != jogador2[cont]) {
//             unicArray.push(jogador1[i]);
//         }
//     }

// }


unicArray.sort();
console.log(unicArray);

// for (i = 0; i < jogador1.length; i++) {
//     //  var n1 = 0;
//     //  var n2 = 0;
//     for (i = 0; i < jogador2.length; i++) {
//         var n1 = jogador1[i]
//         var n2 = jogador2[i]
//         if (jogador1.includes(n2)) {
//             iguais = n2;//, //n2;

//         } else {
//             unicos.push(n1, n2);
//         }
//     }
// }
// //console.log(jogador1);
// //console.log(jogador2);
// unicos.sort();
// console.log(unicos);
//     // console.log(vetor);
//     // console.log(iguais);