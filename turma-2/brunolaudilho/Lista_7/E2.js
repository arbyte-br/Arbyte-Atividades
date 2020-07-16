let readline = require('readline-sync');

let valor = readline.question('Insira um numero: ');

function ePrimo(valor) {
    for (let i = 2; i < valor; i++) {
        if (valor % i == 0)
            return false
    }
    return true;
}
console.log(ePrimo(valor));