/*
4. (RIGHT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador B colocou diferente do A.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
8,7
*/

const rs = require('readline-sync');

var jog1 = [];

var jog2 = [];

var diferentes = [];

console.log(`\n================== JOGADOR 1 ==================\n`);

for(var i = 0; i <= 4; i++){
    var numeros = rs.questionInt(`Insira um número entre 0 a 10: `);
    jog1.push(numeros);
}

console.log(`\n================== JOGADOR 1 ==================\n`);

for(var i = 0; i <= 4; i++){
    var numeros = rs.questionInt(`Insira um número entre 0 a 10: `);
    jog2.push(numeros);
}

for(var i = 0; i < jog2.length; i++){
    var n2 = jog2[i];
    if(jog1.includes(n2)){
        var iguais = n2;
    }else{
        diferentes.push(n2);
    }
}
console.log(diferentes);