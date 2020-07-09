let rs = require('readline-sync');

let numero = rs.questionInt('Digite um número: ');

function primo(numero) {
    
    for(let i = 2;i < numero; i++)

        if (numero % i === 0) return false;

    return numero !== 1;

}
if (primo(numero)) {
    console.log('O número '+numero+' é primo.');
}
else {
    console.log('O número '+numero+' não é primo');
}