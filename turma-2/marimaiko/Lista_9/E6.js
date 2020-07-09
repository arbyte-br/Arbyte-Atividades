const chalk = require('chalk');
const log = console.log;

let rs = require('readline-sync');
let median = require('median');

let arr = [];

for (let i = 1; i < 5; i++) {
    let nota = rs.questionFloat(`Insira sua nota ${i}: `);
    arr.push(nota);
}

let value = median(arr)
 
if (value<7)
{
    log(chalk.rgb(221, 64, 58).underline(`O valor da sua média é: ${value}. Tá ruim, hein...`));
}
else{
    log(chalk.rgb(77, 139, 49).underline(`O valor da sua média é: ${value}. Tá ótimo! Parabéns`));

}
