// Faça um programa que receba três notas, calcule e mostre a média aritmética entre
// elas, caso a média aritmética seja:
// Media maior ou igual a 7 imprimir :
// ALUNO APROVADO
// Media menor que 7 imprimir :
// ALUNO REPROVADO

let nota1 = 9 
let nota2 = 5
let nota3 = 10

let media = (nota1 + nota2 + nota3) / 3

if(media >= 7){
    console.log('ALUNO APROVADO, sua média foi ' + media)
}else {
    console.log('ALUNO REPROVADO, sua média foi ' + media)
}