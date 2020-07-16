/*Faça um algoritmo que receba a data nascimento de uma pessoa e
calcule sua idade.*/

const rs = require(`readline-sync`)

const{AgeFromDateString} = require('age-calculator');
const ano = rs.question(`Em que ano voce nasceu? `)
const mes = rs.question(`Em que mes voce nasceu? `)
const dia = rs.question(`Em que dia voce nasceu? `)

const idade = new AgeFromDateString(new Date(`${ano},${mes},${dia}`)).age;
console.log("Valor da sua idade", idade);
