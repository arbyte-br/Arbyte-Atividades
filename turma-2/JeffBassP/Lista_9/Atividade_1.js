let median = require('median');
let rs = require('readline-sync');
let chalk = require('chalk');

let notas = [];


for(let i = 0; i < 4; i++)
{
    notas[i] = rs.questionInt(`Digite a nota ${i+ 1}: `);
}

let media  = median(notas);

console.log(chalk.bgRed(media));

