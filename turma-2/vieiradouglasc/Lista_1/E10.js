// Faça um programa que receba três notas, calcule e mostre a média aritmética entre
// elas, caso a média aritmética seja:
// Media maior ou igual a 7 imprimir :
// ALUNO APROVADO
// Media menor que 7 imprimir :
// ALUNO REPROVADO

let readlineSync = require('readline-sync');
let nota1 = readlineSync.questionInt('Insira a nota do primeiro bimestre: ');
let nota2 = readlineSync.questionInt('Insira a nota do segundo bimestre: ');
let nota3 = readlineSync.questionInt('Insira a nota do terceiro bimestre: ');
let nota4 = readlineSync.questionInt('Insira a nota do quarto bimestre: ');
let media = (nota1 + nota2 + nota3 + nota4) / 3;

if (media >= 7) {
    console.log('Sua nota geral é: '+ (media).toFixed(2) + ', Parabéns, você está APROVADO.');
} else if ((media >= 4) && (media < 7)) {
    console.log ('Sua nota geral é: '+ (media).toFixed(2) + ', Ainda não, você esta de RECUPERAÇÃO.');
} else {
    console.log('Sua nota geral é: '+ (media).toFixed(2) + ', Que pena, você esta REPROVADO.');
}
