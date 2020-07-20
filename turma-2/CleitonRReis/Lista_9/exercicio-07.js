/*
7 - Crie uma função que receba uma quantidade variável de números e depois some todos eles. Use o rest operator.
*/

function soma(...numeros) {
    let total = 0;
     for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
     }
    return total;
}

let res = soma(1, 7, 7, 1, 6, 7, 7, 8, 9, 10);
console.log(res);