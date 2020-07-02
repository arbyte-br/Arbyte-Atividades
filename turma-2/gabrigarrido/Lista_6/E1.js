var rs = require('readline-sync');

var jogadorA = new Array ();
var jogadorB = new Array ();
var valoresiguais = new Array ();

var nomeJogadorA = rs.question("Qual é o nome do jogador A?: ");
var nomeJogadorB = rs.question("Qual é nome do jogador B?: ");

for(var i = 0; i < 5; i++){
jogadorA.push(rs.questionInt(`Insira um número de 1 a 10 para o jogador ${nomeJogadorA}:  \n`));
jogadorB.push(rs.questionInt(`Insira um número de 1 a 10 para o jogador ${nomeJogadorB}:  \n`));

}
  
for( var i = 0; i < 5; i++){
   if(jogadorB.includes(jogadorA[i])){
       valoresiguais.push(jogadorA[i])
   }
  
}

console.log(jogadorA)
console.log(jogadorB)
console.log(valoresiguais)