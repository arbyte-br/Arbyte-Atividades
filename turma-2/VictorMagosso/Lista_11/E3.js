let {AgeFromDate, AgeFromDateString} = require('age-calculator')
let {question, questionInt} = require('readline-sync')

const dadosUsuario = (nome, dia, mes, ano) => 
console.log(`Ola ${nome}! Vejo que possui ${new AgeFromDate(new Date(ano, mes+1, dia)).age} anos -> Data de nascimento: ${dia}/${mes}/${ano}`)

        dadosUsuario(question('Digite seu nome: '),
        questionInt('Dia de nascimento: '),
        questionInt('Mes: '),
        questionInt('Ano: '))

let resposta = question('Os dados estao corretos? ').toUpperCase()
while (resposta != "SIM"){
console.log('===========')
    dadosUsuario(question('Digite seu nome: '),
        questionInt('Dia de nascimento: '),
        questionInt('Mes: '),
        questionInt('Ano: '))

resposta = question('Os dados estao corretos? ').toUpperCase()

}

//salva os dados num banco imaginario
console.log('Dados salvos com sucesso!')        