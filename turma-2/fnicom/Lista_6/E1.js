let rs = require('readline-sync');
let jogadorA = rs.question('insira o nome do jogador 1: ');
let jogadorB = rs.question('Insira o nome do jogador 2: ');
let jogadorARespostas = [];
let jogadorBRespostas = [];
let respostasIguais = [];
let contadorPerguntas = 0;
for(contadorPerguntas; contadorPerguntas < 10; contadorPerguntas ++) {
    if(contadorPerguntas === 0) {
        console.log(`É a vez do ${jogadorA}`);
    }
    if(contadorPerguntas === 5) {
        console.log(`É a vez do ${jogadorB}`);
    }
    let pergunta = rs.questionInt('Insira um numero: ');
    if(contadorPerguntas <= 4) {
        jogadorARespostas.push(pergunta)
    }
    if(contadorPerguntas > 4) {
        jogadorBRespostas.push(pergunta)
    }
}
for(let contador = 0; contador < 5; contador ++) {
    let condition = jogadorBRespostas.indexOf(jogadorARespostas[contador]) > -1;
    if(condition) {
        respostasIguais.push(jogadorARespostas[contador]);
    }
}
console.log(respostasIguais);