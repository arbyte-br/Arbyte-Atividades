let rs = require('readline-sync')
var ageCalculator = require('age-calculator');

function dataNasc() {
    let nome = rs.question('Qual seu nome ?\n ')
    let data = rs.question('Qual sua data de nascimento ? (Ex.: DD/MM/AAA) \n')

    while(!data.includes('/')) {
        console.log('Data inválida, tente novamente.')
        data = rs.question('Qual sua data de nascimento ? (Ex.: DD/MM/AAA) \n')
    }
    data = data.split('/')
    let usuario = {
        nome,
        dataNascimento: {
            dia: data[0],
            mes: data[1],
            ano: data[2]
        }
    }
    let idade = new ageCalculator.AgeFromDate(new Date(usuario.dataNascimento.ano, 
        usuario.dataNascimento.mes, usuario.dataNascimento.dia)).age
    return console.log(`${nome}, você tem ${idade}.`)
}

dataNasc()




