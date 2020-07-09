let rs = require('readline-sync');
let player1 = rs.question('Player 1 - Qual é o seu nome? ');
let player2 = rs.question('Player 2 - Qual é o seu nome? ');
let p1 = [];
let p2 = [];
let resultado = [];
for (let i = 0; i < 5; i++) {
    p1[i] = rs.question(player1 +' Digite um número: ');
}
for (let i = 0; i < 5; i++) {
    p2[i] = rs.question(player2 +' Digite um número: ');
}
// Ate aqui funciona
for(let i = 0; i < 5; i++)
{
    let num = p1.indexOf(p2[i]) >= 0;
    if(num)
    {
        resultado = resultado + p2[i];
    }
    
}
console.log(p1 +' '+ player1);
console.log(p1 +' '+ player2);
console.log(resultado.join(','));