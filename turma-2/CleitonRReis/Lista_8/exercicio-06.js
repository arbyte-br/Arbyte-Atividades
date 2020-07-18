/*
6.Adicione no programa anterior, após a impressão dos dados, a funcionalidade de salvar o 
objeto carro em formato JSON. Utilize o JSON.stringify para transformar o objeto em string e 
após isso utilize os métodos da biblioteca ‘fs’ para salvar o arquivo. Salve o json como ‘carro.json’
*/

const rs = require('readline-sync');
const fs = require('fs');

let marca = rs.question('Por favor, informe a marca do seu carro: ');
let modelo = rs.question('Por favor, informe o modelo do seu carro: ');
let cor = rs.question('Por favor, informe a cor do seu carro: ');
let valor = rs.question('Por favor, informe o valor do seu carro: ');

let carro = {
    marca,
    modelo,
    cor,
    valor
};

const caminhoDoArquivo = /*'carro.json'*/'/Users/cleitonreis/Documents/logica/data/carro.json'

let carroSerializado = JSON.stringify(carro);

fs.writeFileSync(caminhoDoArquivo, carroSerializado);