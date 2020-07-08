let rs = require('readline-sync');

let jogador1 = rs.question('Insira o nome do jogador 1? ');
let jogador2 = rs.question('Insira o nome do jogador 2? ')
let array1 = [];
let array2 = [];

for (i = 0; i < 5; i++) {
    let numero = rs.questionInt(`Por favor ${jogador1}, insira um numero: `);
    array1.push(numero);
}

for (i = 0; i < 5; i++) {
    let numero = rs.questionInt(`Por favor ${jogador2}, insira um numero: `);
    array2.push(numero);
}

for (i = 0; i < 5; i++) {
    let elemento = array1[i];
    if (array2.includes(elemento))  {
    }
     else { 
         array2.push(elemento);
     }
}

console.log(`Os números inseridos foram: ${array2.join(',')}`)
