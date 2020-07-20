const readline = require('readline-sync');

let qtde = readline.question('Por gentileza quantas maçãs deseja comprar? ');
let valor = '';

if (qtde < 12) {
    valor = parseFloat(qtde * 0.30);
    console.log(`O valor total para ${qtde} maçãs é de ${valor} reais.`)
} else{
    valor = parseFloat(qtde * 0.25);
    console.log(`O valor total para ${qtde} maçãs é de ${valor} reais.`)
}