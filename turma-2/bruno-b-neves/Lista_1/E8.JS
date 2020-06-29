var rs = require('readline-sync');

var ladoA = rs.questionInt('Digite um numero: ');
var ladoB = rs.questionInt('Digite mais numero: ');
var ladoC = rs.questionInt('Digite o ultimo numero: ');

if (ladoA == ladoB && ladoB == ladoC && ladoA == ladoC) {
    console.log('EQUILÁTERO');
}else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
    console.log('ISÓCELES');
}else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
    console.log('ESCALENO');
}else {
    console.log('Desculpe mas nao e compativel')
}