let rs = require('readline-sync')

let dados = {
    nome: rs.question('Digite seu nome: \n'),
    dataNasc: { 
        dia: rs.questionInt('Qual dia você nasceu? \n'),
        mes: rs.questionInt('Qual mês você nasceu? \n'),
        ano: rs.questionInt('Qual ano você nasceu? \n')
    }
}

let dataHoje = {
    dia: 09,
    mes: 07,
    ano: 2020,
} 

function calcularData () {
let idade = 0
    
    if (dados.dataNasc.dia > dataHoje.dia) {
        if (dados.dataNasc.mes > dataHoje.mes) {
            idade = dataHoje.ano - dados.dataNasc.ano - 1
        }  else {
            idade = (dataHoje.ano - dados.dataNasc.ano )
        }
    } else {
            idade = (dataHoje.ano - dados.dataNasc.ano - 1)
    }
    return idade
}

let idade = calcularData()

console.log(idade)
