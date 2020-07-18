/*
6. Peça ao usuário para digitar dez valores numéricos e ordene por ordem crescente
esses valores, guardando-os num vetor e depois exibindo para o usuário.Para esta
atividade tente usar o algoritmo Bubble Sort (Método da bolha), pesquise sobre ele na
internet.
*/

const rs = require('readline-sync');

var guardaNumeros = [];

console.log('\n')

for (let i = 0; i <= 9; i++) {
    let numeros = rs.questionInt('Por favor, informe, pelo menos, 10 valores de 0 a 10 em ordem aleatória: ');
    guardaNumeros.push(numeros);
}

for (let ultimo = guardaNumeros.length - 1; ultimo > 0; ultimo--) {
    let maiorIndice = 0;
    for (let j = 0; j <= ultimo; j++) {
        if (guardaNumeros[maiorIndice] < guardaNumeros[j]) {
            maiorIndice = j;
        }
    }
    let temporaria = guardaNumeros[ultimo];
    guardaNumeros[ultimo] = guardaNumeros[maiorIndice];
    guardaNumeros[maiorIndice] = temporaria;
}

console.log('\n')

console.log(`Números ordenados: ${guardaNumeros.join()}.`);

console.log('\n')