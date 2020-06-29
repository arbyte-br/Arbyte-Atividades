var rs = require('readline-sync');

var pergunta = rs.questionInt('Insira um numero: ');
var perguntaA = rs.questionInt('Insira mais um numero: ');
var perguntaB = rs.questionInt('Insira o ultimo numero: ');

if(pergunta < perguntaA && pergunta < perguntaB){
    if(perguntaA < perguntaB){
        console.log(pergunta, perguntaA, perguntaB);
    }else {
        console.log(pergunta, perguntaB, perguntaA);
    }
}