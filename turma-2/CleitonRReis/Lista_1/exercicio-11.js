var rs = require('readline-sync')

var n1 = 0;
var n2 = 0;
var n3 = 0;
var media = 0;

console.log('Quer saber se o aluno foi aprovado? Basta digitar as notas dele abaixo: ');


var n1 = rs.questionFloat('Isira a primera nota: ');
var n2 = rs.questionFloat('Insira a segunda nota: ');
var n3 = rs.questionFloat('Insira a terceira nota:  ');

var media = (n1 + n2 + n3) / 3;

if(media.toFixed(2) >= 7){
    console.log(`O aluno ficou com média: ${media}. Nesse caso ele está aprovado! =D`);
}else{
    console.log(`O aluno ficou média: ${media}. Nesse caso ele está reprovado! =/`);
}