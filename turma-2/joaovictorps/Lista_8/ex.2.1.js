let rs = require('readline-sync')
let idade
function calcularData() {
     if (dados.dataNasc.dia > dataHoje.dia) {
         if (dados.dataNasc.mes > dataHoje.mes) {
            idade = (dataHoje.ano - dados.dataNasc.ano) - 1
        } else {
            idade = dataHoje.ano - dados.dataNasc.ano 
        }
    } else {
        idade = dataHoje.ano - dados.dataNasc.ano -1 
    }
     return idade
} 

let dados = {
    nome: rs.question('Nome: \n >'),
    dataNasc: {
        dia: rs.questionInt('Qual dia você nasceu ? \n'),
        mes: rs.questionInt('Qual o mes que você nasceu ? \n'),
        ano: rs.questionInt('Qual o ano que voce nasceu ? \n')
    },
    idade
}

let dataHoje = {
    dia: 09,
    mes: 07,
    ano: 2020
}

idade = calcularData() 

console.log(idade)