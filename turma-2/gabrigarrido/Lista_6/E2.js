var rs = require('readline-sync');

var jogadorA = new Array ();
var jogadorB = new Array ();
var valoresdiferentes = new Array ();

var nomeJogadorA = rs.question("Qual é o nome do jogador A?: ");
var nomeJogadorB = rs.question("Qual é nome do jogador B?: ");
var tamanhoDasListas = 5;

for(var i = 0; i < tamanhoDasListas; i++){
    let respostajogadorA = rs.questionInt(`Insira um número de 1 a 10 para o jogador ${nomeJogadorA}:  \n`);
    if(respostajogadorA < 1 || respostajogadorA > 10){
    console.log("Favor inserir um número maior que 1 e menor que 10!!!!");
        i--
    } else{
        jogadorA.push(respostajogadorA);
        
        
    }
}

for(var i = 0; i < tamanhoDasListas; i++){
    respostajogadorB = rs.questionInt(`Insira um número de 1 a 10 para o jogador ${nomeJogadorB}:  \n`);
    if(respostajogadorB < 1 || respostajogadorB > 10){
        console.log("\n Favor inserir um número menor que 1 e maior que 10!!!!");
        i--
    
    } else{
        jogadorB.push(respostajogadorB);
        
    }
}

  
for( var i = 0; i < tamanhoDasListas; i++){
    if(!jogadorB.includes(jogadorA[i])){
        valoresdiferentes.push(jogadorA[i])
     }
   }
 
 
 console.log(jogadorA)
 console.log(jogadorB)
 console.log(`Esses são os número que apenas o jogador ${nomeJogadorA} informou, diferente do jogador ${nomeJogadorB}: ${valoresdiferentes.join(', ')}`)



