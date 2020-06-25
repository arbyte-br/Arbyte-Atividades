let readline = require('readline-sync');

let numero1 = readline.questionInt('Informe o inicio da contagem: ');
let numero2 = readline.questionInt('Informe o final da contagem: ');

if (numero1 < numero2) {
    for (numero1; numero1 <= numero2; numero1++) {
        console.log(numero1);
    }
} else {
    console.log('Falha: O primeiro numero deve ser maior');
}