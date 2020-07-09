let rs = require('readline-sync')

function converterIdadeEmDias(ano) {
    let idade = 2020 - ano
    let anoConvertidoEmDias = idade * 365
    return anoConvertidoEmDias
}
let dia = rs.questionInt('Digite o DIA que você nasceu. \n >')
let mes = rs.questionInt('Digite o MÊS que você nasceu. \n >')
let ano = rs.questionInt('Digite o ANO que você nasceu. \n >')

console.log(converterIdadeEmDias(2000))