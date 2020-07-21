const rs = require('readline-sync');
const fs = require('fs');

var carroJson = 'carro.json';
var bufferCarro = fs.readFileSync(carroJson);
var newCarro = JSON.parse(bufferCarro); 

function cadCarro() {
    var carro = {};
    carro.cor = rs.question('Informe a cor do carro: ');
    carro.marca = rs.question('Iforme a marca do carro' );
    carro.modelo = rs.question('Informe o modelo do carro: ');
    return carro;
}
    
newCarro.push(cadCarro());
var carroString = JSON.stringify(newCarro);
fs.writeFileSync(carroJson, carroString);
console.log(carroString);