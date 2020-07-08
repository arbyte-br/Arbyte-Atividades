let rs = require('readline-sync');

let n1 = rs.questionInt('Insira o primeiro numero: ');
let n2 = rs.questionInt('Insira o segundo numero: ');

function comparaNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        return `O numero ${numero1} e maior`;
    } else {
        return `O numero ${numero2} e maior`;
    }

}

console.log(comparaNumeros(n1, n2));