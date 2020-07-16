let rs = require('readline-sync')
var ageCalculator = require('age-calculator');

function dataNasc() {
    let usuario = {
        dia: rs.questionInt('Digite o dia que voce nasceu: '),
        mes: rs.questionInt('Digite o mes que voce nasceu: '),
        ano: rs.questionInt('Digite o ano que voce nasceu: ')
    }
    let idade = new ageCalculator.AgeFromDate(new Date(usuario.ano, usuario.mes, usuario.dia)).age
    return idade
}

console.log(dataNasc())


