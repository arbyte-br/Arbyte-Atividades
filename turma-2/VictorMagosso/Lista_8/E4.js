let fs = require('fs')
let rs = require('readline-sync')

let pergunta = rs.question('O que você deseja fazer? (Adicionar ou exibir) ').toLowerCase()
let carroJson = fs.readFileSync('carro.json');
let carroObj = JSON.parse(carroJson)
let carro = {}

switch (pergunta){
    case 'adicionar':
    carro = {
      'marca': rs.question('Marca: '),
      'modelo': rs.question('Modelo: '),
      'ano':rs.questionInt('Ano: ')
    }
    carroObj.carros.push(carro) //nesse caso, por nao ter banco de dados, criar o Array dentro do JSON
    let carroJsonCaminho = 'carro.json'
    let carroString = JSON.stringify(carroObj)
    fs.writeFileSync(carroJsonCaminho, carroString)
    break

    case 'exibir':
        console.log(JSON.parse(carroJson))
        break
}