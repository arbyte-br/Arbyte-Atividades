const fs = require('fs')
const rs = require('readline-sync')

let pergunta = rs.question('Voce deseja escrever ou ler o arquivo carro.json? (Digite "ler" ou "escrever": ')

if (pergunta == 'escrever') {
    let carro = {}

    carro.cor = rs.question('Informe a cor do carro: ');
    carro.modelo = rs.question('Informe o modelo do carro: ');
    carro.marca = rs.question('Informe a marca do carro: ');

    let json = 'carro.json'

    let converterJson = JSON.stringify(carro)
    fs.writeFileSync(json, converterJson)
    console.log ('Alteracoes salvas com sucesso!')
} else if (pergunta == 'ler') {
    const json = fs.readFileSync('carro.json')

    const carro = JSON.parse(json)

    console.clear ()
    console.log(carro)
} else {
    console.log ('Utilize apenas os comandos "ler" ou "escrever"')
}