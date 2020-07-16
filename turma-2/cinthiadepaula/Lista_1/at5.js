let rs = require('readline-sync');

let numero = rs.questionInt('Digite o primeiro numero? ')
let numero2 = rs.questionInt('Digite o segundo numero? ')
let numero3 = rs.questionInt('Digite o terceiro numero? ')


if (numero < numero2 || numero < numero3) {
    if (numero2 < numero3) {
        console.log(`o primeiro numero e: ${numero}, o segundo numero e: ${numero2}, o terceito numero e: ${numero3}`);

    }

    if (numero2 < numero || numero2 < numero3) {
        if (numero < numero3) {
            console.log(`o primeiro numero e: ${numero2}, o segundo numero e: ${numero}, o terceito numero e: ${numero3}`);

        }

        if (numero3 < numero || numero3 < numero2) {
            if (numero2 < numero) {
                console.log(`o primeiro numero e: ${numero3}, o segundo numero e: ${numero2}, o terceito numero e: ${numero}`);

            }
        }
    }
}
