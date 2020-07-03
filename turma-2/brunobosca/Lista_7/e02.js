let rs = require('readline-sync')

let contador = 0

let numero = rs.questionInt('Digite um número: ')

let divisores = ''


function numeroPrimo () {
for(contador=1; contador<=numero; contador++)
if(numero % contador == 0) {
    divisores++;
}
if(divisores == 2) {
   console.log('É primo');
    } else {
   console.log('Não é primo');
    }
}

numeroPrimo()