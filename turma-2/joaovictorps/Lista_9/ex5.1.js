//Exercicio 3 lista 8

const carro = {
    cor: 'Prata',
    marca: 'BMW',
    valor: 125000
}

const tabelaEstado = {
    SP: "5%",
    RJ: "7%",
    MG: "3%"
}

console.log({...carro,...tabelaEstado})

//Exercicio 4 lista 8

let rs = require('readline-sync')

let marca1 = rs.question('Qual a marca do carro ? \n >')
let cor1 = rs.question('Qual a cor do carro ? \n >')
let valor1 = rs.questionInt('Qual o valor do carro ? \n >')

let carro1 = {
    marca1,
    cor1,
    valor1
}

const SP = "5% de taxa"

console.log({...carro1,SP})