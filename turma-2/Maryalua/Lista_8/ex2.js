//Adicione no programa anterior, após a impressão dos dados, a
//funcionalidade de salvar o objeto carro em formato JSON.
//Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
//métodos da biblioteca ‘fs’ para salvar o arquivo.
//Salve o json como ‘carro.json’

let fileSystem = require('fs');
let rs = require('readline-sync');
let marca = rs.question('qual a marca do carro? ');
let cor = rs.question('Qual a cor do carro? ');
let modelo = rs.question('Qual o modelo? ');
let carro = {
    marcaCarro: marca,
    corCarro: cor,
    modeloCarro: modelo
};
console.log(`A marca é : ${carro.marcaCarro}`)
console.log(`A cor do carro é : ${carro.corCarro}`);
console.log(`O modelo é: ${carro['modeloCarro']}`);

let arquivoJson = 'carro.json'
let objectToString = JSON.stringify(carro);
fileSystem.writeFileSync(arquivoJson,objectToString)