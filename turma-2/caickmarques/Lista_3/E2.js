let readline = require('readline-sync');

let numero1 = readline.questionInt('Informe o primeiro numero: ');
let numero2 = readline.questionInt('Informe o segundo numero: ');
let resultado = 0;

if (numero1 > 0 && numero2 > 0) {
    for (let i = 0; i < numero1; i++) {
        resultado += numero2;
    }
    console.log(resultado);
} else {
    console.log('Não são numeros maiores do que zero');
}