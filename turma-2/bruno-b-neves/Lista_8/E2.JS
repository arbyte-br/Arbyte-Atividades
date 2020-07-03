// Chamando a biblioteca "Readline-Sync"
let rs = require('readline-sync');
// Chamando a biblioteca "File-system"
let fs = require('fs')
// Minhas variaveis da biblioteca "Readline-Sync"
let carro = {};
carro.cor = rs.question('Qual o a cor do veiculo? : ');
carro.modelo = rs.question('Qual o modelo do veiculo? : ');
carro.marca = rs.question('Qual a marca do veiculo? : ');

// Aqui estou convertendo a minha JSON em string
let carroCompleto = JSON.stringify(carro);

// Estou indicando o caminho do meu arquivo JSON
let caminho = './carro.json';

// Por fim finalizo minha aplicação chamando a função 'fs.writeFileSync'
fs.writeFileSync(caminho, carroCompleto)