let rs = require('readline-sync')
let idade

let dataHoje = {
    dia: 09,
    mes: 07,
    ano: 2020
}

let dadosUsuario = {
    nome: rs.question('Nome: \n >'),
    dataNasc: {
        dia: rs.questionInt('Qual dia você nasceu ? \n'),
        mes: rs.questionInt('Qual o mes que você nasceu ? \n'),
        ano: rs.questionInt('Qual o ano que voce nasceu ? \n')
    },
    idade: 0
}
function calcularData() {
    if (dadosUsuario.dataNasc.dia > dataHoje.dia) {
        if (dadosUsuario.dataNasc.mes > dataHoje.mes) {
            idade = dataHoje.ano - dadosUsuario.dataNasc.ano - 1
        } else {
            idade = dataHoje.ano - dadosUsuario.dataNasc.ano 
        }
    } else {
        idade = dataHoje.ano - dadosUsuario.dataNasc.ano -1 
    }
    return idade
} 
function calcularData1() {
    if (dadosUsuario1.dataNasc.dia > dataHoje.dia) {
        if (dadosUsuario1.dataNasc.mes > dataHoje.mes) {
            idade = dataHoje.ano - dadosUsuario1.dataNasc.ano - 1
        } else {
            idade = dataHoje.ano - dadosUsuario1.dataNasc.ano 
        }
    } else {
        idade = dataHoje.ano - dadosUsuario1.dataNasc.ano -1 
    }
    return idade
} 
dadosUsuario.idade = calcularData()
let dadosUsuario1 = {
    nome: rs.question('Nome: \n >'),
    dataNasc: {
        dia: rs.questionInt('Qual dia você nasceu ? \n'),
        mes: rs.questionInt('Qual o mes que você nasceu ? \n'),
        ano: rs.questionInt('Qual o ano que voce nasceu ? \n')
    },
    idade: 0
}

dadosUsuario1.idade = calcularData1(2)

console.log(dadosUsuario.idade > dadosUsuario1.idade 
    ? `${dadosUsuario.nome} é mais velho que ${dadosUsuario1.nome}` 
    :`${dadosUsuario1.nome} é mais velho que ${dadosUsuario.nome}` )