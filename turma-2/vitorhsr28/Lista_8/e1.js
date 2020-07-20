const rs = require('readline-sync')

let carro = {}

carro.cor= rs.question ('Informe a cor do carro: ');
carro.modelo= rs.question ('Informe o modelo do carro: ');
carro.marca= rs.question ('Informe a marca do carro: ');

console.log (carro)