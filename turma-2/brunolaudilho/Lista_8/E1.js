let readline = require('readline-sync');

let marca = readline.question('Qual a Marca do veiculo? ');
let cor = readline.question('Qual a cor do veiculo: ');
let modelo = readline.question('Qual modelo do veiculo: ');

let carro = {
marcaCarro: marca,
corCarro: cor,
modeloCarro: modelo,
}
console.log ('A marca é ${carro.MarcaCarro}');
console.log ('A cor do carro é: ${carro.corCarro}');
console.log ('O modelo é: ${carro.modeloCarro}');