let readline = require('readline-sync');

let dia = 1000 * 60 * 60 * 24;
let hoje = new Date();
let nasc = readline.question('Insira a data de seu nascimento: AAAA/MM/DD ');
let dataNasc = new Date(nasc);

function nasDias(hoje, dataNasc){
let hojeMS = hoje.getTime();
let nascimentoMS = dataNasc.getTime();
let calcDif = Math.abs(hojeMS - nascimentoMS);

return Math.round(calcDif / dia);
}

console.log(nasDias(hoje, dataNasc));