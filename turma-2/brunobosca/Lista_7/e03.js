let rs = require('readline-sync')

let dia = 1000 * 60 * 60 * 24
let hoje = new Date()
let nascimento = rs.question('Digite a data de seu nascimento AAAA/MM/DD ')
let dataNascimento = new Date(nascimento)

function nascDias (hoje, dataNascimento) {
    let hojeMS = hoje.getTime();
    let nascimentoMS = dataNascimento.getTime();
    let calculaDif = Math.abs(hojeMS - nascimentoMS);

    return Math.round(calculaDif / dia);
}

console.log(nascDias(hoje, dataNascimento));