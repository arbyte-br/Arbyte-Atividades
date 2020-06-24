let rs = require('readline-sync');

let quantidade = Number(rs.question('Insira o número de repetições'));

while(quantidade > 0) {
    console.log('BIP BIP');
    quantidade = quantidade - 1;
}