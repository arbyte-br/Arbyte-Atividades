/* 1. (OBRIGATÓRIO) Faça uma programa que receba 4 notas e calcule a mediana e
apresente ao usuário o resultado.
Utilize o pacote : https://www.npmjs.com/package/median 

let rs = require ('readline-sync')
let md = require ('median')


let u1 = rs.questionInt ('Por favor insira um número: \n')
let u2 = rs.questionInt ('Por favor insira um número: \n')
let u3 = rs.questionInt ('Por favor insira um número: \n')
let u4 = rs.questionInt ('Por favor insira um número: \n')


let numbers = [u1,u2,u3,u4]
let media = md(numbers)

console.log("A nota media é " + media)

=======================================================
const rs = require('readline-sync');

const median = require('median');

let notas = [];

for(let i =1; i<5; i++){
    let question = rs.questionFloat(`informe a nota ${i}: `);
    notas.push(question)
}

let media = median(notas);

console.log(`A média das Notas é: ${media}`);
=======================================================
*/

let rs = require ('readline-sync')
let median = require ('median')
let chalk = require('chalk')


let numbers = []
        for(let i =1; i<5; i++){
            let question = rs.questionFloat (chalk.black.bgWhite.bold(`Por favor insira um numero:  \n`));
            numbers.push(question)
}

let media = median(numbers)

console.log(chalk.red.bold("A nota media é " + media))




