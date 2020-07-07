let rs = require ('readline-sync');

let cor = rs.question('Digite a cor do carro: ');
let modelo = rs.question('Digite o modelo do carro: ');
let marca = rs.question('Digite a marca do carro: ');

let carro = {};
carro.cor = cor;
carro.modelo = modelo;
carro.marca = marca;

console.log(`A cor do carro e : ${carro.cor}`);
console.log(`O modelo do carro e : ${carro.modelo}`);
console.log(`A marca do carro e : ${carro.marca}`);

let carroJSON = JSON.stringify(carro)
const fs = require ('fs');
let caminhoJson = 'carro.json';

fs.writeFileSync(caminhoJson, caminhoJson);