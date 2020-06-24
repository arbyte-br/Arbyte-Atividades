let rs = require('readline-sync');

let escala = rs.question('Digite C se quer transformar em Celsius, ou digite F se quer transformar em Fahrenheit: ');



if (escala == 'c') {
    let fah = Number(rs.question('Quanto em grau Fahrenheit? '));
    let resultado = (fah - 32) * 5 / 9;
    console.log(resultado.toFixed() + ' graus Celsius')
} else if (escala == 'f') {
    let cel = Number(rs.question('Quanto em graus Celsius? '));
    let resultado = (cel * 9 / 5) + 32;
    console.log(resultado.toFixed() + ' graus Fahrenheit');
} else {
    console.log('Tipo de temperatura invalido!!!')
}