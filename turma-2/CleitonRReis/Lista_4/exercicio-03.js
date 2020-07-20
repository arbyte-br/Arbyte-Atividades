/*
3. Faça um programa que escreva na tela os números pares entre 0 e 50, usando um
comando For. Não utilize nenhum IF/THEN neste programa, apenas o comando For-Do.
*/

var rs = require('readline-sync');

//var n2 = rs.questionInt('Insira o número 50 para ver os números para de 0 a 50: ');

// for (var i = 0; i <= n2; i = i + 2) {
//     console.log(i);

//     while (n2 != 50) {
//         n2 = rs.questionInt('Número inválido! Insira o número 50 para ver os números pares de 0 a 50: ');
//     }
// }

let multiplosDeTres = 15;
let multiplosDeCinco = 15;

console.log(`========== Multiplos de 3 ==========`)

for (var i = 0; i <= 1000; i = i + 3) {
    console.log(i);
}

console.log(`========== Multiplos de 5 ==========`)

for (let j = 0; j <= 1000; j = j + 5){
    console.log(j)     
}