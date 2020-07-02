let rs = require('readline-sync');

let player1 = rs.question('Player 1 - Qual é o seu nome? ');
let player2 = rs.question('Player 2 - Qual é o seu nome? ');
let p1 = new Array();
let p2 = new Array();
let result = new Array();
let i = 0;

for (i; i < 5; i++) {
    p1[i] = rs.question(`${player1} Digite um numero: `);
}

for (i = 0; i < 5; i++) {
    p2[i] = rs.question(`${player2} Digite um numero: `);
}

for(i = 0; i < 10; i++)
{
    let num = p2.indexOf(p1[i]) >= -1;
    if(num)
    {
        result = `${result}${p1[i]}`;
    }
    
}

console.log(`${p1}  ${player1}`);
console.log(`${p2}  ${player2}`);
console.log(`${result}`);