let rs = require('readline-sync');

let marca = rs.question('Qual a marca do carro? ');
let cor = rs.question('Qual a cor do carro? ');
let modelo = rs.question('Qual o modelo do carro? ');

let obj = {
    marcaCarro: marca,
    corCarro: cor,
    modeloCarro: modelo
}

console.log('A marca é: '+ obj.marcaCarro);
console.log('A cor do carro é: '+ obj.corCarro);
console.log('O modelo é: '+ obj['modeloCarro']);