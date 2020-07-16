let rs = require('readline-sync');

let valorN = rs.questionInt('Insira um numero: ');

function tabuada(numero) {
    for (let cont = 0; cont <= 10; cont++) {
        let resultado = numero * cont;
        console.log(`${cont} X ${numero} = ${resultado}`);
    }
}

console.log(tabuada(valorN));