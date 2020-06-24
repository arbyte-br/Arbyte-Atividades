let rs = require('readline-sync');

let lados = Number(rs.question('Quantas lados tem o poligono? '));

let medida = Number(rs.question('Qual a medida dos lados? '));

let area = 0

switch (lados) {
    case 3 :
        area = (medida / 2 / 3 * 4) * medida / 2;
        console.log('TRIANGULO. Area = ' + area);
        break;
    case 4 :
        area = medida * medida;
        console.log('QUADRADO. Area = ' + area);
        break;
    case 5 :
        console.log('PENTAGONO');
        break;
    default :
        console.log('Numero de lados invalido');
}