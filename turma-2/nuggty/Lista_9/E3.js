let user = require('readline-sync');
let isOdd = require('is-odd');

let usuario = user.questionInt('Insira um número: ');

if(isOdd(usuario)=== true) {
    console.log('O número '+ usuario +' é ímpar.');
}
else {
    console.log('O número'+ usuario +' é par.')
}