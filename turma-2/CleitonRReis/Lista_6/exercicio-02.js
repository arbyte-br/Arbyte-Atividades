/*
3. (LEFT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça
5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador A colocou diferente do B.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime: 4,5.
*/

/* Aqui iniciam-se as tentativas de resoluçao */

// const rs = require('readline-sync');

// var user1 = 0;

// var user2 = 0;

// var i = 0;

// var cont = 0;

// var vetor1 = [];

// var vetor2 = [];

// var cont1 = 0;

// var diferentes = [];

// while(i < 3){
//      user1 = rs.questionInt(`Informe 3 número entre 1 e 10: `);
//      vetor1.push(user1);
//      i++;
// }

// while(cont < 3){
//     user2 = rs.questionInt(`Informe 3 números entre 1 e 10: `);
//     vetor2.push(user2);
//     cont++;
// }

// var iguais = [];


// while(cont1 < vetor1.length){
//     var cont2 = 0;
//     while(cont2 < vetor2.length){
//         if(vetor1[cont1] == vetor2[cont2]){
//             iguais.push(vetor1[cont1]);
//             break;

//         }else{
//             diferentes.push(vetor1[cont1]);
//         }
//         cont2++;
//     }
//     cont1++;
// }
// console.log(iguais);
// console.log(diferentes);

// const rs = require('readline-sync');

// var user1 = 0;

// var user2 = 0;

// var i = 0;

// var cont = 0;

// var vetor1 = [];

// var vetor2 = [];

// var contVetor1 = 0;

// var iguais = [];

// console.log(`\n================== JOGADOR 1 ==================\n`);

// while (i < 5) {

//     user1 = rs.questionInt(`Informe pelo menos 5 números. Número: ${i + 1}: `);
//     vetor1.push(user1)
//     i++;
// }

// console.log(`\n================== JOGADOR 2 ==================\n`);

// while (cont < 5) {
//     user2 = rs.questionInt(`Informe pelo menos 5 números. Número: ${cont + 1}: `);
//     vetor2.push(user2)
//     cont++;
// }

// //vetor1 = [0,2,1] - vetor2 = [3,5,0,1]
// //vetor1[0] == vetor2[0]
// //vetor[0] == vetor2[1]
// //vetor[0] == vetor2[2]

// var diferentes = [];

// while (contVetor1 < vetor1.length) {
//     var contVetor2 = 0;
//     while (contVetor2 < vetor2.length) {
//         if (vetor1[contVetor1] != vetor2[contVetor2]) {
//             diferentes.push(vetor1[contVetor2]);
//             break;

//         }
//         contVetor2++;
//     }

//     contVetor1++;
// }
// console.log(`\nOs valores iguais são: ${diferentes}\n`);


// const rs = require('readline-sync');

// var vetor1 = [];

// var vetor2 = [];

// var user1 = 0;

// var user2 = 0;

// var i = 0;

// var cont = 0;

// var diferentes = [];

// console.log(`\n================== JOGADOR 1 ==================\n`);

// while(i < 5){
//     user1 = rs.questionInt(`Informe pelo menos 5 números. Número: ${i + 1}: `);
//     vetor1.push(user1);
//     i++;
// }


// console.log(`\n================== JOGADOR 2 ==================\n`);

// while(cont < 5){
//     user2 = rs.questionInt(`Informe pelo menos 5 números. Número: ${cont + 1}: `);
//     vetor2.push(user2);
//     cont++;
// }

// var contVetor1 = 0;

// var iguais = [];



// while(contVetor1 < vetor1.length){
//     var contVetor2 = 0;
//       while(contVetor2 < vetor2.length){
//       if(vetor1[contVetor1] != vetor2[contVetor2]){
//          iguais.push(vetor1[contVetor1])
//       }
      
//       contVetor2++;
//  }

//     contVetor1++;
// }

// console.log(iguais);
// console.log(diferentes);
// console.log(vetor1);
// console.log(vetor2);

/* Resolvido o exercício */

const rs = require('readline-sync');

var jog1 = [];

var jog2 = [];

var diferentes = [];

console.log(`\n================== JOGADOR 1 ==================\n`);

for(var i = 0; i <= 4; i++){
    var numeros = rs.questionInt(`Insira um número entre 0 a 10: `);
    jog1.push(numeros);
}

console.log(`\n================== JOGADOR 2 ==================\n`);

for(var i = 0; i <= 4; i++){
    var numeros = rs.questionInt(`Insira um número entre 0 a 10: `);
    jog2.push(numeros);
}

for(var i = 0; i < jog1.length; i++){
    var n1 = jog1[i];
    if(jog2.includes(n1)){
        var iguais = n1;
    }else{
        diferentes.push(n1);
    }
}

console.log(typeof diferentes);