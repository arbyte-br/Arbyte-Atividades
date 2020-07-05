/*Faça um programa que receba três notas, calcule e mostre a média aritmética entre
elas, caso a média aritmética seja:
Media maior ou igual a 7 imprimir : ALUNO APROVADO
Media menor que 7 imprimir : ALUNO REPROVADO*/

let rs = require('readline-sync')
let primeiraNota = rs.questionFloat('Digite sua primeira nota> ')
let segundaNota = rs.questionFloat('Digite sua segunda nota> ')
let terceiraNota = rs.questionFloat('Digite sua terceira nota> ')

let media = (primeiraNota + segundaNota +terceiraNota)/3

media >= 7 ? console.log(`ALUNO APROVADO!`) : console.log(`ALUNO REPROVADO!`)