let rs = require('readline-sync');

let numero = rs.questionInt('Digite um número: ');

while(numero != 0) {
    console.log('Insira 0 para sair ou qualquer outro número para continuar.');
    numero = rs.questionInt('Digite um número: ');
    
}
console.log('Você saiu.');""