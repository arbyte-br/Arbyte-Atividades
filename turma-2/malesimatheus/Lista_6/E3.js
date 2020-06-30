let rs = require('readline-sync');

let jogA = [];
let jogB = [];
let i = 0;

for(i; jogA.length < 5; i ++) {
    let num = Number(rs.question('Insira um número de 1 a 10 para o Jogador A: '));
    (num >= 1 && num <= 10) ? jogA.push(num) : console.log('Valor Invalido!');
}

for(i; jogB.length < 5; i ++) {
    let num = Number(rs.question('Insira um número de 1 a 10 para o Jogador B: '));
    (num >= 1 && num <= 10) ? jogB.push(num) : console.log('Valor Invalido!');
}

let unicos = [];

for(i = 1; i <= 10; i ++) {
    if(jogA.indexOf(i) != -1) {
        unicos.push(i);
    } else if (jogB.indexOf(i) != -1) {
        unicos.push(i);
    }
}

console.log(unicos);