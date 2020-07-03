let rs = require('readline-sync');

let cor = rs.question('Qual o a cor do veiculo? : ');
let modelo = rs.question('Qual o modelo do veiculo? : ');
let marca = rs.question('Qual a marca do veiculo? : ');

function carro(completo) {
  return {
    'cor': cor, 
    'modelo': modelo,
    'marca': marca
  }
}
console.log(carro('cor', 'modelo', 'marca'))