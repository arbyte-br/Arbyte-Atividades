let rs = require('readline-sync')

let usuario = {
    nome: null,
    dia: null,
    mes: null,
    ano: null
}

usuario.nome = rs.question('Qual o seu nome? ')
let dataDeNascimento = rs.question('Data de nascimento: (DD/MM/AAAA) ')

while(dataDeNascimento.charAt(2) !== '/' || dataDeNascimento.charAt(5) !== '/') {
    console.log('Data informada errada, informe novamente:')
    dataDeNascimento = rs.question('Data informada errada, informe novamente na seguinte formatação DD/MM/AAAA: ')
}

usuario.dia = dataDeNascimento.slice(0, 2)
usuario.mes = dataDeNascimento.slice(3, 5)
usuario.ano = dataDeNascimento.slice(6)


let dataHoje = {
    dia: 09,
    mes: 07,
    ano: 2020
}

let idade = dataHoje.ano - usuario.ano

if (usuario.dia > dataHoje.dia && usuario.mes >= dataHoje.mes){
    idade -= 1
    console.log(`Nome: ${usuario.nome} - Idade: ${idade}`)
}else if (usuario.mes > dataHoje.mes){
    idade -= 1
    console.log(`Nome: ${usuario.nome} - Idade: ${idade}`)
}else{
    console.log(`Nome: ${usuario.nome} - Idade: ${idade}`)
}