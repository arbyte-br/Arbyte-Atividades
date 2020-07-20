const rs = require('readline-sync')

const ano = rs.questionInt('Informe o ano em que nasceu: ')
const mes = rs.questionInt('Informe o mês (em numero) que nasceu: ')
const dia = rs.questionInt('Informe o dia em que nasceu: ')

function idade() {
    let anos = (2020 - ano) * 365
    let meses = mes * 30
    let total = anos + meses + dia
    return total
}

console.log(idade())


