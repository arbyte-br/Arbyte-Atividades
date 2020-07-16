let rs = require('readline-sync');


let carro = {

};

carro.cor = rs.question('Digite a cor do veiculo: ');
carro.modelo = rs.question('Digite o modelo do veiculo: ');
carro.marca = rs.question('Digite a marca do veiculo: ');

console.log(carro)