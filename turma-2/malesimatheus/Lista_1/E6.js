let rs = require('readline-sync');

let altura = Number(rs.question('Qual e sua altura? '));

let sexo = rs.question('Digite 1 para feminino e 2 para masculino: ');

if (sexo == '1') {
    console.log('Peso sugerido e de ' + ((62.1 * altura) - 44.7 ));
} else if (sexo == '2') {
    console.log('Peso sugerido e de ' + ((72.7 * altura) - 58 ));
} else {
    console.log ('O sexo inserido e invalido!')
}