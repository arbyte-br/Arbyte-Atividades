let user = require('readline-sync');

let player1 = user.question('Nome Jogador 1: \n');
let p1 = [];
let p2 = [];
let resultado = [];

for(let i = 0; i < 5; i++) {
    p1[i] = user.question('Números Player 1 de 1 até 10: \n');
}

let player2 = user.question('Nome jogador 2: \n');

for(let i = 0; i < 5; i++) {
    p2[i] = user.question('Números Player 2 de 1 até 10: \n');
}
for(let i = 0; i < 5; i++) {
    let num = p2.indexOf(p1[i] > +1);
    if(num) {
        resultado = resultado + p1[i];
    }
}
console.log(player1 +' '+ p1);
console.log(player2 +' '+ p2);
console.log(resultado);