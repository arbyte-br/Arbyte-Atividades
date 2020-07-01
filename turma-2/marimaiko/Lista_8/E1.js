// Crie um programa que receba 3 entradas do usuário. A cor, o modelo
// e a marca, crie um objeto Carro e atribua as entradas do usuário neste objeto.
// No final o programa deve imprimir as informações do carro.
// Utilize a criação de objetos para resolver este problema

let rs = require('readline-sync');

let carro ={}
carro.cor= rs.question('Cor do carro: ');
carro.modelo= rs.question('Modelo do carro: ');
carro.marca= rs.question('Marca do carro: ');

carro.cor= 'laranja';
carro.modelo= 'fit';
carro.marca= 'honda';
console.log(carro);