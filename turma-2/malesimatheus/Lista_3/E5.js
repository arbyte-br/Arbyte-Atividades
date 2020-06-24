let rs = require('readline-sync');

let numero = Number(rs.question('Insira 0 para sair ou qualquer outra tecla para continuar: '));

while (numero !== 0) {
    numero = Number(rs.question('Insira 0 para sair ou qualquer outra tecla para continuar: '))
}

console.log('Você saiu!!!')