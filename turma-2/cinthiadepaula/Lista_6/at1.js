let rs = require('readline-sync');

let jogadorA = rs.question('Insira o nome do jogador 1 ');
let jogadorB = rs.question('Insira o nome do jogador 2 ');


let numJogadorA = [];
let numJogadorB = [];
let respostasIguais = [];

cont=5;


for (i = 0; i < cont; i++) {
  numJogadorA[i] = rs.question(`${jogadorA} digite o ${i} numero `);
  
}


for (i = 0; i < cont; i++) {
  numJogadorB[i] = rs.question(`${jogadorB} digite o ${i} numero `);
  
}

for(i=0; i < cont; i++)
{
let condition = numJogadorB.indexOf(numJogadorA[i]) >-1;
if(condition && respostasIguais.indexOf(numJogadorA[i])<0){
  respostasIguais.push(numJogadorA[i]);
}
}

console.log(respostasIguais);
