let rs = require ('readline-sync');
let fs = require ('fs');

let cor = rs.question('Digite a cor do carro: ');
let modelo = rs.question('Digite o modelo do carro: ');
let marca = rs.question('Digite a marca do carro: ');

let carro = {
corCarro: cor,
modeloCarro: modelo,
marcaCarro: marca
};

let caminhoJson = 'carro.json';
let carroJSON = JSON.stringify(carro);

fs.writeFileSync(caminhoJson, carroJSON);
