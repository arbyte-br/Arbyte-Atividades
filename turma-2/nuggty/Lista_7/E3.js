let rs = require('readline-sync');
let dia = 1000 * 60 * 60 *24;
let hoje = new Date();
let nascimento = rs.question('Insira sua data de nascimento: AAAA/MM/DD: ');
let dataNascmiento = new Date(nascimento);

function nascDias(hoje, dataNascmiento){
    let hojeMS = hoje.getTime();
    let nascimentoMS = dataNascmiento.getTime();
    let calculaDif = Math.abs(hojeMS - nascimentoMS);

    return Math.round(calculaDif / dia);
}

console.log(nascDias(hoje, dataNascmiento));