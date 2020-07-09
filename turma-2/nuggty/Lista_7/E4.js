let user = require('readline-sync');

let numero = user.question('Insira um número para ver a sua tabuada completa: \n');
let resultado = '';
function tabuada(numero) {
    for (let i = 0; i <= 10; i++) {

        let resultado = i +'x'+ numero +'='+ (i * numero);
        console.log(resultado);
        }
}

tabuada(numero);