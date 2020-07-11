var rs = require('readline-sync')

var pergunta;
var base = 0;
var altura = 0;
var area = 0;
 
var pergunta = rs.questionFloat('Qual o número de lados do seu poligono? R: ')

var area = base * altura / 2;

if(pergunta == 3){
    console.log('Esse poligono é um triângulo.');
    console.log('Informe alguns dados para saber a área do mesmo!');
    var base = rs.questionFloat('Base: ');
    var altura = rs.questionFloat('Altura: ');
    console.log ('A área dele é: '  + base * altura);
}else if(pergunta == 4){
    console.log('Esse poligono é um quadrado.')
    console.log('Informe alguns dados para saber a área do mesmo!');
    var base = rs.questionFloat('Base: ');
    var altura = rs.questionFloat('Altura: ');
    console.log('A área do seu quadrado é: ' + base * altura);
}else{
    console.log('Seu poligono é um pentagono.')
}