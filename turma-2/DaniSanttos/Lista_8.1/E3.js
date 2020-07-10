let rs = require('readline-sync')

let usuario1 = {
    nome: null,
    dia: null,
    mes: null,
    ano: null
}

let usuario2 = {
    nome: null,
    dia: null,
    mes: null,
    ano: null
}

usuario1.nome = rs.question('Qual o nome do usuário 1? ')
let dataDeNascimentoU1 = rs.question('Data de nascimento: (DD/MM/AAAA) ')

usuario1.dia = dataDeNascimentoU1.slice(0, 2)
usuario1.mes = dataDeNascimentoU1.slice(3, 5)
usuario1.ano = dataDeNascimentoU1.slice(6)

while(dataDeNascimentoU1.charAt(2) !== '/' || dataDeNascimentoU1.charAt(5) !== '/') {
    console.log('Data informada errada, informe novamente:')
    dataDeNascimentoU1 = rs.question('Data informada errada, informe novamente na seguinte formatação DD/MM/AAAA: ')
}

usuario2.nome = rs.question('Qual o nome do usuário 2? ')
let dataDeNascimentoU2 = rs.question('Data de nascimento: (DD/MM/AAAA) ')
usuario2.dia = dataDeNascimentoU2.slice(0, 2)
usuario2.mes = dataDeNascimentoU2.slice(3, 5)
usuario2.ano = dataDeNascimentoU2.slice(6)

while(dataDeNascimentoU2.charAt(2) !== '/' || dataDeNascimentoU2.charAt(5) !== '/') {
    console.log('Data informada errada, informe novamente:')
    dataDeNascimentoU2 = rs.question('Data informada errada, informe novamente na seguinte formatação DD/MM/AAAA: ')
}

let dataHoje = {
    dia: 09,
    mes: 07,
    ano: 2020
}

let idadeU1 = dataHoje.ano - usuario1.ano
let idadeU2 = dataHoje.ano - usuario2.ano

if (usuario1.dia > dataHoje.dia && usuario1.mes >= dataHoje.mes){
    idadeU1 -= 1
    console.log(`Nome usuário 1: ${usuario1.nome} - Idade: ${idadeU1}`)
}else if (usuario1.mes > dataHoje.mes){
    idadeU1 -= 1
    console.log(`Nome usuário 1: ${usuario1.nome} - Idade: ${idadeU1}`)
}else{
    console.log(`Nome usuário 1: ${usuario1.nome} - Idade: ${idadeU1}`)
}

if (usuario2.dia > dataHoje.dia && usuario2.mes >= dataHoje.mes){
    idadeU2 -= 1
    console.log(`Nome usuário 2: ${usuario2.nome} - Idade: ${idadeU2}`)
}else if (usuario2.mes > dataHoje.mes){
    idadeU2 -= 1
    console.log(`Nome usuário 2: ${usuario2.nome} - Idade: ${idadeU2}`)
}else{
    console.log(`Nome usuário 2: ${usuario2.nome} - Idade: ${idadeU2}`)
}

if(idadeU1 > usuario2){
    console.log(`O usuário ${usuario1.nome} é mais velho.`)
}else{
    console.log(`O usuário ${usuario2.nome} é mais velho.`)
}