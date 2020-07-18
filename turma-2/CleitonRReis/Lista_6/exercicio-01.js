/*
2. (INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
iguais que o jogador A e B colocaram.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3
*/

//const rs = require('readline-sync');

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

//     user1 = rs.questionInt(`Informe pelo menos 5 números. Número: ${i + 1}º: `);
//     vetor1.push(user1)
//     i++;
// }

// console.log(`\n================== JOGADOR 2 ==================\n`);

// while (cont < 5) {
//     user2 = rs.questionInt(`Informe pelo menos 5 números. Número: ${cont + 1}º: `);
//     vetor2.push(user2)
//     cont++;
// }

//vetor1 = [0,2,1] - vetor2 = [3,5,0,1]
//vetor1[0] == vetor2[0]
//vetor[0] == vetor2[1]
//vetor[0] == vetor2[2]



// while (contVetor1 < vetor1.length) {
//     var contVetor2 = 0;
//     while (contVetor2 < vetor2.length) {
//         if (vetor1[contVetor1] == vetor2[contVetor2]) {
//             iguais.push(vetor1[contVetor1]);
//             break;

//         }
//         contVetor2++;
//     }

//     contVetor1++;
// }
// console.log(`\nOs valores iguais são: ${iguais}\n`);

// let rs = require('readline-sync')
// let jogador1 = rs.question('(Jogador 1)Escolha seu nome: ')
// let jogador2 = rs.question('(Jogador 2)Escolha seu nome: ')

const rs = require('readline-sync');

let jogador1 = [];
let jogador2 = [];
let iguais = [];

console.log(`\n================== JOGADOR 1 ==================\n`);

for (let i = 1; i <= 5; i++) {
    let numerosJogador1 = rs.questionInt(`Digite o ${i}º numero: `)
    jogador1.push(numerosJogador1)
}

console.log(`\n================== JOGADOR 2 ==================\n`);

for (let i = 1; i <= 5; i++) {
    let numerosJogador2 = rs.questionInt(`Digite o ${i}º numero: `)
    jogador2.push(numerosJogador2)
}

for (let i = 0; i < jogador1.length; i++) { /* Aqui configurei meu FOR para ele percorrer o primeiro vetor */
    for (let cont = 0; cont < jogador2.length; cont++) { /* Aqui configurei meu segundo FOR para ele percorrer o segundo vetor */
        if (jogador1[i] == jogador2[cont]) { /* Aqui configurei meu IF, ou seja, minha condição. Para comparar se o mesmo que tem no vetor 1 tem no vetor 2*/
            iguais.push(jogador1[i]) /* Aqui, se no IF for encontrado valores ques estão em ambos os vetores, ele aguarda no vetor iguais pelo método push() */
            break; /* Aqui, se encontrado algum valor igual, ele pula para o próximo, sem ter que verificar aquele índice com os demais índices do segundo vetor */
        }
    }
}

console.log(iguais)
console.log(jogador1)
console.log(jogador2)